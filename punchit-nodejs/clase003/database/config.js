const mongoose = require("mongoose");

const dbConnection = async () => {
  const URL = process.env.URL_DATABASE_MONGO
  try {
      const resolve = await mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      });
      console.log("connect to db");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { dbConnection };
