const mongoose = require('mongoose');
async function connectToDatabase(uri) {
  try {
    await mongoose.connect(uri);
    console.log('Mongodb successfully connected');
  } catch (err) {
    console.log('Error when trying to connect with MongoDB', err);
  }
}

// exports the function
module.exports = { connectToDatabase };
