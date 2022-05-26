const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Foods = require('./models/foods.js');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/menu', (req, res) => {
  Foods.create(req.body, (err, newFood) => {
    res.json(newFood);
  });
});

app.get('/menu', (req, res) => {
  Foods.find({}, (req, foundFood) => {
    res.json(foundFood);
  });
});

app.delete('/menu/:id', (req, res) => {
  Foods.findByIdAndRemove(req.params.id, (err, removedFood) => {
    res.json(removedFood);
  });
});

app.put('/menu/:id', (req, res) => {
  Foods.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedFood) => {
    res.json(updatedFood);
  });
});

app.listen(3000, () => {
  console.log('listening...');
});

mongoose.connect('mongodb://localhost:27017/menu')
mongoose.connection.once('open', () => {
  console.log('connected to mongod...');
});
