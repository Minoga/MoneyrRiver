/*
 * Класс счета
 */
var Account = function (balance) {
    this.balance = balance;
    this.years = {};
};

/*
 * Метод возвращающий год
 * @param {number} year год
 */
Account.prototype.getYear = function (year) {
    if (!this.years[year]) {
        this.years[year] = new Year(year, this);
    }
    return this.years[year];
};

/*
 * Метод возвращающий баланс счета
 */
Account.prototype.getBalance = function (year) {
   return this.balance;
};