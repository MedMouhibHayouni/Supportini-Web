const {commande} = require ('../../models')


// ajouter Commande //
const createCommande = async (req , res, next) => {
    const {nom}=req.body
    try {
        const  newcommande = await commande.create({nom})
        return  res.status(201).json({message: "created", newcommande})
    }catch (error){
        res.status(500).json({"error":error.message})
    }
};
// affiche tout les Categories//
const getAllCommande = async (req , res , next) => {
    try {
        const commande= await commande.findAll();
        if(!commande){
            throw new Error("No Commande found");
        }
        res.status(201).json({commande,});
    }catch (error){
        res.status(500).json({"error":error.message})
    }
};

//Afficher Commande par id
const getOneCommande = async (req, res) => {
    try {
        const { commandeid } = req.params;
        const commandeData = await commande.findOne({
            where: { id: commandeid},
        });
        if (!commandeData) {
            throw new Error("commande not found");
        }
        res.status(200).json({
            commandeData,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};
//Supprimer Commande
const deleteCommande = async (req, res) => {
    try {
        const { commandeid } = req.params;
        const deleted = await commande.destroy({
            where: { id: commandeid },
        });
        if (!deleted) {
            throw new Error("Commande not found");
        }
        res.status(204).send("Commande deleted");
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};
//modifier Commande
const updateCommande = async (req, res) => {
    try {
        const { commandeid } = req.params;
        const [updated] = await commande.update(req.body, {
            where: { id: commandeid },
        });
        if (updated) {
            const updatedcom = await commande.findOne({ where: { id: commandeid } });
            res.status(200).json({
                commande: updatedcom,
            });
        }
        throw new Error("commande not found");
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};
module.exports = {createCommande,getAllCommande,getOneCommande,deleteCommande,updateCommande}