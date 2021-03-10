const mongoose = require('mongoose');

const dbConnection = async () => {
  const URL = process.env.URL_DATABASE_MONGO;
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log('Connect to db');
  } catch (error) {
    console.log(error);
  }
};

module.exports = {dbConnection};
