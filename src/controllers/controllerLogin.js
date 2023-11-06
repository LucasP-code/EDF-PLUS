const models = require('../models/modelLogin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connection = require('../models/connection');



const login = async (req, res) => {
    const { Email, Senha } = req.body;

    
      const user = await models.login(Email, Senha);
  
      const HashedPassword = user[0].Senha;
  
      const passwordMatch = await bcrypt.compare(Senha, HashedPassword);
  
      if (passwordMatch) {
        const token = jwt.sign(
          {
            userId: user[0].ID,
            Email: user[0].Email,
            role: user[0].ID_Cargo,
          },
          process.env.SECRET,
          { expiresIn: '1h' }
        );
        return res.json({ token: token });
      } else {
        return res.status(401).json({ error: 'Credenciais inválidas' });
      }
    } 
  
  
  module.exports = {
    login,
  };
  
