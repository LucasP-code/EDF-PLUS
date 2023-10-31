const connection = require('./connection');


const userLogin = async (Email) => {
  const queryEmail =
    'SELECT Email FROM (SELECT Email FROM Alunos UNION SELECT Email_EDF FROM Facilitador UNION SELECT Email FROM Admins) AS Login_Usuario WHERE Email = ?;';

  try {
    const [userEmail] = await connection.execute(queryEmail, [Email]);

    if (userEmail.length === 0) {
      return { msg: "Email não encontrado" };
    }

    const queryPassword =
      'SELECT Senha FROM (SELECT Senha, Email FROM Alunos UNION SELECT Senha, Email_EDF FROM Facilitador UNION SELECT Senha, Email FROM Admins) AS Login_Senha WHERE Email = ?';

    const [UserPassword] = await connection.execute(queryPassword, [Email]);

    if (UserPassword.length === 0) {
      return { msg: "Usuário não encontrado!" };
    }

    return UserPassword;
  } catch (error) {
    return { msg: "Ocorreu um erro ao processar a solicitação" };
  }
};


module.exports = {
userLogin,

};