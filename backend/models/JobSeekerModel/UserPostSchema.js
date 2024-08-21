import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userPostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your Name!"],
  },
  email: {
    type: String,
    required: [true, "Please enter your Email!"],
    validate: [validator.isEmail, "Please provide a valid Email!"],
  },
  textInfo: {
    type: String,
    required: [true, "Please provide a Password!"],
  },
  media: {
    public_id: {
      type: String, 
      required: true,
    },
    url: {
      type: String, 
      required: true,
    },
  },
  projectUrl:{
    type:String,
  },
  expired: {
    type: Boolean,
    default: false,
  },
  userPostedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  // employerPostedBy: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Employer",
  // },
  userPostCreatedAt: {
    type: Date,
    default: Date.now,
  },
});


// //GENERATING A JWT TOKEN WHEN A USER REGISTERS OR LOGINS, IT DEPENDS ON OUR CODE THAT WHEN DO WE NEED TO GENERATE THE JWT TOKEN WHEN THE USER LOGIN OR REGISTER OR FOR BOTH. 
// userSchema.methods.getJWTToken = function () {
//   return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
//     expiresIn: process.env.JWT_EXPIRES,
//   });
// };

export const UserPost = mongoose.model("UserPost", userPostSchema);
