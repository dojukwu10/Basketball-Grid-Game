                                                 const express = require('express');
const https = require('https');
const fs = require('fs');
const mongoose = require('mongoose');
const cors = require('cors');
const playerRouter = require('./routes/player_routes');

const app = express();

app.use(cors());

mongoose.connect('mongodb+srv://ojukwuderek:ugatp2003@all-nba-players.ppyocuh.mongodb.net/all-nba-players?retryWrites=true&w=majority', { useNewUrlParser: true });

app.use(express.json());
app.use('/player_routes', playerRouter);

const privateKey = fs.readFileSync('key.pem', 'utf8');
const certificate = fs.readFileSync('cert.pem', 'utf8');

const credentials = {
  key: privateKey,
  cert: certificate
};

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(8443, () => {
  console.log('Server is running on port 8443');
});
