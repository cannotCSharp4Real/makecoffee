require('dotenv').config();

const config = {
  // Server configuration
  port: process.env.PORT || 3000,
  
  // MongoDB configuration
  mongodb: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/coffee_shop',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  }
};

module.exports = config; 