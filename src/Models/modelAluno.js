const connection = require('./connection');
const bcrypt = require('bcrypt')


const getAll = async() => {

    const query = ('SELECT * FROM Alunos');

    const [alunos] = await connection.execute(query);
    return alunos;
}; 

const createAluno = async(Aluno) => {

    const {Nome, Nome_preferencia, CPF, Cel_whatsapp, Email, Senha, Sexo, Estado_civil, Modalidade} = Aluno;
    const query = 'INSERT INTO Alunos(ID_Cargo ,Nome, Nome_preferencia, CPF, Cel_whatsapp, Email, Senha, Sexo, Estado_civil, Modalidade) VALUES (3 ,?, ?, ?, ?, ?, ?, ?, ?, ?)'

    const salt = await bcrypt.genSalt(12)
    const SenhaHash = await bcrypt.hash(Senha,salt)

    const [createdAluno] = await connection.execute(query, [Nome, Nome_preferencia, CPF, Cel_whatsapp, Email, SenhaHash,  Sexo, Estado_civil, Modalidade]);
    return createdAluno;
};



module.exports = {
    getAll,
    createAluno,
};