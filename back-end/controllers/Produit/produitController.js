const {produit} = require ('../../models')
const {produitimg} = require ('../../models')
const db = require('../../models');
const Op = db.Sequelize.Op;

// ajouter produit //
const createProduct = async (req , res, next) => {
    const {nomproduit,prix,quantite,description,categorieId}=req.body
    try {
        const image=req.files[0].filename;
        const  newproduit = await produit.create({nomproduit,prix,quantite,description,categorieId,imageProduit	:image})
        if(newproduit){

            if(req.files.length!=0){

                for (const el of req.files) {
                    await  produitimg.create({imageProduit:el.filename,produitId:newproduit.id})
                }

            }

        }

        return  res.status(201).json({message: "created", newproduit})
    }catch (error){
        res.status(500).json({"error":error.message})
    }
};
// affiche tout les produits //
const getAllProduct = async (req , res , next) => {
    try {
        const produits = await produit.findAll();
        console.log(produits)
        if(!produits){
            throw new Error("No product found");
        }
        res.status(201).json([...produits]);
    }catch (error){
        res.status(500).json({"error":error.message})
    }
};

//Afficher produit par id
const getOneProduct = async (req, res,next) => {

    try {
        const { id } = req.params;
        const produitData = await produit.findOne({
            where: {id: id}
        });
        if (!produitData) {
            throw new Error("produit not found");
        }
        res.status(201).json(
           produitData);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};
//Supprimer Produit
const deleteProduct = async (req, res) => {

    try {
        const { id } = req.params;
        const deleted = await produit.destroy({
            where: { id: id },
        });
        if (!deleted) {
            throw new Error("produit not found");
        }
       return res.status(201).json
       ({"message":"produit deleted"});
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};
//modifier produit
const updateProduct = async (req, res) => {


        const { id } = req.params;
        const updated = await produit.update(req.body, {
            where: { id: id },
        });
        if (updated) {
            const updatedprod = await produit.findOne({ where: { id: id } });
            res.status(201).json({
                produit: updatedprod
            });
        }

    }


//filtrer les produits avec lettre du nom //
const findProdNameByLettre = async (req , res , next ) => {
    const nomProduit = req.query.nomproduit;
    var condition = nomProduit ? {nomproduit: {[Op.like]: `%${nomProduit}%`}} : null;

    produit.findAll({where: condition})
        .then(data => {
            res.send([...data]);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving productt!" });

        })

};

const getSortedProdWithPriceDesc = async (req , res , next ) => {
    try {
        const produits = await produit.findAll({
            order :[ ['prix', 'DESC'] ]
        });

        res.status(200).json([...produits])
    }catch (error){
        res.status(500).json({"error": error.message})
    }
}
//sort prix ASC //
const getSortedProdWithPriceAsc = async (req , res , next ) => {
    try {
        const produits = await produit.findAll({
            order :[ ['prix', 'ASC'] ]
        });
        res.status(200).json([...produits])
    }catch (error){
        res.status(500).json({"error": error.message})
    }
}

const getProduitImages = async (req, res, next) => {
    try {
        const { id } = req.params;
        const images = await produitimg.findAll({
            where: {produitId : id}})
        if (!produitimg) {
            throw new Error("No image Product found");}
        res.status(200).json({ images });
    } catch (error) {
        res.status(500).json({ "error": error.message })
    }
};

module.exports = {getProduitImages,createProduct,getAllProduct,getOneProduct,deleteProduct,updateProduct,getSortedProdWithPriceDesc, getSortedProdWithPriceAsc,findProdNameByLettre}