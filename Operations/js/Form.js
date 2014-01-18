/**
 * @class
 * @abstract
 * @constructor
 */
var Form = function(){
    this.accounts = {};
};


/**
 * @param {HTMLFormElement} accountName
 * @param {Object} accounts
 */
Form.prototype.createOption = function(accountName, accounts){
    this.accounts = accounts;
    var option = document.createElement('option');
    option.innerHTML = accountName.value;
    option.value = this.accounts.length-1;
    this.accountsList.appendChild(option);
};

/**
 * @param {HTMLFormElement} form
 * @returns {Object}
 */
Form.prototype.getData = function(form) {
    return {
        'day': form.day.value,
        'month': form.month.value,
        'year': form.year.value,
        'account': form.accountsList.value
    }
};




