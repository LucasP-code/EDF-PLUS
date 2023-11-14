const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const connection = require('./connection');


const login = async(Email, Senha) => {

  try {
    const queryEmail = 'SELECT * FROM (SELECT Senha, Email, Nome_preferencia, ID, ID_Cargo FROM Alunos UNION SELECT Senha, Email, Nome_preferencia,ID, ID_Cargo FROM Facilitador UNION SELECT Senha, Email, NULL AS Nome_preferencia,ID, ID_Cargo FROM Admins) AS Login_Senha WHERE Email = ?';
    const [user] = await connection.execute(queryEmail, [Email]);

    if (user.length !== 1) {
      return null;
    } else {
    return user;
    }
  } catch (error) {
    return res.status(500).json({ status: 8});
  }

        
};

module.exports = {

login,

};