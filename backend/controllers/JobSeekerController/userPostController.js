import { catchAsyncErrors } from "../../middlewares/catchAsyncError.js";
import { UserPost } from "../../models/JobSeekerModel/UserPostSchema.js";
import ErrorHandler from "../../middlewares/error.js";
import cloudinary from "cloudinary";

export const postUserPost = catchAsyncErrors(async (req, res, next) => {

  const { media } = req.files;
  // console.log(media);

  let cloudinaryResponse;
  if (media.mimetype.startsWith('image')) {
    // If it's an image, upload it as an image
    cloudinaryResponse = await cloudinary.uploader.upload(media.tempFilePath);
  } else if (media.mimetype.startsWith('video')) {
    // If it's a video, upload it as a video
    cloudinaryResponse = await cloudinary.uploader.upload(media.tempFilePath, { resource_type: "video" });
  } else {
    return next(new ErrorHandler("Unsupported media type.", 400));
  }

  const name = req.user.name;
  const email = req.user.email;
  const userPostedBy = req.user._id;
  const { textInfo, projectUrl } = req.body;

  // console.log(name,email,userPostedBy,textInfo,projectUrl,cloudinaryResponse);

  if (!name || !email || !textInfo || !projectUrl || !media) {
    return next(new ErrorHandler("Please provide full post details.", 400));
  }

  const userPost = await UserPost.create({
    name,
    email,
    textInfo,
    media: {
      public_id: cloudinaryResponse.public_id,
      url: cloudinaryResponse.secure_url,
    },
    projectUrl,
    userPostedBy,
  });

  res.status(200).json({
    success: true,
    message: "Posted Successfully!",
    userPost,
  });
});

export const getAllUserPost = catchAsyncErrors(async (req, res, next) => {
  const userPost = await UserPost.find({ expired: false });
  res.status(200).json({
    success: true,
    userPost,
  });
});
