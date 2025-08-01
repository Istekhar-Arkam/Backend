const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};
export { asyncHandler };

// This is for try & catch

// const asyncHandler=(fn)=>async (err,req,res,next)=>{
// try {
//     await fn(req,res,next)
// } catch (error) {
//   res.status(err.code || 500).json({
//     success:false,
//     message:err.message
//   })
// }
// }
