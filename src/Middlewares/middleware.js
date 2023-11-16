const connection = require('../Models/connection');
const jwt = require('jsonwebtoken');





const validatePassword = (req, res,next) => {
    try {
        const {Senha , confirmarSenha} = req.body;

        if (Senha !== confirmarSenha) {
            return res.status(422).json({msg: 'As senhas não conferem!'})
        }

        next();
    } catch (error) {
        return res.status(500).json({ status: 10});
    }
    
};

const validateCPF = async(req, res, next) => {

    
        const {CPF} = req.body;

        const queryCPF = 'SELECT * FROM (SELECT CPF FROM Alunos UNION SELECT CPF FROM Facilitador UNION SELECT CPF FROM Criancas) AS Login_Senha WHERE CPF = ?';

        const [findCPF] = await connection.execute(queryCPF, [CPF])

        if(findCPF.length == 1) {
            return res.status(401).json({msg: "CPF ja cadastrado!", status: 13});
        }
        next();
    
};




const validateEmail = async(req, res, next) => {
    
        const {Email} = req.body;

        const queryEmail = 'SELECT * FROM (SELECT Senha, Email, ID, ID_Cargo FROM Alunos UNION SELECT Senha, Email, ID, ID_Cargo FROM Facilitador UNION SELECT Senha, Email, ID, ID_Cargo FROM Admins) AS Login_Senha WHERE Email = ?';

        const [findEmail] = await connection.execute(queryEmail, [Email])

        if(findEmail.length == 1) {
            return res.status(401).json({msg: "Email ja cadastrado! utilize outro email", status: 13});
        }
        next();
  
};


const validateLogin = (req, res, error, next) => {

    if (error) {
        return res.status(500).json({ status: 10});
      } 

    next();
};


const verifyToken = (req, res, next) => {
    try{
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
    } catch (error) {
        return res.status(500).json({ status: 10});
    };
    
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
        return res.status(500).json({ status: 10 });
    }
}





module.exports = {
validatePassword,
validateLogin,
verifyToken,
validateEmail,
AlunoRole,
validateCPF,

};
