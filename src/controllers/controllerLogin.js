const models = require('../Models/modelLogin');


const userLogin = async(req, res) => {

    const login = await models.userLogin(req.body);
    return res.status(200).json(login);
};

module.exports = {

userLogin,

};