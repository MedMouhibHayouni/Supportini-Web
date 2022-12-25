
const yup = require("yup");
const validateReset = async (req, res, next) => {
    try {
        const schema = yup.object().shape({

            password: yup.string().required(),


        });
        await schema.validate(req.body, { abortEarly: false });
        next();
    } catch (error) {
        res.status(400).json({
            error: error.errors,
        });
    }
};
module.exports = validateReset;