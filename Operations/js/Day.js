/*
 * Класс дня
 */
var Day = function (day, month) {
    this.day = day;
    this.month = month;
    this.balance = 0;
};
inherit(TimeFrame, Day);
/*
 * Метод добавляющий транзакцию
 * @param {Number} summ размер транзакции
 */
Day.prototype.addTransactions = function (summ) {
    this.balance += summ;
    this.month.balance += summ;
    this.month.year.balance += summ;
    this.month.year.account.balance += summ;
    console.log(this);
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



