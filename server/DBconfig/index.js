import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const connection = await mongoose.connect(process.env.MongoDB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected successfully");
  } catch (error) {
    console.log("DB Error: " + error);
  }
};

export default dbConnection;