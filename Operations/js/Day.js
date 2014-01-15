/**
 * Создает класс дня
 * @param {Object} params
 * @param {Number} params.day
 * @param {Object} params.month
 * @constructor
 */
var Day = function (params) {
    this.balance = [];
    this.day = params.day;
    this.month = params.month;
};
inherit(TimeFrame, Day);
/*
 * Метод добавляющий транзакцию
 * @param {Number} summ размер транзакции
 */
Day.prototype.addTransactions = function (summ) {
    this.balance.push(summ);
    this.month.balance += summ;
    this.month.year.balance += summ;
    this.month.year.account.balance += summ;
};
Day.prototype.getBalance = function () {
    var balance = 0;
    this.balance.forEach(function(item){
        balance += item;
    });
    return balance;
};

/*
 * Метод получения текущего баланса
 */
Day.prototype.getSumm = function () {
    var day = this.day;
    var month = this.month.month;
    var year = this.month.year.year;
    var account = this.month.year.account;
    var summ = account.getBalance();
    for (var yearCurrent in account.years) {
        if (account.years[yearCurrent].year > year)
            summ -= account.years[yearCurrent].getBalance();
    }
    for (var monthCurrent in account.years[year].months) {
        if (account.years[year].months[monthCurrent].month > month)
            summ -= account.years[year].months[monthCurrent].getBalance();
    }
    for (var dayCurrent in account.years[year].months[month].days) {
        if (account.years[year].months[month].days[dayCurrent].day > day)
            summ -= account.years[year].months[month].days[dayCurrent].getBalance();
    }

    return summ;
};

/*
 * Метод, возвращающий все транзакции за выбранный день
 */
Day.prototype.getMovement = function () {
    return this.balance.join();
};



