import { catchAsyncErrors } from "../../middlewares/catchAsyncError.js";
import { Employer } from "../../models/EmployerModel/EmployerSchema.js";
import ErrorHandler from "../../middlewares/error.js";
import { empSendToken } from "../../utils/EmployerJwtToken.js";

export const employerRegister = catchAsyncErrors(async (req, res, next) => {
  const { companyName,employerName,employerNumber,employerEmail, gstNumber, password } = req.body;
  if (!companyName || !employerName || !employerNumber || !employerEmail || !gstNumber ||!password) {
    return next(new ErrorHandler("Please fill full form!"));
  }
  const isEmail = await Employer.findOne({ employerEmail });
  if (isEmail) {
    return next(new ErrorHandler("Email already registered!"));
  }
  const employer = await Employer.create({
    companyName,
    employerName,
    employerNumber,
    employerEmail, 
    gstNumber, 
    password, 
  });
   
 empSendToken(employer, 201, res, "User registered successfully!");
});

export const employerLogin = catchAsyncErrors(async (req, res, next) => {
  const { employerEmail, password } = req.body;
  if (!employerEmail || !password) {
    return next(new ErrorHandler("Please provide email and password"));
  }
  const employer = await Employer.findOne({ employerEmail }).select("+password");
  if (!employer) {
    return next(new ErrorHandler("Invalid Email Or Password.", 400));
  }
  const isPasswordMatched = await employer.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Email Or Password.", 400));
  }

  empSendToken(employer, 201, res, "Employer Logged In!");
});

export const empLogout = catchAsyncErrors(async (req, res, next) => {
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


export const getEmployer = catchAsyncErrors((req, res, next) => {
  const employer = req.employer;
  res.status(200).json({
    success: true,
    employer,
  });
});

