import { catchAsyncErrors } from "../../middlewares/catchAsyncError.js";
import { Admin } from "../../models/Admin/AdminSchema.js";
import {User} from "../../models/JobSeekerModel/userSchema.js";
import { Employer } from "../../models/EmployerModel/EmployerSchema.js";
import { Job } from "../../models/EmployerModel/jobSchema.js";
import ErrorHandler from "../../middlewares/error.js";
import { adminSendToken } from "../../utils/AdminJwtToken.js";

export const adminlogin = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(new ErrorHandler("Please provide email and password"));
    }
    const admin = await Admin.findOne({ email }).select("+password");
    if (!admin) {
      return next(new ErrorHandler("Invalid Email Or Password.", 400));
    }
    const isPasswordMatched = await admin.comparePassword(password);
    if (!isPasswordMatched) {
      return next(new ErrorHandler("Invalid Email Or Password.", 400));
    }
  
    adminSendToken(admin, 201, res, "admin Logged In!");
  });
  
  export const adminregister = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return next(new ErrorHandler("Please fill full form!"));
    }
    const isEmail = await Admin.findOne({ email });
    if (isEmail) {
      return next(new ErrorHandler("Email already registered!"));
    }
    const admin = await Admin.create({
      name,
      email,
      password,
    });
     
    adminSendToken(admin, 201, res, "admin registered successfully!");
  });

  export const adminlogout = catchAsyncErrors(async (req, res, next) => {
    res
      .status(201)
      .cookie("token", "", {
        httpOnly: true,
        expires: new Date(Date.now()),
      })
      .json({
        success: true,
        message: "Logged Out Successfully.",
      });
  });

  export const getAllUser = catchAsyncErrors(async (req, res, next) => {
    const user = await User.find({ expired: false });
    res.status(200).json({
      success: true,
      user,
    });
  });
  export const getAllEmployer = catchAsyncErrors(async (req, res, next) => {
    const employer = await Employer.find({ expired: false });
    res.status(200).json({
      success: true,
      employer,
    });
  });

  export const getAllJobs = catchAsyncErrors(async (req, res, next) => {
    const jobs = await Job.find({ expired: false });
    res.status(200).json({
      success: true,
      jobs,
    });
  });