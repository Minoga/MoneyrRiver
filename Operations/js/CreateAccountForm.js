/**
 * @class
 * @constructor
 * @params {Object} params
 * @params {Array} params.accounts
 * @params {???} params.context
 */
var CreateAccountForm = function(params){
    this.accounts = params.accounts;
    this.createAccountForm = $('.accountForm')[0];
    this.createAccountButton = $('.addAccount')[0];
    this.accountName = this.createAccountForm.accountName;
    this.createAccountButton.addEventListener('click', params.context.createAccount.bind(params.context, this.accountName.value));
};









