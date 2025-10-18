import app from "./app.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Visits counter API: http://localhost:${PORT}/api/visits`);
  console.log(`❤️  Health check: http://localhost:${PORT}/api/health`);
});
