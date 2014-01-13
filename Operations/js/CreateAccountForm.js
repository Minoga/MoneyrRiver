/** @constructor */
var OperationPage = function(){
    this.accounts = [];
    this.transactionForm = document.getElementById('transactionForm'),
    this.createAccountForm = document.getElementById('accountForm'),
    this.getBalanceForm = document.getElementById('balanceForm'),
    this.getMovementForm = document.getElementById('movementForm'),
    this.typePeriod = this.getMovementForm.typePeriod,
    this.accountsList = this.transactionForm.accountsList,
    this.accountsListTr = this.getBalanceForm.accountsList,
    this.accountsListMv = this.getMovementForm.accountsList,
    this.createAccountButton = document.getElementById('addAccount'),
    this.createTransactionButton = document.getElementById('addTransaction'),
    this.getBalanceButton = document.getElementById('getBalance'),
    this.getMovementButton = document.getElementById('getMovement'),
    this.accountName = this.createAccountForm.accountName;
    this.createAccountButton.addEventListener('click', this._createAccount.bind(this));
    this.createTransactionButton.addEventListener('click', this._createTransaction.bind(this));
    this.getBalanceButton.addEventListener('click', this._getBalance.bind(this));
    this.getMovementButton.addEventListener('click', this._getMovement.bind(this));
};
/**
 * Метод, обрабатывающий нажатие кнопки Создать счет в форме Создать счет
 * @protected
 */
OperationPage.prototype._createAccount = function(){
    this.accounts.push(new Account(0));
    var option = document.createElement('option');
    option.innerHTML = this.accountName.value;
    option.value = this.accounts.length - 1;
    var optionTr = option.cloneNode(true);
    var optionMv = option.cloneNode(true);
    this.accountsList.appendChild(option);
    this.accountsListTr.appendChild(optionTr);
    this.accountsListMv.appendChild(optionMv);
};
/**
 * Метод, обрабатывающий нажатие кнопки Добавить в форме Ввод транзакций по счету
 * @protected
 */
OperationPage.prototype._createTransaction = function() {
    var flag = (this.transactionForm.typeOperation[0].checked) ? 1 : 0,
        parameters = this._getData(this.transactionForm);
        summ = flag ? parseInt(this.transactionForm.summ.value, 10) : -parseInt(this.transactionForm.summ.value, 10),
    this.accounts[parameters.account].getYear(parameters.year).getMonth(parameters.month).getDay(parameters.day).addTransactions(summ);
};
/**
 * Метод, обрабатывающий нажатие кнопки Показать баланс в форме Получение баланса
 * @protected
 */
OperationPage.prototype._getBalance = function() {
    var parameters = this._getData(this.getBalanceForm);
    console.log(this.accounts[parameters.account].getYear(parameters.year).getMonth(parameters.month).getDay(parameters.day).getSumm());
};

/**
 * Метод, обрабатывающий нажатие кнопки Показать в форме Движение по счету за период
 * @protected
 */
OperationPage.prototype._getMovement = function() {
    var parameters = this._getData(this.getMovementForm),
        currentAccount = this.accounts[parameters.account];
    if (this.typePeriod[0].checked) {
        alert(currentAccount.getYear(parameters.year).getMonth(parameters.month).getDay(parameters.day).getMovement());
    } else if (this.typePeriod[1].checked) {
        alert(currentAccount.getYear(parameters.year).getMonth(parameters.month).getMovement());
    } else {
        alert(currentAccount.getYear(parameters.year).getMovement());
    }
};
/**
 * Метод, возвращающий значения элементов формы
 * @param {HTMLHtmlElement} form номер месяца в году
 * @return {Object}
 * @protected
 */

OperationPage.prototype._getData = function(form) {
    return {
        'day': form.day.value,
        'month': form.month.value,
        'year': form.year.value,
        'account': form.accountsList.value
    }
};


new OperationPage();



