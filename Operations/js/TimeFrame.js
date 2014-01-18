/**
 * @class
 * @abstract
 * @constructor
 */
var TimeFrame = function (account) {
};

/**
 * Метод возращающий баланс
 * @returns {Number}
 */

TimeFrame.prototype.getBalance = function () {
    return this.balance;
};