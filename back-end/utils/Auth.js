
const passport= require("../middlewares/passport")

/**
 * @DESC Check Role Middleware
 */
const checkRole = roles => (req, res, next) =>
    !roles.includes(req.user.fk_idRole)
        ? res.status(401).json("Unauthorized")
        : next();
/**
 * @DESC Passport middleware
 */
const userAuth = passport.authenticate("jwt", { session: false });
const serializeUser = user => {
    return {
        prenom: user.prenom,
        email: user.email,
        nom: user.nom,
        id: user.id,
        image_name:user.image_name,
        fk_idRole:user.fk_idRole,

        updatedAt: user.updatedAt,
        createdAt: user.createdAt
    };
};
module.exports = {
    userAuth,
    checkRole,

    serializeUser
};