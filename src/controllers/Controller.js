const models = require('../Models/modelController');


const getAll = async(req,res) => {

    const alunos = await models.getAll();

    return res.status(200).json(alunos);

};


module.exports = {
getAll,
};