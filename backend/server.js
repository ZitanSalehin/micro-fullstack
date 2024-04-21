// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors middleware

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

mongoose.connect('mongodb+srv://zitansalehin123:root123@cluster4.9q6rrqx.mongodb.net/mern-simple-crud?retryWrites=true&w=majority&appName=Cluster4')
  .then(() => {
    console.log("db connection successful");
  })
  .catch((error) => {
    console.log(error);
  });

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  }
});

const User = mongoose.model("User", userSchema);

// Routes
app.post('/api/items', async (req, res) => {
  try {
    const newItem = new User({ name: req.body.name });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
