const {user} = require('../../models')
const bcrypt = require('bcrypt');
const register = async (req, res, next) => {
    try {

        const {nom, prenom, email, password, status,image_name, cin, phone,fk_idRole} = req.body

        const alreadyExistUser = await user.findOne({where: {email}}).catch((err) => {
            console.log("Error:", err)
        })
        if (alreadyExistUser) {
            return res.status(302).json({message: "utilisateur  existe déja"})
        }
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const newUser = await user.create({nom, prenom, email, password, status,image_name, cin, phone,fk_idRole})
        newUser.password = hash;
        newUser.save()
        return  res.status(201).json({message: "created", newUser})
    } catch (error) {

       return   res.status(500).json({error:error.message})
    }

}
module.exports = {
    register
}