/**
 * Создает класс месяца
 * @param {number} year год
 * @param {object} account счет к которому относится год
 */
var Year = function (year, account) {
    this.year = year;
    this.account = account;
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
        this.months[month] = new Month(month, this);
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

