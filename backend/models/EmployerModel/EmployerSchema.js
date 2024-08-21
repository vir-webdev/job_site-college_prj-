import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const employerSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: [true, "Please enter your Company Name!"],
  },
  employerName: {
    type: String,
    required: [true, "Please enter your Name!"],
  },
  employerNumber: {
    type: Number,
    required: [true, "Please provide a contect number!"],
    minLength: [9, "employerNumber must contain at least 10 characters!"],
    maxLength: [10, "employerNumber cannot exceed 10 characters!"],
  },
  employerEmail: {
    type: String,
    required: [true, "Please enter your Email!"],
    validate: [validator.isEmail, "Please provide a valid Email!"],
  },
  gstNumber: {
    type: String,
    required: [true, "Please provide a GST Number!"],
    minLength: [22, "gstNumber must contain at least 22 characters!"],
    maxLength: [22, "gstNumber cannot exceed 22 characters!"],
  },
  password: {
    type: String,
    required: [true, "Please provide a Password!"],
    minLength: [8, "Password must contain at least 8 characters!"],
    maxLength: [32, "Password cannot exceed 32 characters!"],
  },
  expired: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}); 


//ENCRYPTING THE PASSWORD WHEN THE USER REGISTERS OR MODIFIES HIS PASSWORD
employerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

//COMPARING THE USER PASSWORD ENTERED BY USER WITH THE USER SAVED PASSWORD
employerSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//GENERATING A JWT TOKEN WHEN A USER REGISTERS OR LOGINS, IT DEPENDS ON OUR CODE THAT WHEN DO WE NEED TO GENERATE THE JWT TOKEN WHEN THE USER LOGIN OR REGISTER OR FOR BOTH. 
employerSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY_EMP, {
    expiresIn: process.env.JWT_EXPIRES,
  }); 
};

export const Employer = mongoose.model("Employer", employerSchema);
