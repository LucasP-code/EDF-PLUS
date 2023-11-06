const connection = require('./connection');
const bcrypt = require('bcrypt')



class Aluno {
    constructor(Nome, Nome_preferencia, CPF, Cel_whatsapp, Email, Senha, Sexo, Estado_civil, Modalidade){
        this.Nome = Nome, 
        this.Nome_preferencia = Nome_preferencia, 
        this.CPF = CPF, 
        this.Cel_whatsapp = Cel_whatsapp, 
        this.Email = Email, 
        this.Senha = Senha, 
        this.Sexo = Sexo, 
        this.Estado_civil = Estado_civil,  
        this.Modalidade = Modalidade
    }
};

class Crianca {
    constructor(ID_Aluno, ID_Escola, ID_Turma, Nome, CPF, Data_de_nascimento, Sexo, Grau_de_parentesco, Cel_whatsapp){
        this.ID_Aluno = ID_Aluno,
        this.ID_Escola = ID_Escola,
        this.ID_Turma = ID_Turma,
        this.Nome = Nome,
        this.CPF = CPF,
        this.Data_de_nascimento = Data_de_nascimento,
        this.Sexo = Sexo,
        this.Grau_de_parentesco = Grau_de_parentesco,
        this.Cel_whatsapp = Cel_whatsapp
    }
}

const createCrianca = async(infCrianca) => {

    const {ID_Aluno, ID_Escola, ID_Turma, Nome, CPF, Data_de_nascimento, Sexo, Grau_de_parentesco, Cel_whatsapp } = infCrianca;

    const query = "INSERT INTO Criancas(ID_Aluno, ID_Escola, ID_Turma, Nome, CPF, Data_de_nascimento, Sexo, Grau_de_parentesco, Cel_whatsapp) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);";

    const newCrianca = new Crianca(ID_Aluno ,ID_Escola, ID_Turma, Nome, CPF, Data_de_nascimento, Sexo, Grau_de_parentesco, Cel_whatsapp)

    const [createdCrianca] = await connection.execute(query, [newCrianca.ID_Aluno, newCrianca.ID_Escola, newCrianca.ID_Turma, newCrianca.Nome, newCrianca.CPF, newCrianca.Data_de_nascimento, newCrianca.Sexo, newCrianca.Grau_de_parentesco, newCrianca.Cel_whatsapp])

    return createdCrianca;
};



const createAluno = async(infAluno) => {

    const {Nome, Nome_preferencia, CPF, Cel_whatsapp, Email, Senha, Sexo, Estado_civil, Modalidade} = infAluno;
    const query = 'INSERT INTO Alunos(Nome, Nome_preferencia, CPF, Cel_whatsapp, Email, Senha, Sexo, Estado_civil, Modalidade, ID_Cargo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 3)'


    const newAluno = new Aluno(Nome, Nome_preferencia, CPF, Cel_whatsapp, Email, Senha, Sexo, Estado_civil, Modalidade)
    const salt = await bcrypt.genSalt(12)
    const SenhaHash = await bcrypt.hash(Senha,salt)
    
    const [createdAluno] = await connection.execute(query, [newAluno.Nome, newAluno.Nome_preferencia, newAluno.CPF, newAluno.Cel_whatsapp, newAluno.Email, SenhaHash, newAluno.Sexo, newAluno.Estado_civil, newAluno.Modalidade])
    

    return createdAluno;

};



const getAll = async() => {

    const query = ('SELECT * FROM Alunos');

    const [alunos] = await connection.execute(query);
    return alunos;
}; 




module.exports = {
getAll,
createAluno,
createCrianca,

};

