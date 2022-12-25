const express = require("express");
const {user} = require('../../models')
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const router = express.Router();
const login = async  (req, res, next)=> {
    const { email, password } = req.body;
console.log( email )
    const userWithEmail = await user.findOne({ where: { email } }).catch(
        (err) => {
            console.log("Error: ", err);
        }
    );
console.log(userWithEmail)
    if (!userWithEmail)
        return res
            .status(400)
            .json({ message: "Adresse Email ou Mot de Passe Invalide!" });
    if (userWithEmail.status==0){
        res.status(301).json({"message":"Contactez l'administration","success":false})
    }
    const isMatch = await bcrypt.compare(password, userWithEmail.password);

    if (!isMatch)
        return res
            .status(400)
            .json({ message: "Adresse Email ou Mot de Passe Invalide!!" });

    const jwtToken = jwt.sign(
        { id: userWithEmail.id, email: userWithEmail.email,role:userWithEmail.fk_idRole },
        process.env.JWT_SECRET
    );

    let result = {
        nom: userWithEmail.nom,
        prenom:userWithEmail.prenom,
        fk_idRole: userWithEmail.fk_idRole,
        email: userWithEmail.email,
        status:userWithEmail.status,
        image_name:userWithEmail.image_name,
        token: jwtToken,

    };
    res.status(200).json({ message: "Bienvenue "+ userWithEmail.nom.toUpperCase(),...result  });
}
module.exports = {
    login
}