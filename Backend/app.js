const express = require('express')
const cors = require('cors')
const userRoutes = require('./userRoutes');
const dbconnect  = require('./utils/database');
require('dotenv').config();
const app = express();
const PORT = 6000;
dbconnect();
app.use(cors());
app.use(express.json({limit: '20mb'}));

// Routes
app.use('/api/fetch', userRoutes);

app.listen(PORT, () => {
    console.log("Server running at port " + PORT);
});
