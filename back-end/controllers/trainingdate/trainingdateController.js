

var parse = require('date-fns/parse')
const format =require('date-fns/format')
const parseISO =require('date-fns/parseISO')
const {trainingday} = require('../../models')

//const {format, compareAsc, addDays} = require("date-fns");
const add = require('date-fns/add')

const update = async (req, res) => {
    const datefin=new Date(2022, 4, 2);
    const dates=[];
    const nouvelleDate=[]
    for(var i=0; i<req.body.length; i++){

        const date = parse(req.body[i],'yyyy-MM-dd',new Date());

        // const dateRes=format(parseISO(date.toLocaleString()), 'yyyy-MM-dd')
        dates.push(date);
    }
    console.log(dates);

    var i = 0 ;
    while (dates[i]<datefin && i<dates.length){

        dates[i]= add(dates[i], {days: 7})
        console.log(dates[i])
        nouvelleDate.push(dates[i]);


        i++;
        if(i==dates.length-1){
            i=0;
        }
    }
//console.log(nouvelleDate);

};

module.exports = { update}