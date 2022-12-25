const {sallesport, suiviModel} = require ('../../models')
const {materialsalle} = require ('../../models')
const {imagesalle}=require('../../models')
const {user} = require ('../../models')
const db = require('../../models');
const Op = db.Sequelize.Op;



// ajouter salle de sport avec pluseur image //
const createGym = async (req , res, next) => {
    const id  = req.user.id;
    console.log(req.user)

    const {nomSalle,numTel,ville,rue,codePostal,description,prix,url}=req.body

    try {

        const image=req.files[0].filename;
      const  newGym = await sallesport.create({ nomSalle,numTel,ville,rue,codePostal,description,prix,url,imageVitrine:image,fk_idUser: id})
       if(newGym){
           console.log(req.files)
           if(req.files.length!=0){

               for (const el of req.files) {
                   await  imagesalle.create({imageVitrine:el.filename,fk_idsallesport:newGym.id})
               }

           }

       }
        return  res.status(201).json({message: "salle de sport ajouter", newGym})
    }catch (error){
        res.status(500).json({"error":error.message})
    }
};
///////////
// const postPlusImagesGym = async (req,res,next) =>{
//     try{
//         if(req.files.length!=0){
//            ;
//
//             for (const el of req.files) {
//                 await  imagesalle.create({imageVitrine:el.filename,fk_idsallesport:newGym.id})
//             }
//           return  res.status(200).json({message:"image enregistre",titre:"succes"})
//         }
//         return res.status(404).json({message:"image invalide"})
//     }catch (error){
//         res.status(500).json({"error":error.message})
//     }
// }
  const postImageGym = async (req,res,next)=>{
    const {id} = req.params;
    try {
        const updated = await sallesport.findOne({where: {id}});

        if(!updated){
            return res.status(404).json({message:"sallesport n'existe pas"})
        }
        if(req.file) {
            console.log(req.file)
            updated.imageVitrine = req.file.filename
            updated.save()
        }
        return res.status(200).json({message:"Photo Enregistré", titre:"Réussite"})
    }catch(e){
        res.status(500).json({"error": e.message})
    }
}
//                 // ajouter salle de sport //
// const createGym = async (req , res, next) => {
//
//     try {
//
//       const  newGym = await sallesport.create({ fk_idUser:req.body.fk_idUser,
//       descriprtion:req.body.descriprtion,  codePostal:req.body.codePostal,  prix:req.body.prix,
//       rue:req.body.rue,  ville:req.body.ville,  numTel:req.body.numTel,
//       nomSalle:req.body.nomSalle,imageVitrine: req.file.path})
//         return  res.status(201).json({message: "created", newGym})
//
//     }catch (error){
//        console.log(error.message)
//         res.status(500).json({"error":error.message})
//     }
// };
            // affiche tout les salle de sport //
const getAllGym = async (req , res , next) => {
    try {
        const gyms = await sallesport.findAll({

            include: [{
                model: user,
                attributes:['email' ,'nom','prenom','status'],
                right : true,
                where:{
                    status : 1
                },
            }],
            include:[{model : imagesalle
            }]
        } );
        if(!gyms){
            return res.status(404).json({ message: "No Gym Found!" });
        }
     res.status(201).json({gyms});
    }catch (error){
        res.status(500).json({"error":error.message})
    }
};
const getGymImages = async (req, res, next) => {
    try {
        const { id } = req.params;
        const images = await imagesalle.findAll({
        where: {fk_idsallesport : id}})
        if (!imagesalle) {
            throw new Error("No imagesalle found");}
        res.status(200).json({ images });
    } catch (error) {
        res.status(500).json({ "error": error.message })
    }
};

// afficher les salle par id user //

const getAllGymWithIdUser = async (req , res , next) =>{
    try {
        const id = req.user.id
        const mygym = await sallesport.findAll({
            include: [{
                model: user,
                attributes:['email' ,'nom','prenom','status'],
                right : true,
                where:{
                      status : 1,
                },
                // model : imagesalle, where : { }
            }],
            where:{
                fk_idUser : id
            }
        } );
        if(!mygym){
            return res.status(404).json({ message: "No Gym Found!" });
        }
        res.status(201).json({mygym});
    }catch (error){
        res.status(500).json({"error":error.message})
    }
};
         // affiche une seule salle de sport par id et leur materielle //
