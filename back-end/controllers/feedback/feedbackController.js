const {feedbackModel} = require ('../../models');

/* Affichage */
const getAllFeedback = async (req , res , next) =>{
    try {
        const feedbacks = await feedbackModel.findAll();
        if(!feedbackModel){
            throw new Error("No suivi found");
        }
     res.status(200).json({feedbacks,});
    }catch (error){
        res.status(500).json({"error":error.message})
    }
};

/* Affichage By Id */
const getOneFeedback = async (req, res) => {
    try {
        const { feedbackId } = req.params;
        const feedbacks = await feedbackModel.findOne({
            where: { id: feedbackId },
        });
        if (!feedbacks) {
            throw new Error("Feedback not found");
        }
        res.status(200).json({
            feedbacks,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};
const getOneFeedbackSuivi = async (req, res) => {
    try {
        const { idSuivi } = req.params;
        const feedbackBySuivi = await feedbackModel.findOne({
            where: { id_suivi: idSuivi },
            order: [['id', 'DESC']]
        });
        if (!feedbackBySuivi) {
            throw new Error("Feedback not found");
        }
        res.status(200).json({
            feedbackBySuivi,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

/* Affichage By Id Suivi */
const getBySuivi = async (req, res) => {
    try {
        const { suiviId } = req.params;
        const feedbacks = await feedbackModel.findAll({
            where: { id_suivi: suiviId },
        });
        if (!feedbacks) {
            throw new Error("Feedback not found");
        }
        res.status(200).json({
            feedbacks,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

/* Ajout */
const createfeedback = async (req , res, next) => {
    const {feedback}=req.body
    try {
        const  newFeedback = await feedbackModel.create({feedback})
        return  res.status(201).json({message: "Feedback Created", newFeedback})

    }catch (error){
        res.status(500).json({"error":error.message},console.log(newFeedback))
    }

};

/*Create Feedback*/
const createfeedbackSuivi = async (req , res, next) => {
    const {feedback}=req.body
    const { suiviId } = req.params;
    try {
        const  newFeedback = await feedbackModel.create({id_suivi: suiviId,
            feedback})
        return  res.status(201).json({message: "Feedback Created", newFeedback})

    }catch (error){
        res.status(500).json({"error":error.message})
    }

};

/* Suppression */
const deleteFeedback = async (req, res) => {
    try {
        const { feedbackId } = req.params;
        const deleted = await feedbackModel.destroy({
            where: { id: feedbackId },
        });
        if (!deleted) {
            throw new Error("Feedback not found");
        }
        return res.status(200).json("Feedback "+feedbackId+" Deleted");
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

/* Mise A jour */
const updateFeedback = async (req, res) => {
    try {
        const { feedbackId } = req.params;
        const [updated] = await feedbackModel.update(req.body, {
            where: { id: feedbackId },
        });
        if (updated) {
            const updatedFeedback = await feedbackModel.findOne({ where: { id: feedbackId } });
            res.status(200).json({
                feedback: updatedFeedback,
            });
        }
        throw new Error("annonce not found");
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

module.exports = {getAllFeedback,getOneFeedback,getBySuivi,getOneFeedbackSuivi,createfeedback,createfeedbackSuivi,deleteFeedback,updateFeedback}