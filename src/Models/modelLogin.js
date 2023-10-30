const connection = require('./connection');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userLogin = async (Login) => {
  const { Email, Senha } = Login;

  const queryEmail = 'SELECT Email FROM (SELECT Email FROM Alunos UNION SELECT Email_EDF FROM Facilitador UNION SELECT Email FROM Admins) AS Login_Usuario WHERE Email = ?;'

  const [userEmail] = await connection.execute(queryEmail, [Email]);

  if (userEmail.length === 0) {
    return { msg: "Email não encontrado" };
    
  }

  const queryPassword = 'SELECT Senha FROM (SELECT Senha, Email FROM Alunos UNION SELECT Senha, Email_EDF FROM Facilitador UNION SELECT Senha, Email FROM Admins) AS Login_Senha WHERE Email = ?';

  try {
    const [UserPassword] = await connection.execute(queryPassword, [Email]);

    if (UserPassword.length === 0) {
      return { msg: "Usuário não encontrado!" };
    }

    const senhaCorreta = UserPassword[0].Senha;

    const bcryptRes = await new Promise((resolve, reject) => {
      bcrypt.compare(Senha, senhaCorreta, (bcryptErr, result) => {
        if (bcryptErr) {
          reject(bcryptErr);
        }
        resolve(result);
      });
    });

    if (!bcryptRes) {
      return { msg: "Email ou senha incorretos!" };
    }

    const token = jwt.sign({ email: Email }, process.env.SECRET, { expiresIn: '1h' });

    return { token };
  } catch (error) {
    console.error(error);
    return { msg: "Ocorreu um erro durante a autenticação." };
  }
};

module.exports = {
userLogin,

};