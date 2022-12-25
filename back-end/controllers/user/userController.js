const {user, sallesport} = require("../../models");
const {trainer} = require("../../models");
const {coach} = require("../../models");
const {galery} = require("../../models")
const fs = require('fs');
const bcrypt = require('bcrypt');
const path = require("path");
const {serializeUser} = require("../../utils/Auth");
const db=require("../../models");
const  Op=db.Sequelize.Op
const getAllUsers = async (req, res, next) => {
    try {
        const listUsers = await user.findAll();
        if (!listUsers) {
            return res.status(404).json({"message": "No users found"})
        }
        return res.status(200).json(listUsers);
    } catch (error) {
        return res.status(500).json({"error": error.message})
    }
}
const getUserWithProfile = async (req, res, next) => {
    try {

        const {id} = req.user;

        if (req.user.fk_idRole == 2) {
            const profil = await trainer.findAll({

                include: [
                    {
                        model: user, where: {id},
                    }]
            });
        const images =await galery.findAll({where:{fk_idUser:id}})
            if(images.length==0)
                return res.status(200).json({profil});
            return res.status(200).json({profil,images});
        } else if (req.user.fk_idRole == 3) {
            const profil = await coach.findAll({
                include: [{model: user, where: {id}  }]
            });
            const images =await galery.findAll({where:{fk_idUser:id}})
            if(images.length==0)
                return res.status(200).json({profil});
            return res.status(200).json({profil,images});
        } else {
            const profil = await user.findAll({
                 where: {id: id}



            });
            const images =await galery.findAll({where:{fk_idUser:id}})
            if(images.length==0)
                return res.status(200).json({profil});
            return res.status(200).json({profil,images});
        }

    } catch (error) {
        res.status(500).json({"error": error.message})
    }
}
const banUser = async (req, res, next) => {
    try {
        const {id} = req.params;
        const currentUser = await user.findOne({
            where: {id},
        });
        if (!currentUser) {
            res.status(404).json({"message": "no user found"});
        }
        if (currentUser.status == 1) {
            currentUser.status = 0
            currentUser.save()
            res.status(200).json({"message": currentUser.nom + " est banné", "titre": "Bannir avec succée"})
        } else {
            currentUser.status = 1
            currentUser.save()
            res.status(200).json({"message": currentUser.nom + " est unbanné", "titre": "unBannir avec succée"})
        }
    } catch (error) {
        res.status(500).json({"error": error.message})
    }
}
const createProfile = async (req, res, next) => {
    const {check} = req.params
    try {
        if (parseInt(check)) {

            const {age, taille, poids, sexe, fk_idUser} = req.body
            const alreadyExistUser = await trainer.findOne({where: {fk_idUser}}).catch((err) => {
                console.log("Error:", err)
            })
            console.log({age, taille, poids, sexe, fk_idUser})
            if (alreadyExistUser) {
                return res.status(302).json({message: "Entrainé  existe déja"})
            }
            const customerTrainer = await trainer.create({
                age,
                taille,
                poids,
                sexe,
                fk_idUser
            }).catch(err => console.log(err));

            // if(req.files.length!=0){
            //     for (const el of req.files){
            //         await galery.create({image:el.filename,fk_idUser:customerTrainer.id})
            //     }
            // }
            res.status(200).json({"message": "Inscription avec succée", customerTrainer})
        } else {
            const {specialite, fk_idUser} = req.body

            const alreadyExistUser = await coach.findOne({where: {fk_idUser}}).catch((err) => {
                console.log("Error:", err)
            })
            if (alreadyExistUser) {
                return res.status(302).json({message: "Entraineur  existe déja"})
            }
            const spec = specialite.toString()
            const customerCoach = await coach.create({specialite: spec, fk_idUser});
            res.status(200).json({"message": "Inscription avec succée", customerCoach})
        }

    } catch (error) {
        res.status(500).json({"error": error.message})
    }
}
const updateUser = async (req, res, next) => {
    const {id} = req.user;


    try {
        const updated = await user.update(req.body, {
            where: {id}
        })

        if (updated) {
            const updated = await user.findOne({where: {id}});
            if (req.body.password) {
                const salt = await bcrypt.genSalt(10);
                const hash = await bcrypt.hash(req.body.password, salt);
                updated.password = hash;
                updated.save()
            }


            return res.status(200).json({"message": "Modification Enregistré", "titre": "Réussite"});
        }
    } catch (error) {
        res.status(500).json({"error": error.message})
    }
}
const postImageProfil = async (req, res, next) => {
    const {id} = req.user;
    try {

        const updated = await user.findOne({where: {id}});
        console.log(req.file)
        if (!updated) {
            return res.status(404).json({message: "utilisateur n'existe pas"})
        }
        if (req.file) {
            console.log(req.file)
            updated.image_name = req.file.filename
            updated.save()
        }
        return res.status(200).json({message: "Photo Enregistré", titre: "Réussite",updated})
    } catch (e) {
        res.status(500).json({"error": e.message})
    }

}
const updateAdminImageProfil = async (req, res, next) => {
    const {id} = req.params;
    try {

        const updated = await user.findOne({where: {id}});
        console.log(req.file)
        if (!updated) {
            return res.status(404).json({message: "utilisateur n'existe pas"})
        }
        if (req.file) {
            console.log(req.file)
            updated.image_name = req.file.filename
            updated.save()
        }
        return res.status(200).json({message: "Photo Enregistré", titre: "Réussite"})
    } catch (e) {
        res.status(500).json({"error": e.message})
    }

}

