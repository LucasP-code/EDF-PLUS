const connection = require('./connection');


const getAll = async() => {

    const query = ('SELECT * FROM Alunos');

    const [alunos] = await connection.execute(query);
    return alunos;
}; 

const createAluno = async(Aluno) => {

    const {Nome, Nome_preferencia, CPF, Cel_whatsapp, Email, Senha, Sexo, Estado_civil, Modalidade} = Aluno;
    const query = 'INSERT INTO Alunos(Nome, Nome_preferencia, CPF, Cel_whatsapp, Email, Senha, Sexo, Estado_civil, Modalidade) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'

    const [createdAluno] = await connection.execute(query, [Nome, Nome_preferencia, CPF, Cel_whatsapp, Email, Senha,  Sexo, Estado_civil, Modalidade]);
    return createdAluno;
};



module.exports = {
    getAll,
    createAluno,
};