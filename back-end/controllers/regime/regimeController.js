const {regime} = require ('../../models')
//create annonce
const createRegime = async (req , res, next) => {
    const {nom,type,nbrkg,petidej,dejeuner,dinner}=req.body
    try {
        const  {id} = req.params
        const  newRegime = await regime.create({nom,type,nbrkg,petidej,dejeuner,dinner})
        newRegime.fk_idannonce=id;
        newRegime.save()


        return  res.status(201).json({message: "created", newRegime})


    }catch (error){
        res.status(500).json({"error":error.message})
    }

};






//regime by id
const getOneRegime = async (req, res) => {
    try {
        const { coachingId } = req.params;
        const listRegime=await regime.findAll({
            where:{
                fk_idannonce:coachingId
            }
        })

        // const regimeData = await regime.findOne({
        //     where: { id: regimeId },
        // });
        // if (!regimeData) {
        //     throw new Error("regime not found");
        // }
        res.status(200).json({
            listRegime,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};
//delete
const deleteRegime = async (req, res) => {
    try {
        const { regimeId } = req.params;
        const deleted = await regime.destroy({
            where: { id: regimeId },
        });
        if (!deleted) {
            throw new Error("regime not found");
        }
        res.status(204).send("regime deleted");
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};
//upDate
const updateRegime = async (req, res) => {
    try {
        const { regimeId } = req.params;
        const [updated] = await regime.update(req.body, {
            where: { id: regimeId },
        });
        if (updated) {
            const updatedr = await regime.findOne({ where: { id: regimeId } });
            res.status(200).json({regime: updatedr,});
        }
        throw new Error("User not found");
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};
module.exports = {createRegime,getOneRegime,deleteRegime,updateRegime}