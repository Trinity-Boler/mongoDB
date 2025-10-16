// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3000;


app.use(cors());
app.use(express.json()); 
app.use('/', express.static('public')); 

//  Connect to MongoDB 
mongoose.connect('mongodb://127.0.0.1:27017/personalBudgetDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));


const budgetSchema = new mongoose.Schema({
  title: { type: String, required: true },
  value: { type: Number, required: true },
  color: { type: String, required: true, match: /^#[0-9A-Fa-f]{6}$/ },
});

const Budget = mongoose.model('Budget', budgetSchema);

//  Routes 

app.get('/budget', async (req, res) => {
  try {
    const data = await Budget.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Post 
app.post('/budget', async (req, res) => {
  try {
    const newItem = new Budget(req.body);
    const savedItem = await newItem.save();
    res.json(savedItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Start Server 
app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
