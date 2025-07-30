import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  // get user detail from frontend
  // validation - not empty
  // check if user already exists :username,email
  // check for image ,check for avatar
  // upload them to cloudinary,avatar
  // create user object-create entry in db
  // remove password and refresh token field from response
  // check for user creation
  // return response

  res.status(200).json({
    message: "yes api is working",
  });
});

export { registerUser };
