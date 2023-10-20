const connection = require('./connection');


const getAll = async() => {

    const query = ('SELECT * FROM Alunos');

    const [alunos] = await connection.execute(query);
    return alunos;
};





module.exports = {
    getAll,

};