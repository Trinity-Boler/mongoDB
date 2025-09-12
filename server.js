// Budget API

const express = require('express');
const app = express();
const port = 3000;



app.use('/', express.static('public'));

const budget ={
    myBudget: [
        {
            title: 'Eat out',
            budget: 100
        },

        {
            title: 'Rent',
            budget: 2000
        },

        {
            title: 'Groceries',
            budget: 400
        },
        {
            title: 'Gas',
            budget: 120
        },

    ]
};


app.get('/hello', (req, res) => {
    res.send('Welcome to the Budget API');
});

app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});