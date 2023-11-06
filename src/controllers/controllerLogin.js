const models = require('../models/modelLogin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connection = require('../models/connection');



const login = async (req, res) => {
    const { Email, Senha } = req.body;
  
    try {
      const queryEmail =
        'SELECT * FROM (SELECT Senha, Email, ID, ID_Cargo FROM Alunos UNION SELECT Senha, Email, ID, ID_Cargo FROM Facilitador UNION SELECT Senha, Email, ID, ID_Cargo FROM Admins) AS Login_Senha WHERE Email = ?';
      const [user] = await connection.execute(queryEmail, [Email]);
  
      if (user.length !== 1) {
        return res.status(401).json({ error: 'Credenciais inválidas' });
      }
  
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
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar usuário no banco de dados' });
    }
  };
  
  module.exports = {
    login,
  };
  
