const connection = require('../Models/connection');
const jwt = require('jsonwebtoken');





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
        return res.status(401).json({msg: "Email ja cadastrado! utilize outro email", status: 3});
    }
    next();
};


const validateLogin = (req, res, error, next) => {

    if (error) {
        return res.status(500).json({ error: 'Erro no servidor' });
      } 

    next();
};


const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }
        req.user = user;
        next();
    })
}


const AlunoRole = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.SECRET);
        const role = decodedToken.role;

        if (role == 3) {
            next();                
        } else {
            return res.status(401).json({ message: 'Você não tem permissão para realizar esta ação!' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Error ...' });
    }
}





module.exports = {
validatePassword,
validateLogin,
verifyToken,
validateEmail,
AlunoRole,

};