const updateProfile =async (req,res,next)=>{
     try {
        if (req.user.fk_idRole==2){
            const updated = await trainer.update(req.body, {
                where: {fk_idUser:id}})
            if (updated) {
                const updated = await trainer.findOne({where: {fk_idUser:id}});
                res.status(200).json({updated});}
        }else if (req.user.fk_idRole==3){
                 const {specialite} = req.body // lezmha tableau
                     console.log(specialite)
                  const updated = await coach.findOne({
                    where: {fk_idUser:req.user.id}
                    });
            const spec = specialite.toString()
            console.log(spec)
            updated.specialite=spec
            updated.save();
            res.status(200).json({updated});
            console.log(updated)
        }else {
            res.status(401).json({"message":"ce n'est pas entraineur et entrainé"});

        }

    } catch (error) {
        res.status(500).json({"error": error.message})
    }
}
const getByRole = async (req, res, next) => {
    try {
        const {idRole} = req.params

        const allUser = await user.findAll({
            model: user,
            attributes: ['nom', 'prenom', 'email', 'cin', 'phone', 'status', 'fk_idRole'],
            where: {fk_idRole: idRole},
        });
        if (!allUser) {
            return res.status(404).json({message: "No user Found!"});
        }
        return res.status(200).json([...allUser])
    } catch (error) {
        return res.status(500).json({"error": error.message})
    }
}
const addGalery = async (req, res, next) => {
    try {
        if (req.files.length != 0) {

            for (const el of req.files) {
                await galery.create({image: el.filename, fk_idUser: req.user.id})
            }
            return res.status(201).json({message: "Image ajoutée", titre: "Enregistré"})
        }
        return res.status(404).json({message: "Fichier Invalide", titre: "Erreur"})
    } catch (error) {
        res.status(500).json({"error": error.message})
    }
}
const deleteImageGallery = async (req, res, next) => {

    try {
        const {id} = req.params;
        const existImage = await galery.findOne({where: {id}})
        if (!existImage) {
            res.status(404).json({"message": "image n'existe pas"})
        }
        const DeleteImage = await galery.destroy({where: {id}})
        console.log(existImage.image)

        fs.unlink("../../public/images/GaleryUser/" + existImage.image, async (err) => {
            if (err) {
                console.error(err)
                return
            }
            console.log("Delete File successfully.");


        });
        res.status(200).json({"message": "image supprimé avec succées"})
    } catch (error) {
        res.status(500).json({"error": error.message})
    }
}
const getCurrentUser = async (req, res, next) => {

    try {
        const currentUser = await user.findOne({where: {id: req.user.id}})


        res.status(200).json({"user": serializeUser(currentUser), "success": true})
    } catch (e) {
        res.status(500).json({"error": e.message})
    }
}

const getIdCoachByIdUser=async (req,res,next)=>{
    try{

        const idCoach= await coach.findOne({
            where:{
                fk_idUser:req.user.id
            }
        })
idc=idCoach.id
       res.status(200).json({idc})

    }catch (e) {
        res.status(500).json({"error": e.message})
    }
}


const getCoachInformation=async (req,res,next)=>{
    const {idCoach}=req.params

    console.log(typeof idCoach )
    try{
        const coatch=await coach.findOne({where:{id:idCoach}})
        console.log(coatch)
             const fk=coatch.fk_idUser
        const coachUser=await user.findOne({where:{
            id:fk
            }})

        const images =await galery.findAll({where:{fk_idUser:idCoach}})
        for(const el of images){
            console.log(el.image)
        }
        // if(images.length===0)
        //     return res.status(200).json({coachUser});
        return res.status(200).json({coachUser,images});


    }catch (e) {
        res.status(500).json({"error": e.message})
    }
}


module.exports = {
    getAllUsers,
    getUserWithProfile,
    banUser,
    createProfile,
    getByRole,
    updateUser,
    updateProfile,
    addGalery,
    deleteImageGallery,
    getCurrentUser,
    postImageProfil,
    updateAdminImageProfil,
    getIdCoachByIdUser,
    getCoachInformation

}