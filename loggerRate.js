var Logger = function () {
  this.messages = {};
};

/**
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function (timestamp, message) {
  if (this.messages[message] >= 0) {
    if (timestamp >= this.messages[message] + 10) {
      this.messages[message] = timestamp;
      return true;
    } else {
      return false;
    }
  } else {
    this.messages[message] = timestamp;
    return true;
  }
};
