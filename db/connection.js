const mongoose = require("mongoose");

mongoose
  .connect(process.env.ATLAS_DB_URL)
  .then(() =>
    console.log(
      mongoose.connection.readyState == 1
        ? "Mongoose connected!"
        : "Mongoose failed"
    )
  )
  .catch((err) => console.log(err));

module.exports = mongoose;
