const models = require('../Models/modelAluno');


const getAll = async(req,res) => {

    const Alunos = await models.getAll();
    return res.status(200).json(Alunos);
};

const createAluno = async(req, res) => {

    const createdAluno = await models.createAluno(req.body);
    return res.status(201).json(createdAluno);

};


module.exports = {
    getAll,
    createAluno,

};