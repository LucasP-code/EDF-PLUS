const models = require('../Models/modelAluno');


/**
 * @swagger
 * /Alunos:
 *   get:
 *     summary: mostra todos os alunos cadastrados
 *     responses:
 *       '200':
 *         description: esta mostrando todos os alunos cadastrados
 */
const getAll = async(req,res) => {

    try {
        const Alunos = await models.getAll();
        return res.status(200).json(Alunos);
    } catch (error) {
        return res.status(500).json({ status: 7});
    }
};


const createAluno = async(req, res) => {

    try {
        const createdAluno = await models.createAluno(req.body);
        return res.status(201).json(createdAluno);
    } catch (error) {
        return res.status(500).json({ status: 4 });
    }
    
};


const createCrianca = async (req, res) => {
    

    
        const userId = req.user.userId; 
        const criancaData = req.body;
        criancaData.ID_Aluno = userId;
    
        const createdCrianca = await models.createCrianca(criancaData, userId);
        return res.status(201).json(createdCrianca);
    
};


const getAllCriancas = async (req, res) => {
    

    try {
        const userId = req.user.userId; 
        const criancaData = req.body;
        criancaData.ID_Aluno = userId;

        const CriancasAluno = await models.getAllCriancas(userId);
        return res.status(201).json(CriancasAluno);
    } catch (error) {
        return res.status(500).json({ status: 5 });
    }

    
    
};

const getAllInfoAluno = async (req, res) => {

   
        const userId = req.user.userId; 
        const AlunoData = req.body;
        AlunoData.ID_Aluno = userId;

        const InfoAluno = await models.getAllInfoAluno(userId);
        return res.status(200).json(InfoAluno);
    
};


module.exports = {
getAll,
createAluno,
createCrianca,
getAllCriancas,
getAllInfoAluno,
};