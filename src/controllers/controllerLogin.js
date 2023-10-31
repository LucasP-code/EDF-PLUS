const models = require('../Models/modelLogin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userLogin = async (req, res) => {
    const { Email, Senha } = req.body;

    try {
        const userPasswordResult = await models.userLogin(Email);
        
        if (userPasswordResult.msg) {
            return res.status(401).json({ error: userPasswordResult.msg });
        }

        const senhaCorreta = userPasswordResult[0].Senha;

        const bcryptRes = await new Promise((resolve, reject) => {
            bcrypt.compare(Senha, senhaCorreta, (bcryptErr, result) => {
                if (bcryptErr) {
                    reject(bcryptErr);
                }
                resolve(result);
            });
        });

        if (!bcryptRes) {
            return res.status(401).json({ error: "Email ou senha incorretos!" });
        }

        const token = jwt.sign({ email: Email }, process.env.SECRET, { expiresIn: '1h' });

        return res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Ocorreu um erro durante a autenticação." });
    }
};

  

module.exports = {

userLogin,

};