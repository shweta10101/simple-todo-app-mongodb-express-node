const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  poolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Retry for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
};

// Enable detailed logging for MongoDB queries to track performance
mongoose.set('debug', true);

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/tododb-dev', options)
  .then(() => console.log('Database connected successfully'))
  .catch((err) => {
    console.error('Initial connection error:', err);
    process.exit(1);
  });

