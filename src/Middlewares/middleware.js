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


module.exports = {
validatePassword,
validateLogin,

};