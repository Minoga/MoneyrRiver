/** @constructor */
var OperationPage = function(){
    var createAccountForm = new CreateAccountForm(this.accounts);
    var transactionForm = new TransactionForm();
    var getBalanceForm = new GetBalanceForm();
    var getMovementForm = new GetMovementForm();
    createAccountForm.subscribe(transactionForm._createOption.bind(transactionForm));
    createAccountForm.subscribe(getBalanceForm._createOption.bind(getBalanceForm));
    createAccountForm.subscribe(getMovementForm._createOption.bind(getMovementForm));
};
OperationPage.accounts = [];
var CreateAccountForm = function(accounts){
    this.accounts = accounts;
    this.createAccountForm = $('#accountForm')[0];
    this.createAccountButton = $('#addAccount')[0];
    this.accountName = this.createAccountForm.accountName;
    this.createAccountButton.addEventListener('click', this._createAccount.bind(this));
};

/**
 * Метод, обрабатывающий нажатие кнопки Создать счет в форме Создать счет
 * @protected
 */
CreateAccountForm.prototype._createAccount = function(){
    OperationPage.accounts.push(new Account());
    this._visitSubscribers(this.accountName.value, OperationPage.accounts.length-1);
};

CreateAccountForm.prototype._subscribers = [];

CreateAccountForm.prototype.subscribe = function(publisher) {
    this._subscribers.push(publisher);
};

CreateAccountForm.prototype._visitSubscribers = function(accountName, value){
    for (var i = 0; i <  this._subscribers.length; i++ ) {
        this._subscribers[i](accountName, value);
    }
};

var TransactionForm = function(){
    this.transactionForm = $('#transactionForm')[0];
    this.accountsList = this.transactionForm.accountsList;
    this.createTransactionButton = $('#addTransaction')[0];
    this.createTransactionButton.addEventListener('click', this._createTransaction.bind(this));
};

inherit(Form, TransactionForm);
/*
 * Метод, возращающий требуемый месяц
 * @param {Number} month номер месяца в году
 */
/**
 * Метод, обрабатывающий нажатие кнопки Добавить в форме Ввод транзакций по счету
 * @protected
 */
TransactionForm.prototype._createTransaction = function() {
    var flag = this.transactionForm.typeOperation[0].checked,
        parameters = this._getData(this.transactionForm);
    summ = flag ? parseInt(this.transactionForm.summ.value, 10) : -parseInt(this.transactionForm.summ.value, 10);
    OperationPage.accounts[parameters.account].getYear(parameters.year).getMonth(parameters.month).getDay(parameters.day).addTransactions(summ);
};

var GetBalanceForm = function(){
    this.getBalanceForm = $('#balanceForm')[0];
    this.getBalanceButton = $('#getBalance')[0];
    this.accountsList = this.getBalanceForm.accountsList;
    this.getBalanceButton.addEventListener('click', this._getBalance.bind(this));
};

inherit(Form, GetBalanceForm);

var GetMovementForm = function(){
    this.getMovementForm = $('#movementForm')[0];
    this.typePeriod = this.getMovementForm.typePeriod;
    this.accountsList = this.getMovementForm.accountsList;
    this.getMovementButton = $('#getMovement')[0];
    this.getMovementButton.addEventListener('click', this._getMovement.bind(this));
};

inherit(Form, GetMovementForm);

/**
 * Метод, обрабатывающий нажатие кнопки Показать баланс в форме Получение баланса
 * @protected
 */
GetBalanceForm.prototype._getBalance = function() {
    var parameters = this._getData(this.getBalanceForm);
    console.log(OperationPage.accounts[parameters.account].getYear(parameters.year).getMonth(parameters.month).getDay(parameters.day).getSumm());
};

/**
 * Метод, обрабатывающий нажатие кнопки Показать в форме Движение по счету за период
 * @protected
 */
GetMovementForm.prototype._getMovement = function() {
    var parameters = this._getData(this.getMovementForm),
        currentAccount = OperationPage.accounts[parameters.account];
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

new OperationPage();



