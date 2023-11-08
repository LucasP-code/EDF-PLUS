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

    try {
        const createdCrianca = await models.createCrianca(criancaData, userId);
        return res.status(201).json(createdCrianca);
    } catch (error) {
        return res.status(500).json({ error: 'Erro interno' });
    }
};


const getAllCriancas = async (req, res) => {
    const userId = req.user.userId; 
    const criancaData = req.body;
    criancaData.ID_Aluno = userId;

    const CriancasAluno = await models.getAllCriancas(userId);
    return res.status(201).json(CriancasAluno);
    
};



module.exports = {
getAll,
createAluno,
createCrianca,
getAllCriancas,
};