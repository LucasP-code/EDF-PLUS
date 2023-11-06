const connection = require('../Models/connection');


const validatePassword = (req, res,next) => {
    const {Senha , confirmarSenha} = req.body;

    if (Senha !== confirmarSenha) {
        return res.status(422).json({msg: 'As senhas não conferem!'})
    }

    next();
};


const validateEmail = async(req, res, next) => {

    const {Email} = req.body;

    const queryEmail = 'SELECT * FROM (SELECT Senha, Email, ID, ID_Cargo FROM Alunos UNION SELECT Senha, Email, ID, ID_Cargo FROM Facilitador UNION SELECT Senha, Email, ID, ID_Cargo FROM Admins) AS Login_Senha WHERE Email = ?';

    const [findEmail] = await connection.execute(queryEmail, [Email])

    if(findEmail.length == 1) {
        return res.status(401).json({msg: "Email ja cadastrado! utilize outro email"});
    }
    next();
};


const validateLogin = (req, res, error, next) => {

    if (error) {
        return res.status(500).json({ error: 'Erro no servidor' });
      } 

    next();
};


const validateToken = (req, res, error, next) => {
    const tokenRecebido = req.header('Authorization');
    const secret = process.env.SECRET;

    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido' });
    }

    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
          return res.status(403).json({ message: 'Token inválido' });
        };  
    });
};



module.exports = {
validatePassword,
validateLogin,
validateToken,
validateEmail,

};
