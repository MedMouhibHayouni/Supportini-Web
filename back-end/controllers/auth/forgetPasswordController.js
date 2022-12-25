const express = require("express");
const {user} = require('../../models')
const crypto = require("crypto");
const bcrypt = require('bcrypt');
const sendEmail = require("../../utils/sendEmail");
const sendLink = async (req, res, next) => {
    const {email} = req.body
    try {
        const userWithEmailExist = await user.findOne({where: {email}})
        if (!userWithEmailExist)
            return res.status(400).json({message: "Adresse Email n'existe pas", titre: "DESOLE"});
        if (!userWithEmailExist.token) {
            userWithEmailExist.tokenReset = crypto.randomBytes(32).toString("hex");
            userWithEmailExist.save()
        }

        const link = `http://localhost:4200/password-reset/${userWithEmailExist.id}/${userWithEmailExist.tokenReset}`;

        await sendEmail(userWithEmailExist, "Réinitialisation du mot de passe", link);

        res.status(200).json({
            message: "lien de réinitialisation du mot de passe envoyé à votre compte de messagerie",
            titre: "SUCCESS"
        });
    } catch (error) {
        res.status(500).json({error: error.message,titre: "DESOLE"})
    }
}
const passwordReset = async (req, res, next) => {

    try {
        const userForReset = await user.findOne({where: {id:req.params.userId}});
        if (!userForReset) return res.status(400).json({message:"lien invalide ou expiré",titre:"Réesayer"});
        if (!userForReset.tokenReset) return res.status(400).send({message:"lien invalide ou expiré",titre:"Réesayer"});

        if (userForReset.tokenReset!=req.params.token) return res.status(400).send({message:"lien invalide ou expiré",titre:"Réesayer"});
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);
        userForReset.password = hash;
        userForReset.tokenReset=null
        await userForReset.save();

        res.status(200).json({message:"Mot de passe Réinitialisé avec succès.",titre:"SUCCESS"});
    } catch (error) {
        res.status(500).json({error: error.message,titre:"Réesayer"})
    }
}
module.exports = {
    sendLink,
    passwordReset
}