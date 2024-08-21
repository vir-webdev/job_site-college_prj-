export const adminSendToken = (admin, statusCode, res, message) => {
    const token = admin.getJWTToken();
    const options = {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true, // Set httpOnly to true
    };
  
    res.status(statusCode).cookie("token", token, options).json({
      success: true,
      admin,
      message,
      token,
    });
  };
  