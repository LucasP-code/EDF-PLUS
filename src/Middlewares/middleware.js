

const validatePassword = (req,res,next) => {
    const {Senha,confirmarSenha} = req.body;

    if (Senha !== confirmarSenha) {
        return res.status(422).json({msg: 'As senhas n conferem!'})
    }

    next();
};

module.exports = {
    validatePassword

};