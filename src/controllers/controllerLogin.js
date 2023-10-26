const models = require('../Models/modelLogin');

const login = async(req, res) => {

    try{
        const loginUser = await models.login(req.body);
        return res.status(201).json(loginUser);
    } catch(error){
        return res.status(400).json({msg: "algum erro ao se cadastrar"})
    }

};

module.exports = {
    login
};