const {planing,coach,trainer} = require('../../models')

const {format, compareAsc, addDays} = require("date-fns");
const add = require('date-fns/add')
const endOfToday = require('date-fns/endOfToday')
const parse = require("date-fns/parse");




const getAllPlaningByAnnonce = async (req, res) => {
    const currentDay= endOfToday()
    try {
        let table=[]
        const {annonceId} = req.params;
        const plan = await planing.findAll({
            where: {fk_idannonce: annonceId},

        });
        for(const element of plan){
            let coachdat = element.CoachingDate
            let planplan = parse(coachdat, 'yyyy-MM-dd', new Date())
            coachdat=planplan
            if (planplan>currentDay){
                table.push(element)
            }
        }
        const sortedAsc = table.sort(
            (objA, objB) => parse(objA.CoachingDate, 'yyyy-MM-dd', new Date()) - parse(objB.CoachingDate, 'yyyy-MM-dd', new Date()),
        );

        if (!plan) {
            throw new Error("No plan found");
        }
        res.status(200).json({
            table,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};


const getAll = async (req, res, next) => {
    const currentDay= endOfToday()
    let table=[]
    let sevenDaysPlaning=[]

    const allPlaning = await planing.findAll({});

    if (!allPlaning.length) {

        return res.status(404).json({'empty':false})
    }
    for(const element of allPlaning){
        let coachdat = element.CoachingDate
        let planplan = parse(coachdat, 'yyyy-MM-dd', new Date())
        coachdat=planplan
        if (planplan>currentDay){
            table.push(element)
        }

    }
    const sortedAsc = table.sort(
        (objA, objB) => parse(objA.CoachingDate, 'yyyy-MM-dd', new Date()) - parse(objB.CoachingDate, 'yyyy-MM-dd', new Date()),
    );


    for (var i=0;i<11;i++){
        sevenDaysPlaning.push(sortedAsc[i])
    }
    res.status(201).json({
        sevenDaysPlaning,'empty':true
    });
};
/////////////////////////////////////////////////////////
const getsevenDayOfTrainer = async (req, res) => {
    const currentDay= endOfToday()
    let table=[]
    let TenDaysPlaning=[]
    try {
        const idUser=req.user.id
        const entrene = await trainer.findOne({
            where:{
                fk_idUser:idUser
            }
        })
        const trainerId=entrene.id


        const plan = await planing.findAll({
            where: {fk_idtrainer: trainerId},
        });
console.log(plan)
        if (!plan) {

            return res.status(404).json({'empty':false})
        }
        for(const element of plan){
            let coachdat = element.CoachingDate


            let planplan = parse(coachdat, 'yyyy-MM-dd', new Date())
            coachdat=planplan
            if (planplan>currentDay){
                table.push(element)

            }

        }

        const sortedAsc = table.sort(
            (objA, objB) => parse(objA.CoachingDate, 'yyyy-MM-dd', new Date()) - parse(objB.CoachingDate, 'yyyy-MM-dd', new Date()),
        );
        console.log(sortedAsc);

        let i =0
        while (i<10){
            if(sortedAsc[i]){
                TenDaysPlaning.push(sortedAsc[i])
            }

            i++
        }

        res.status(201).json({
            TenDaysPlaning,'empty':true
        });


    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

const getsevenDayOfCoach = async (req, res) => {
    const currentDay= endOfToday()
    let table=[]
    let TenDaysPlaning=[]
    try {
        const idUser=req.user.id
        const ccoach = await coach.findOne({
            where:{
                fk_idUser:idUser
            }
        })

        coachId=ccoach.id
        const plan = await planing.findAll({
            where: {fk_idcoach: coachId},
        });

        if (!plan) {

            return res.status(404).json({'empty':false})
        }
        for(const element of plan){
            let coachdat = element.CoachingDate


            let planplan = parse(coachdat, 'yyyy-MM-dd', new Date())
            coachdat=planplan
            if (planplan>currentDay){
                table.push(element)

            }

        }
        const sortedAsc = table.sort(
            (objA, objB) => parse(objA.CoachingDate, 'yyyy-MM-dd', new Date()) - parse(objB.CoachingDate, 'yyyy-MM-dd', new Date()),
        );

        let i =0
        while (i<10){
            if(sortedAsc[i]){
                TenDaysPlaning.push(sortedAsc[i])
            }

            i++
        }


        console.log(TenDaysPlaning.length)

        res.status(200).json({
            TenDaysPlaning,'empty':true
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};


function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}


module.exports = { getAllPlaningByAnnonce,getAll,getsevenDayOfTrainer,getsevenDayOfCoach}