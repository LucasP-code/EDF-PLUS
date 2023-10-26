const connection = require('./connection');
const jwt = require('jsonwebtoken');

const login = async () => {
    try {

        const secret = process.env.SECRET

        const user = await connection.findUserByEmail(req.body.email);

        const token = jwt.sign(
            {
                id: user._id,
            },
            secret,
        )

        res.status(200).json({msg:'Autenticacao realizada com sucesso!', token})

    }catch(err) {

        console.log(error)

        response.status(500).json({msg:'Aconteceu um erro no servidor, tente novamente mais tarde'})

    }


};

module.exports = {
    login
};