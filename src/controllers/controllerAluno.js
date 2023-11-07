const models = require('../Models/modelAluno');


const getAll = async(req,res) => {

    const Alunos = await models.getAll();
    return res.status(200).json(Alunos);
};


const createAluno = async(req, res) => {

   
    const createdAluno = await models.createAluno(req.body);
    return res.status(201).json(createdAluno);
   
    
};

const createCrianca = async (req, res) => {
    const userId = req.user.userId; 
    const criancaData = req.body;
    
    
    criancaData.ID_Aluno = userId;

    const createdCrianca = await models.createCrianca(criancaData);
    return res.status(201).json(createdCrianca);
};




module.exports = {
getAll,
createAluno,
createCrianca,

};