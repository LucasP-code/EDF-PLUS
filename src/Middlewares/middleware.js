const validatePassword = (req,res,next) => {
    const {Senha , confirmarSenha} = req.body;

    if (Senha !== confirmarSenha) {
        return res.status(422).json({msg: 'As senhas não conferem!'})
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

};
