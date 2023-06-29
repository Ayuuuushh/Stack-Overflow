import mongoose from "mongoose";

const Userschema = mongoose.Schema({
  name: { type: String,Required: true },
  email: { type: String,  Required: true },
  password: { type: String,  Required: true },
  about: { type: String ,default:''},
  tags: { type: [String] , Required: true },
  JoinedOn: { type: Date , default: Date.now },
});

export default mongoose.model("Users", Userschema);
