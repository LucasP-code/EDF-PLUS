const models = require('../models/modelAluno');


const getAll = async(req,res) => {

    const Alunos = await models.getAll();
    return res.status(200).json(Alunos);
};

const createAluno = async(req, res) => {

   
    const createdAluno = await models.createAluno(req.body);
    return res.status(201).json(createdAluno);
   
    
};


const createCrianca = async(req, res) => {

    const createdCrianca = await models.createCrianca(req.body);
    return res.status(201).json(createdCrianca);
    

};



module.exports = {
getAll,
createAluno,
createCrianca,

};