const getGym = async (req , res , next) => {
    try {
        const {id} = req.params;
const gym = await  sallesport.findOne({where:{id}, include:[{model : imagesalle
    }]
})

if(!gym){
    return res.status(404).json({ message: "Nooooo Gym Found!" });
}
       const equipmentGym = await materialsalle.findAll({
             where :{ fk_idSalle:id},

        });
        if (!equipmentGym) {
            return res.status(404).json({ message: "sans équipement" });
        }
        res.status(200).json({gym,equipmentGym})
    } catch (error) {
        res.status(500).json({"error": error.message})
    }
};
                       //delete gym //
const deleteGym = async (req, res , next) => {
    try {
        const { id } = req.params;
        const deleted = await sallesport.destroy({
            where: { id },
        });
        if (!deleted) {
           res.status(404).json({ "message": "salle de sport n'existe pas"});
        }
    } catch (error) {
        res.status(500).json({ "error": error.message});
    }
};
                 //update Gym //
const updateGym = async (req, res , next) => {
    try {
        const { id } = req.params;
        const updated = await sallesport.update(req.body, {
            where: { id },
        });
        if (updated) {
            const updated = await sallesport.findOne({ where:{ id }});
            return  res.status(201).json({message: "modifié avec succès ", updated})
        }
    } catch (error) {
        res.status(500).json({"error":error.message})
    }
};

          //sort prix DESC //
const getSortedGymWithPriceDesc = async (req , res , next ) => {
    try {
        const gym = await sallesport.findAll({
            order :[ ['prix', 'DESC'] ]
        });
        console.log(gym)
        res.status(200).json([...gym])
    }catch (error){
        res.status(500).json({"error": error.message})
    }
}
                 //sort prix ASC //
const getSortedGymWithPriceAsc = async (req , res , next ) => {
    try {
        const gym = await sallesport.findAll({
            order :[ ['prix', 'ASC'] ]
        });
        res.status(200).json([...gym])
    }catch (error){
        res.status(500).json({"error": error.message})
    }
}

                   //recherche salle avec nom //
const getGymByFullName = async  (req , res , next) => {
    try {
      const { nomSalle } = req.body;
        const gym = await sallesport.findAll({
            where: {
                nomSalle: nomSalle,
            }
        });
        res.status(200).json([...gym])
    } catch (error) {
        res.status(500).json({"error": error.message})
    }
};
                 //recherche salle avec lettre de nom //
const findGymNameByLettre = async (req , res , next ) => {
    const nomSalle = req.query.nomSalle;
    var condition = nomSalle ? { nomSalle: { [Op.like]: `%${nomSalle}%` } } : null;

    sallesport.findAll({ where: condition })
        .then(data => {
            res.send([...data]);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving sallesport."
            });
        });
};
               //affiche derinere 5 salle //
const gettLastFiveGym = async (req,res,next) => {
   let fiveGyms = []
    try {
        let gyms = await sallesport.findAll({
            include: [{
                model: user, attributes: ['email', 'nom', 'prenom', 'status'],
                right: true, where: {status: 1},
            }]
        });
        if (!gyms.length) {


            return res.status(404).json({message: "No Gym Found!",empty:false});
        }
        gyms=gyms.reverse()
        if(gyms.length<=5){

            return res.status(200).json({empty: true,fiveGyms:gyms});
        }
        let i = gyms.length-1  ;
        while (fiveGyms.length<5||fiveGyms.length==0) {

            fiveGyms.push(gyms[i])
            i--;

        }

       fiveGyms= fiveGyms.reverse()
       return res.status(200).json({fiveGyms,empty:true})

    } catch (error) {
        res.status(500).json({"error": error.message})
    }
}



module.exports = {createGym,getAllGym, getGym,deleteGym,updateGym,
    getSortedGymWithPriceDesc,
    getSortedGymWithPriceAsc,getGymByFullName,findGymNameByLettre,
    getAllGymWithIdUser,gettLastFiveGym,postImageGym,getGymImages
    }
