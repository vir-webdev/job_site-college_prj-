import mongoose from "mongoose";
import validator from "validator";

const applicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your Name!"],
    minLength: [3, "Name must contain at least 3 Characters!"],
    maxLength: [30, "Name cannot exceed 30 Characters!"],
  },
  email: {
    type: String,
    required: [true, "Please enter your Email!"],
    validate: [validator.isEmail, "Please provide a valid Email!"],
  },
  coverLetter: {
    type: String,
    required: [true, "Please provide a cover letter!"],
  },
  phone: {
    type: Number,
    required: [true, "Please enter your Phone Number!"],
  },
  address: {
    type: String,
    required: [true, "Please enter your Address!"],
  },
  gender: {
    type: String,
    required: [true, "Please provide a cover letter!"],
  },
  dob: {
    type: String,
    required: [true, "Please provide a cover letter!"],
  },
  collegeName: {
    type: String,
    required: [true, "Please provide a cover letter!"],
  },
  Department: {
    type: String,
    required: [true, "Please provide a cover letter!"],
  },
  degree: {
    type: String,
    required: [true, "Please provide a cover letter!"],
  },
  academicStart: {
    type: String,
    required: [true, "Please provide a cover letter!"],
  },
  academicEnd: {
    type: String,
    required: [true, "Please provide a cover letter!"],
  },
  resume: {
    public_id: {
      type: String, 
      required: true,
    },
    url: {
      type: String, 
      required: true,
    },
  },
  applicantID: {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  employerID: {
    employer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employer",
      required: true,
    },
  },
});

export const Application = mongoose.model("Application", applicationSchema);
