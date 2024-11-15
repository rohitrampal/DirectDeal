import mongoose from "mongoose";


const connectToDB = async () => {
  const connectionUrl =
    "mongodb+srv://rohit:rohit12345@directdeal.clc6v.mongodb.net/?retryWrites=true&w=majority&appName=DirectDeal";

  mongoose
    .connect(connectionUrl)
    .then(() => console.log("DirectDeal database connected successfully!"))
    .catch((err) =>
      console.log(`Getting Error from DB connection ${err.message}`)
    );
};

export default connectToDB;
