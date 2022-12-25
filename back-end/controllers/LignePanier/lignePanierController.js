const {lignePanier, panier,user} = require ('../../models')



//ajouter lignepanier
const createLignePanier = async (req , res, next) => {
    const {quantite,prix}=req.body

    try {
        const  newlignep = await lignePanier.create({quantite,prix})

        return  res.status(201).json({message: "created",   newlignep })

    }catch (error){
        res.status(500).json({"error":error.message})
    }

};
// ajouter ligne panier et panier//
// const createLignePanier = async (req , res, next) => {
//     const {quantite,prix}=req.body
//
//     try {
// const newlignep = await lignePanier.create({ quantite,prix });
//
// const newpanier = await panier.create({prix_tot});
// await newlignep.createPanier(newpanier, { through: { selfGranted: false } });
// const result = await user.findOne({
//
//     include: panier
// }) ;
// console.log(result);
//         return  res.status(201).json({message: "created",   newlignep ,newpanier})
//     }catch (error){
//         res.status(500).json({"error":error.message})
//     }
//
// };
// affiche tout les lignes de paniers //
const getAllLignePanier = async (req , res , next) => {
    try {
        const lignePaniers = await lignePanier.findAll();
        if(!lignePaniers){
            throw new Error("No ligne panier found");
        }
        res.status(201).json({lignePanier,});
    }catch (error){
        res.status(500).json({"error":error.message})
    }
};

//Afficher ligne de panier par id
const getOneLignePanier = async (req, res) => {
    try {
        const { Lpanierid } = req.params;
        const LPanierData = await lignePanier.findOne({
            where: { id: Lpanierid},
        });
        if (!LPanierData) {
            throw new Error("lignePanier not found");
        }
        res.status(200).json({
            LPanierData,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};
//Supprimer LignePanier
const deleteLignePanier = async (req, res) => {
    try {
        const { LignePanierid } = req.params;
        const deleted = await lignePanier.destroy({
            where: { id: LignePanierid },
        });
        if (!deleted) {
            throw new Error("Ligne Panier not found");
        }
        res.status(204).send("Ligne Panier deleted");
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};
//modifier lignePanier
const updateLignePanier = async (req, res) => {
    try {
        const { LignePanierid } = req.params;
        const [updated] = await lignePanier.update(req.body, {
            where: { id: LignePanierid },
        });
        if (updated) {
            const updatedlpan = await lignePanier.findOne({ where: { id: LignePanierid } });
            res.status(200).json({
                lignePanier: updatedlpan,
            });
        }
        throw new Error("ligne panier not found");
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};
module.exports = {createLignePanier,getAllLignePanier,getOneLignePanier,deleteLignePanier,updateLignePanier}