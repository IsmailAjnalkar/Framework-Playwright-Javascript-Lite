// Logger utility for consistent test logging across the framework.
class Logger {
  static info(message, data) {
    console.log(`[INFO] ${new Date().toISOString()} - ${message}`, data ? data : '');
  }

  static error(message, error) {
    console.error(`[ERROR] ${new Date().toISOString()} - ${message}`, error ? error : '');
  }

  static warn(message, data) {
    console.warn(`[WARN] ${new Date().toISOString()} - ${message}`, data ? data : '');
  }

  static debug(message, data) {
    if (process.env.DEBUG === 'true') {
      console.debug(`[DEBUG] ${new Date().toISOString()} - ${message}`, data ? data : '');
    }
  }
}

module.exports = { Logger };
