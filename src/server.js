const app = require('../src/app');
require('dotenv').config();

try {
    const PORT = process.env.PORT || 3000;


    app.listen(PORT, () => console.log(`Lisening on port ${PORT}`));
} catch (error) {
    return res.status(500).json({ status: 9});
}


