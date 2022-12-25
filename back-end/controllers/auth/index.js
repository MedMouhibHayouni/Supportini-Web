const {register}= require('./registerController')
const {login}= require("./loginController")
const {passwordReset,sendLink}=require("./forgetPasswordController")
module.exports={
    register,
    login,
    sendLink,
    passwordReset
}