// server.js
const express = require('express');
const app = express();
const PORT = 8080;
const router = express.Router();

require('./src/database');

app.get('/', (req, res) => {
    res.send("Mi Pergamino");
});

const bodyParser = require('body-parser');

// Routes
const postRouter = require('./src/routes/post.router');

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use('/posts', postRouter);

// will redirect all the non-api routes to react frontend
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../client','build','index.html'));
});

app.listen(PORT, function () {
    console.log(`Server Listening on ${PORT}`);
});