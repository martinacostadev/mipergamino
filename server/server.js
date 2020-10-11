// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;
const router = express.Router();

require('./src/database');

app.get('/', (req, res) => {
  res.send("Mi Ciudad");
});

const bodyParser = require('body-parser');

// Routes
const alquilerRouter = require('./src/routes/alquiler.router');

app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use('/alquileres', alquilerRouter);

// will redirect all the non-api routes to react frontend
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Server Listening on ${PORT}`);
});