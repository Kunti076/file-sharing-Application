import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
import DBConnection from './database/db.js';
const path = require('path');

const app = express();

app.use(cors());
app.use('/', router);

//static folder
app.use(express.static(path.join(__dirname,'./client/build')))

//static routes
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
const PORT = 8000;

DBConnection();

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));