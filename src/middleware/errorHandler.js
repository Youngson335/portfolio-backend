export const errorHandler = (error, req, res, next) => {
  console.error("Error:", error);

  if (error.code?.startsWith("PGRST")) {
    return res.status(500).json({
      success: false,
      message: "Database error",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }

  res.status(500).json({
    success: false,
    message: "Internal server error",
    error: process.env.NODE_ENV === "development" ? error.message : undefined,
  });
};
