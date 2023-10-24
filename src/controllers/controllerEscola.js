const models = require('../Models/modelEscola');


const getAll = async(req,res) => {

    const Escolas = await models.getAll();
    return res.status(200).json(Escolas);
};

const createEscola = async(req, res) => {

    const createdEscola = await models.createEscola(req.body);
    return res.status(201).json(createdEscola);

};



module.exports = {
getAll,
createEscola,
};