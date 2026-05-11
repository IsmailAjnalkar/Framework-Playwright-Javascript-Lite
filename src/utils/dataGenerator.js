// Test data generation utilities for creating dynamic test data.
class DataGenerator {
  // Generate a random string of specified length
  static randomString(length = 8) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  // Generate a random email address
  static randomEmail(domain = 'test.com') {
    const username = this.randomString(8).toLowerCase();
    return `${username}@${domain}`;
  }

  // Generate a random phone number
  static randomPhone() {
    const areaCode = Math.floor(Math.random() * 900) + 100;
    const exchange = Math.floor(Math.random() * 900) + 100;
    const number = Math.floor(Math.random() * 9000) + 1000;
    return `(${areaCode}) ${exchange}-${number}`;
  }

  // Generate a random number within a range
  static randomNumber(min = 0, max = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Generate a random boolean
  static randomBoolean() {
    return Math.random() >= 0.5;
  }

  // Generate a random date within a range
  static randomDate(start = new Date(2000, 0, 1), end = new Date()) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  // Generate a random item from an array
  static randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  // Generate a random UUID-like string
  static randomUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}

module.exports = { DataGenerator };
