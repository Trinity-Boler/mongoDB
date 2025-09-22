// Budget API

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;


app.use(cors());
//If i dont have then my localhost 3000 will not work or has cannot /get
app.use('/', express.static('public'));

const budget = require('./budget.json');


// app.get('/hello', (req, res) => {
//     res.send('Welcome to the Budget API');
// });

app.get('/budget', (req, res) => {
    res.json(budget);
});


app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});