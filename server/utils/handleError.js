// Helper function to handle errors
const handleError = (res, statusCode, errorMessage) => {
  console.error(`Status: ${statusCode}, Error: ${errorMessage}`);
  return res.status(statusCode).json({
    success: false,
    message: errorMessage,
  });
};

export default handleError;
