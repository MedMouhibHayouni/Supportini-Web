const {panier, lignePanier,produit} = require('../../models')
const {Op} = require("sequelize");


// ajouter panier //
const createPanier = async (req, res, next) => {
    const {quantite, prix} = req.body

    try {

        const ifexist = await panier.findOne({where: {utilisateurId: req.user.id}});


        if (!ifexist) {

            const newPanier = await panier.create({
                prix_tot: prix * quantite,

                utilisateurId: req.user.id,

            }).catch(err => console.log(err))

            if (newPanier) {

                const item = await lignePanier.create({
                    prix: req.body.prix,
                    quantite: req.body.quantite,
                    panierId: newPanier.id,
                    produitId: req.params.id
                });

                return res.status(201).json({newPanier, item});

            }
        }
//mawjouda lpanier
        else {
            const idprod = req.params.id

            const valid = await lignePanier.findOne({where: {produitId: idprod}});

            if (!valid) {
                const item2 = await lignePanier.create({
                    prix: req.body.prix,
                    quantite: req.body.quantite,
                    panierId: ifexist.id,
                    produitId: req.params.id

                })
                ifexist.prix_tot+=item2.prix
                ifexist.save()
                return res.status(201).json({item2});
            } else {
                valid.quantite++;
                valid.save();
                ifexist.prix_tot+=valid.prix
                ifexist.save()
                return res.status(201).json({valid});

            }

        }
    } catch
        (error) {
        return res.status(500).json({error: error.message});
    }
}

// affiche tout les Paniers //
const getAllPanier = async (req, res, next) => {
    try {

        const paniers = await panier.findAll();
        if (!paniers) {
            throw new Error("No panier found");
        }
        res.status(201).json({paniers});
    } catch (error) {
        res.status(500).json({"error": error.message})
    }
};
//Affichage Panier
const getPanier = async (req, res) => {
    try {
        const panierofuserconected = await panier.findOne({where: {utilisateurId: req.user.id}});
        if (!panierofuserconected) {
            return res.status(404).json({message:"panier n'existe pas"})
        }
        const lignepanier = await lignePanier.findAll({
            where: {
                panierId: panierofuserconected.id,

            },
            include: [{
                model: produit,
                attributes: ['nomproduit']
            }]
        });
        if (!lignepanier) {
            return res.status(404).json({message:"panier n'existe pas"})
        }
        return res.status(200).json({panierofuserconected, lignepanier})
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
}

//Afficher panier par id
const getOnePanier = async (req, res) => {
//     try {
//         const { utilisateurId } = req.params;
//         const panierData = await panier.findOne({
//             where: { id: utilisateurId},
//         });
//         if (!panierData) {
//             throw new Error("panier not found");
//         }
//         res.status(200).json({
//             panierData,
//         });
//     } catch (error) {
//         res.status(500).json({
//             error: error.message,
//         });
//     }
// };
    try {
        const pan = await panier.findOne({where: {utilisateurId: req.user.id}});
        if (!pan) {
            throw new Error("panier not found");
        }
        res.status(200).json({pan});
    } catch (error) {
        res.status(500).json({

            error: error.message,
        });
    }
};
//Supprimer Panier
const deletePanier = async (req, res) => {

    try {
        const panierofuserconected = await panier.findOne({where: {utilisateurId: req.user.id}});

        if (!panierofuserconected) {

           return res.status(404).json({message:"panier n'existe pas"})
        }

        const {idLignePanier} = req.params
        const panierId = panierofuserconected.id

        const lignepanierexiste = await lignePanier.findAll({
            where: {


                    produitId: idLignePanier



            }
        });

        if (lignepanierexiste) {

                await lignePanier.destroy({where: {id: lignepanierexiste[0].id}})

        }
        const checkPanierHasItem= await lignePanier.findOne({
            where:{
                panierId:panierId
            }
        })
        console.log(checkPanierHasItem)
        if (!checkPanierHasItem) {
            await panier.destroy({where: {id: panierId}})
                return res.status(200).json({message:"panier deleted"})
        } else {
            panierofuserconected.prix_tot-=lignepanierexiste[0].prix

            panierofuserconected.save()
            return res.status(200).json({panierofuserconected})

    } }catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
}
const updatequantite=async (req,res)=>{
   const {idPro}=req.params
    try {
        const item = await lignePanier.findOne({where:{produitId:idPro}})
        if(!item) {
            return res.status(400).json("not found")
        };
        item.quantite=req.body.quantite
        console.log(item)
        item.save();
        return res.status(200).json("updated")
    }catch (e) {
        res.status(500).json({error:e.message})
    }


}
//modifier panier
const updatePanier = async (req, res) => {
    try {
        const {panierid} = req.params;
        const [updated] = await panier.update(req.body, {
            where: {id: panierid},
        });
        if (updated) {
            const updatedpani = await panier.findOne({where: {id: panierid}});
            res.status(200).json({
                panier: updatedpani,
            });
        }
        throw new Error("panier not found");
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};
module.exports = {createPanier, getPanier, getOnePanier, deletePanier, updatePanier,updatequantite}