/**
 * Создает класс месяца
 * @param {number} month номер месяца в году
 * @param {object} year год к которому относится месяц
 */
var Month = function (month, year) {
    this.month = month;
    this.year = year;
    this.days = {};
    this.balance = 0;
};

inherit(TimeFrame, Month);
/*
 * Метод возращающий требуемый день
 * @param {Number} day номер дня в месяце
 */

Month.prototype.getDay = function (day) {
    if (!this.days[day]) {
        this.days[day] = new Day(day, this);
    }
    return this.days[day]
};
