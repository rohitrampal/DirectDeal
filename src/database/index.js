import mongoose from "mongoose";


const connectToDB = async () => {
  const connectionUrl =
    "mongodb://127.0.0.1:27017/directDeal";

  mongoose
    .connect(connectionUrl)
    .then(() => console.log("DirectDeal database connected successfully!"))
    .catch((err) =>
      console.log(`Getting Error from DB connection ${err.message}`)
    );
};

export default connectToDB;
