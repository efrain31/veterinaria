const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(bodyParser.json());


mongoose.connect('mongodb+srv://2121100624:2121100624@cluster0.k161o.mongodb.net/');
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));


app.post('/', (req, res) =>{
  const {name, age, email} = req.body;
  const newUser = new User ({name: name , age:age , email: email});
  newUser.save();
  res.json('api is working');
  console.log( "New Uswer", newUser)

});
//TODO:  this


app.listen(port, () => {
  console.log(`Server is running on :${port}`);
});



const { Schema, model } = mongoose;
const userSchema = new Schema({
  name: String,
  age: Number,
  email: String
});
const User = model('User', userSchema);