/**
 * Создает класс месяца
 * @param {Object} params
 * @param {Number} params.year
 * @param {Object} params.account
 * @constructor
 */
var Year = function (params) {
    this.year = params.year;
    this.account = params.account;
    this.balance = 0;
    this.months = {};
};
inherit(TimeFrame, Year);
/*
 * Метод, возращающий требуемый месяц
 * @param {Number} month номер месяца в году
 */
Year.prototype.getMonth = function (month) {
    if (!this.months[month]) {
        this.months[month] = new Month({'month': month, 'year': this});
    }
    return this.months[month];
};
/*
* Метод, возвращающий все транзакции за выбранный год
*/
Year.prototype.getMovement = function () {
    var movementData = '';
    for (var monthCurrent in this.months) {
        movementData += this.months[monthCurrent].getMovement();
    }
    return movementData;
};

