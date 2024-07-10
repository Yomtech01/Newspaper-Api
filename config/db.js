const mongoose = require("mongoose");
const { configDotenv } = require("dotenv");

configDotenv();

console.log(process.env.MONGO_URI);

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://oluwayomike3:FGAURnZexconjSXG@cluster0.ylu90vj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    // "mongodb+srv://quadri_01:agboola@4000@cluster0.p9evgxt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    console.log("MongoDB Connected...");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
