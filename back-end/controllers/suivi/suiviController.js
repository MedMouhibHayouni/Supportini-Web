const { suiviModel, trainer, coach, user} = require('../../models')
const db = require('../../models');
const Op = db.Sequelize.Op;
const getAllSuivi = async (req, res, next) => {
    try {
        const suivis = await suiviModel.findAll();
        if (!suiviModel) {
            throw new Error("No suivi found");
        }
        res.status(200).json({ suivis, });
    } catch (error) {
        res.status(500).json({ "error": error.message })
    }
};

const getAllSuiviAscendant = async (req, res, next) => {
    try {
        const id = req.user.id;
        const trainerCurent = await trainer.findOne({ where: { fk_idUser: id } })
        const suivis = await suiviModel.findAll({
            where:{fk_id_entr:trainerCurent.id},
            order: [['id', 'ASC']]
        });
        if (!suiviModel) {
            throw new Error("No suivi found");
        }
        res.status(200).json({ suivis, });
    } catch (error) {
        res.status(500).json({ "error": error.message })
    }
};



/* Affichage By Id */
const getOneSuivi = async (req, res) => {
    try {
        const { suiviId } = req.params;
        const suivis = await suiviModel.findOne({
            where: { id: suiviId },
            order: [['date_suivi', 'ASC']]
        });
        if (!suivis) {
            throw new Error("Suivi not found");
        }
        res.status(200).json({
            suivis,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

/* Filtrer Suivi By Entrainer */
const getByEntrainer = async (req, res, next) => {
    try {
        const id = req.user.id;
        const trainerCurent = await trainer.findOne({ where: { fk_idUser: id } })
        if (trainerCurent) {
            const sui = await suiviModel.findAll({
                where: {
                    fk_id_entr: trainerCurent.id
                },
                order: [['date_suivi', 'DESC']]
            });
            res.status(200).json({sui})
        }
    } catch (error) {
        res.status(500).json({ "error": error.message })
    }
};

const getByIdEntrainer = async (req, res, next) => {
    try {
        const { idEntr } = req.params;
        console.log(idEntr)
        if (idEntr) {
            const sui = await suiviModel.findAll({
                where: {
                    fk_id_entr: idEntr
                },
                order: [['date_suivi', 'DESC']]
            });
            res.status(200).json({sui})
        }else { throw new Error("Entrainee not found");}

    } catch (error) {
        res.status(500).json({ "error": error.message })
    }
};



const getUserBySuivi = async (req, res, next) => {
         try {
            const {idCoach} = req.params;
            console.log(idCoach);
            const coachid = await coach.findOne({where:{id:idCoach}});
            if(coachid){
                const coachInUser =await user.findOne({where:{id:coachid.fk_idUser}});
                res.status(200).json({coachInUser});
            }
         }catch(error){
            res.status(500).json({"error":"No User Found"});
         }

}



const getCurrentTrainer = async (req, res, next) => {
    try {
        const id = req.user.id;
        const trainerCurent = await trainer.findOne({ where: { fk_idUser: id } })
        if (trainerCurent) {
            const sui = await suiviModel.findAll({
                where: {
                    fk_id_entr: trainerCurent.id
                },
                order: [['id', 'DESC']]
            });
            res.status(200).json({sui})
        }
    } catch (error) {
        res.status(500).json({ "error": error.message })
    }
};

const getOneByEntrainer = async (req, res, next) => {
    try {

        const { id } = req.user;

        const trainerCurent = await trainer.findOne({ where: { fk_idUser: id } })
        if (trainerCurent) {
            const suivis = await suiviModel.findOne({
                where: {
                    fk_id_entr: trainerCurent.id
                },
                order: [['id', 'DESC']]
            });
            res.status(200).json({ suivis })
        }


    } catch (error) {
        res.status(500).json({ "error": error.message })
    }
};



/* Filtrer Suivi By Coach */
const getByCoach = async (req, res, next) => {
    try {
        const id = req.user.id;
        const coachCurent = await coach.findOne({ where: { fk_idUser: id } })
        const suivis = await suiviModel.findAll({
            where: {
                fk_id_coach: coachCurent.id
            },
            order: [['date_suivi', 'ASC']]
        });
        let newSuivis = [];
        let suivi = {};
        for (let i in suivis) {
            fkEntr = suivis[i]['fk_id_entr'];
            suivi[fkEntr] = suivis[i];
        }
        for (i in suivi) {
            newSuivis.push(suivi[i]);
        }
        res.status(200).json({ newSuivis })
    } catch (error) {
        res.status(500).json({ "error": error.message })
    }
}
const findEntrNameByLettreForCoach = async (req, res, next) => {
    try {
        const id = req.user.id;
        const nom = req.query.nom;
        const coachCurent = await coach.findOne({ where: { fk_idUser: id } })
        var condition = nom ? { nom: { [Op.like]: `%${nom}%` },fk_id_coach: coachCurent.id, } : null;

        const suivis = await suiviModel.findAll({
            where: condition,
            order: [['date_suivi', 'ASC']]
        })
        let newSuivis = [];
        let suivi = {};
        for (let i in suivis) {
            fkEntr = suivis[i]['fk_id_entr'];
            suivi[fkEntr] = suivis[i];
        }
        for (i in suivi) {
            newSuivis.push(suivi[i]);
        }
        res.status(200).json({ newSuivis })
    } catch (error) {
        res.status(500).json({ "error": error.message })
    }
}


const getFirstSuiviByCoach = async (req, res, next) => {
    try {

        const id = req.user.id;
        
        const coachCurent = await coach.findOne({ where: { fk_idUser: id } })
        const suivis = await suiviModel.findAll({
            where: {
                fk_id_coach: coachCurent.id,
            },
            order: [['date_suivi', 'DESC']]

        });
        let firstSuivis = [];
        let suivi = {};
        for (let i in suivis) {
            fkEntr = suivis[i]['fk_id_entr'];
            suivi[fkEntr] = suivis[i];
        }
        for (i in suivi) {
            firstSuivis.push(suivi[i]);
        }
        res.status(200).json({ firstSuivis })
    } catch (error) {
        res.status(500).json({ "error": error.message })
    }
}

/* Ajout */
const createSuivi = async (req, res, next) => {
    const {poids, taille} = req.body
    const  idEntr  = req.user.id;
    const  nomEntr = req.user.nom
    const  prenomEntr = req.user.prenom
    const { coachId } = req.params;
    const trainerCurent = await trainer.findOne({ where: { fk_idUser: idEntr } })
    try {
        var date_ob = new Date();
        var day = ("0" + date_ob.getDate()).slice(-2);
        var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        var year = date_ob.getFullYear();

        var date = year + "-" + month + "-" + day;
        heigh = req.body.taille;
        weigh = req.body.poids;
         bmi = (weigh / ((heigh * heigh) 
        / 10000)).toFixed(2);
        
        const newSuivi = await suiviModel.create({ nom:nomEntr, prenom:prenomEntr, age:trainerCurent.age, poids, taille, imc: bmi, date_suivi: date,fk_id_entr:trainerCurent.id,fk_id_coach:coachId})
        console.log(coachId)
        return res.status(201).json({ message: "Suivi Created", newSuivi })

    } catch (error) {
        res.status(500).json({ "error": error.message })
    }

};

/* Suppression */
const deleteSuivi = async (req, res) => {
    try {
        const { suiviId } = req.params;
        const deleted = await suiviModel.destroy({
            where: { id: suiviId },
        });
        if (!deleted) {
            throw new Error("Suivi not found");
        }
        return res.status(200).json("Suivi " + suiviId + " Deleted");
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

/* Mise A jour */
const updateSuivi = async (req, res) => {
    try {
        const { suiviId } = req.params;
        const [updated] = await suiviModel.update(req.body, {
            where: { id: suiviId },
        });
        if (updated) {
            const updatedSuivi = await suiviModel.findOne({ where: { id: suiviId } });
            res.status(200).json({
                suivi: updatedSuivi,
            });
        }
        throw new Error("Suivi not found");
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};







module.exports = { getAllSuivi, getAllSuiviAscendant, getOneByEntrainer, getOneSuivi, getByEntrainer,getByIdEntrainer,getCurrentTrainer, getByCoach,getUserBySuivi, createSuivi, deleteSuivi, updateSuivi, getFirstSuiviByCoach, findEntrNameByLettreForCoach }