// logger.middleware.js

// Fungsi satpam untuk mencatat setiap ada request masuk
function loggerMiddleware(req, res, next) {
  // Mencatat waktu, metode HTTP (GET/POST), dan URL tujuan ke terminal
  console.log(`[${new Date().toISOString()}] ${req.method} ke ${req.url}`);
  
  // Wajib panggil next() supaya request tidak gantung dan bisa lanjut ke koki (controller)
  next();
}

module.exports = loggerMiddleware;