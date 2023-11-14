const models = require('../Models/modelLogin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const login = async (req, res) => {
  try {
    const { Email, Senha } = req.body;

    const user = await models.login(Email, Senha);

    if (user == null) {
      return res.status(401).json({status: 11, error: 'Credenciais inválidas' });
    };

    const HashedPassword = user[0].Senha;

    const passwordMatch = await bcrypt.compare(Senha, HashedPassword);

    if (passwordMatch) {
      const token = jwt.sign(
        {
          userId: user[0].ID,
          Nome_preferencia: user[0].Nome_preferencia,
          Email: user[0].Email,
          role: user[0].ID_Cargo,
        },
        process.env.SECRET,
        { expiresIn: '1h' }
      );
      return res.json({ token });
    } else {
      return res.status(401).json({ status: 12 ,error: 'Credenciais inválidas' });
    }
  } catch (error) {
    return res.status(500).json({ status: 8 });
  }
  
    
  } 



module.exports = {
  login,
};

