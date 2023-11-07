const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const connection = require('./connection');


const login = async(Email, Senha) => {

        const queryEmail = 'SELECT * FROM (SELECT Senha, Email, ID, ID_Cargo FROM Alunos UNION SELECT Senha, Email, ID, ID_Cargo FROM Facilitador UNION SELECT Senha, Email, ID, ID_Cargo FROM Admins) AS Login_Senha WHERE Email = ?';
        const [user] = await connection.execute(queryEmail, [Email]);
    
        if (user.length !== 1) {
          return null;
        } else {
        return user;
        }
};

module.exports = {

login,

};