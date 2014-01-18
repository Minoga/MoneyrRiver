/**
 * Создает класс дня
 * @class
 * @param {Object} params
 * @param {Number} params.month
 * @param {Object} params.year
 * @constructor
 */
var Month = function (params) {
    this.month = params.month;
    this.year = params.year;
    this.days = {};
    this.balance = 0;
};

inherit(Month, TimeFrame);
/**
 * Метод возращающий требуемый день
 * @param {Number} day номер дня в месяце
 * @returns {Object}
 */

Month.prototype.getDay = function (day) {
    if (!this.days[day]) {
        this.days[day] = new Day({day: day, month: this});
    }
    return this.days[day]
};
/**
 * Метод, возвращающий все транзакции за выбранный месяц
 * @returns {String}
 */
Month.prototype.getMovement = function () {
    var movementData = '';
    for (var dayCurrent in this.days) {
        movementData += this.days[dayCurrent].getMovement() + ',';
    }
    return movementData;
};
