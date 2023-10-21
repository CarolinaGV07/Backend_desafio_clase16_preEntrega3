import mongoose from "mongoose";
mongoose.set("strictQuery", false);

const chatsCollection = "messages";

const chatModel = mongoose.model(
  chatsCollection,
  new mongoose.Schema({
    user: String,
    message: String,
    hour: String,
  })
);

export default chatModel;
