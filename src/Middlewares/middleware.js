const validatePassword = (req,res,next) => {
    const {Senha,confirmarSenha} = req.body;

    if (Senha !== confirmarSenha) {
        return res.status(422).json({msg: 'As senhas n conferem!'})
    }

    next();
};

const validateUserExists = async (req,res,next) => {
    const {email, Senha} = req.body;

    const user = await User.findOne({email: email})
    if (!user) {
        return res.status(404).json({msg: 'Usuario nao encontrado!'})
    }

    const checkSenha = await bcrypt.compare(Senha, user.Senha)

    if(!checkSenha){
        return res.status(422).json({msg: 'Senha invalida!'})
    }

    next();
};

module.exports = {
    validatePassword,
    validateUserExists

};