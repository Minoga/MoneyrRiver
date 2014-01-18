var TransactionForm = function(){
    this.transactionForm = $('.transactionForm')[0];
    this.accountsList = this.transactionForm.accountsList;
    this.createTransactionButton = $('.addTransaction')[0];
    this.createTransactionButton.addEventListener('click', this._createTransaction.bind(this));
};

inherit(TransactionForm, Form);
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
        parameters = this.getData(this.transactionForm),
        summ = parseInt(this.transactionForm.summ.value, 10);
    summ = flag ? summ : -summ;
    this.accounts[parameters.account].getYear(parameters.year).getMonth(parameters.month).getDay(parameters.day).addTransactions(summ);
};




