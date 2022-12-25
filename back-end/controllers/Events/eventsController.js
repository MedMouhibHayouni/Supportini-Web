const {eventsModel,trainer} = require('../../models');
const db = require('../../models');
const Op = db.Sequelize.Op;


const getEventByEntrainer = async (req, res, next) => {
    try {
        const id = req.user.id;
         
            const eventsTrainer = await eventsModel.findAll({
                where: {
                    fk_idUser: id
                },
            });
            res.status(200).json([eventsTrainer])

    } catch (error) {
        res.status(500).json({ "error": error.message })
    }
};

const getEventToDelete = async (req, res, next) => {
    try {
        const id = req.user.id;
         
            const events = await eventsModel.findOne({
                where: {
                    fk_idUser: id
                },
                
            });
            if (!events) {
                throw new Error("No Events found");
            }
            res.status(200).json({events})

    } catch (error) {
        res.status(500).json({ "error": error.message })
    }
};

const deleteEvent = async (req, res) => {
    try {
        const { eventId } = req.params;
        const deleted = await eventsModel.destroy({
            where: { id:eventId },
        });
        if (!deleted) {
            throw new Error("Event Not Found");
        }
        return res.status(200).json("Event " + eventId + " Deleted");
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};



/* Create Event */

const createEvents = async (req, res, next) => {
    const {start,end,title} = req.body
    const  idUser  = req.user.id;
    try {
        const newEvent = await eventsModel.create({start,end,title,fk_idUser:idUser})
        console.log(newEvent)
        return res.status(201).json({ message: "Event Created", newEvent })

    } catch (error) {
        res.status(500).json({ "error": error.message })
    }

};








module.exports = {getEventByEntrainer,createEvents,deleteEvent,getEventToDelete}