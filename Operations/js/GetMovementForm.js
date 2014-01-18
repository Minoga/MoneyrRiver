/**
 * @class
 * @constructor
 */
var GetMovementForm = function(){
    this.getMovementForm = $('.movementForm')[0];
    this.typePeriod = this.getMovementForm.typePeriod;
    this.accountsList = this.getMovementForm.accountsList;
    this.getMovementButton = $('.getMovement')[0];
    this.getMovementButton.addEventListener('click', this._getMovement.bind(this));
};

inherit(GetMovementForm, Form);

/**
 * Метод, обрабатывающий нажатие кнопки Показать в форме Движение по счету за период
 * @private
 */
GetMovementForm.prototype._getMovement = function() {
    var parameters = this.getData(this.getMovementForm),
        currentAccount = this.accounts[parameters.account];
    if (this.typePeriod[0].checked) {
        alert(currentAccount.getYear(parameters.year).getMonth(parameters.month).getDay(parameters.day).getMovement());
    } else if (this.typePeriod[1].checked) {
        alert(currentAccount.getYear(parameters.year).getMonth(parameters.month).getMovement());
    } else {
        alert(currentAccount.getYear(parameters.year).getMovement());
    }
};




