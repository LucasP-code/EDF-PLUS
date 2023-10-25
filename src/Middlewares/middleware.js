const validatePassword = (req,res,next) => {
    const {password,confirmpassword} = req.body;

    if (password !== confirmpassword) {
        return res.status(422).json({msg: 'As senhas n conferem!'})
    }

    next();
};