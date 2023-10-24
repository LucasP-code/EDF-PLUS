const connection = require('./connection');


const getAll = async() => {

    const query = ('SELECT * FROM Escolas');

    const [Escolas] = await connection.execute(query);
    return Escolas;
};

const createEscola = async(Escola) => {

    const {Nome_escola, Diretor_a, Endereço, Numero, Bairro_distrito, Cidade, UF, CEP, Telefone} = Escola;
    const query = 'INSERT INTO Escolas(Nome_escola, Diretor_a, Endereço, Numero, Bairro_distrito, Cidade, UF, CEP, Telefone) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)';

    const [createdEscola] = await connection.execute(query, [Nome_escola, Diretor_a, Endereço, Numero, Bairro_distrito, Cidade, UF, CEP, Telefone]);

    return createdEscola;


};


module.exports = {
    getAll,
    createEscola,
};