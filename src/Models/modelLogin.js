const connection = require('./connection');
const jwt = require('jsonwebtoken');

const userLogin = async (Login) => {
    const { Email, Senha } = Login;

    const queryEmail = 'SELECT Email FROM (SELECT Email FROM Alunos UNION SELECT Email_EDF FROM Facilitador UNION SELECT Email FROM Admins) AS Login_Usuario WHERE Email = ?';

    const [UserEmail] = await connection.execute(queryEmail, [Email]);

    if (UserEmail.length === 0) {
        return { msg: "Usuário não encontrado!" };
    }

    const queryPassword = 'SELECT Senha FROM (SELECT Senha, Email FROM Alunos UNION SELECT Senha, Email_EDF FROM Facilitador UNION SELECT Senha, Email FROM Admins) AS Login_Senha WHERE Email = ?';

    const [UserPassword] = await connection.execute(queryPassword, [Email]);

    if (UserPassword.length === 0 || UserPassword[0].Senha !== Senha) {
        return { msg: "Email ou senha incorretos!" };
    }

    return { msg: "O usuário existe!" };
};


module.exports = {
userLogin,


};