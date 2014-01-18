/**
 * @class
 * @constructor
 */
var GetBalanceForm = function(){
    this.getBalanceForm = $('.balanceForm')[0];
    this.getBalanceButton = $('.getBalance')[0];
    this.accountsList = this.getBalanceForm.accountsList;
    this.getBalanceButton.addEventListener('click', this._getBalance.bind(this));
};

inherit(GetBalanceForm, Form);

/**
 * Метод, обрабатывающий нажатие кнопки Показать баланс в форме Получение баланса
 * @private
 */
GetBalanceForm.prototype._getBalance = function() {
    var parameters = this.getData(this.getBalanceForm);
    console.log(this.accounts[parameters.account].getYear(parameters.year).getMonth(parameters.month).getDay(parameters.day).getSumm());
};





