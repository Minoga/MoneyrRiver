/**
 * @class
 * @constructor
 */
var Account = function (params) {
    this.balance = params ? params.balance : 0;
    this.years = {};
};

/**
 * Метод возвращающий год
 * @param {number} year год
 * @returns {Object}
 */
Account.prototype.getYear = function (year) {
    if (!this.years[year]) {
        this.years[year] = new Year({year: year, account: this});
    }
    return this.years[year];
};

/**
 * @returns {Number}
 */
Account.prototype.getBalance = function (year) {
   return this.balance;
};