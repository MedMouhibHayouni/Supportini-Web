const {categorie} = require ('../../models')


// ajouter Categorie //
const createCategorie = async (req , res, next) => {
    const {nom}=req.body
    try {
        const  newcategorie = await categorie.create({nom})
        return  res.status(201).json({message: "created", newcategorie})
    }catch (error){
        res.status(500).json({"error":error.message})
    }
};
// affiche tout les Categories//
const getAllCategorie = async (req , res , next) => {
    try {
        const categories= await categorie.findAll();
        if(!categories){
           return res.status(400).json({message:'not found'})
        }
      return   res.status(200).json({categories});
    }catch (error){
        res.status(500).json({"error":error.message})
    }
};

//Afficher Categorie par id
const getOneCategorie = async (req, res) => {
    try {
        const { id } = req.params;
        const categories = await categorie.findOne({
            where: { id: id},
        });
        if (!categories) {
            throw new Error("Categorie not found");
        }
        res.status(200).json({
           categories,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};
//Supprimer Categorie
const deleteCategorie = async (req, res) => {
    try {
        const { categorieid } = req.params;
        const deleted = await categorie.destroy({
            where: { id: categorieid },
        });
        if (!deleted) {
            throw new Error("Categorie not found");
        }
        res.status(204).send("Categorie deleted");
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};
//modifier Categorie
const updateCategorie = async (req, res) => {
    try {
        const { categorieid } = req.params;
        const [updated] = await categorie.update(req.body, {
            where: { id: categorieid },
        });
        if (updated) {
            const updatedcat = await categorie.findOne({ where: { id: categorieid } });
            res.status(200).json({
                categorie: updatedcat,
            });
        }
        throw new Error("categorie not found");
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};
module.exports = {createCategorie,getAllCategorie,getOneCategorie,deleteCategorie,updateCategorie}