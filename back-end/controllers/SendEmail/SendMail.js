const nodemailer= require("nodemailer");

const envoyer=async (req, res)=>{

    console.log(req.body.emaile)
    const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
        port:25,
        secure:false,

       auth:{
            user:'chakiba.barhoumi@esprit.tn',
           pass:'chakiba07948730'
        }
    })
    const mailoptions={
        from:'chakiba.barhoumi@esprit.tn',
        to: 'chakiba.barhoumi@gmail.com',
        subject:'mail from trainer',
        text:req.body.emaile
        // text:'message from chakiba.barhoumi@esprit.tn : '+req.body.emaile
    }
transporter.sendMail(mailoptions,(error,info)=>{
    if(error){
        console.log(error);

    }else {
        console.log("sent")

    }
    }

)
}

const sendMailToVisitor=async (req, res)=>{
    console.log(req.user.email)

    const transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:25,
        secure:false,

        auth:{
            user:'chakiba.barhoumi@esprit.tn',
            pass:'chakiba07948730'
        }
    })

    const mailoptions={
        from:'chakiba.barhoumi@esprit.tn',
        to: req.user.email,
        subject:'mail from trainer',
        text: req.body.emaile
    }
    transporter.sendMail(mailoptions,(error,info)=>{
        if(error){
            console.log(error);

        }else {
            console.log("sent")

        }
    }
    )
}



module.exports={
    envoyer,sendMailToVisitor
}