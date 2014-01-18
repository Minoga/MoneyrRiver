/** @constructor */
var OperationPage = function(){
    this.accounts = [];
    var createAccountForm = new CreateAccountForm({accounts: this.accounts, context: this});
    var transactionForm = new TransactionForm();
    var getBalanceForm = new GetBalanceForm();
    var getMovementForm = new GetMovementForm();
    this._on('createAccount', transactionForm.createOption.bind(transactionForm, createAccountForm.accountName, this.accounts));
    this._on('createAccount', getBalanceForm.createOption.bind(getBalanceForm, createAccountForm.accountName, this.accounts));
    this._on('createAccount', getMovementForm.createOption.bind(getMovementForm, createAccountForm.accountName, this.accounts));
};

OperationPage.prototype._subscribers = [];

OperationPage.prototype.createAccount = function(){
    this.accounts.push(new Account());
    this._fire('createAccount');
};

OperationPage.prototype._on = function(actionName, cb){
    if (typeof this._subscribers[actionName]  === 'undefined' ){
        this._subscribers[actionName] = [];
    }
    this._subscribers[actionName].push(cb);
};

OperationPage.prototype._fire = function(actionName){
    this._subscribers[actionName].forEach(function(cb){cb()})
};


new OperationPage();



/*
var Page = {};
var form1 = {};
var form2 = {};
form2.method = function(){ this.notify('some action') };
form2.subscribe = function(actionName, cb){ this._actions = {}; this._actions[actionName] = [cb]; };
form1.method2 = function(){console.log('blah')};
form2.subscribe('some action', form1.method2);
form2.notify = function(actionName){ this._actions[actionName].forEach(function(cb){cb()}) };
form2.method();


var Page = {}
var form1 = {}
var form2 = {}
form2.method = function(){ Page.notify('some action') }
Page.subscribe = function(actionName, cb){ this._actions = {}; this._actions[actionName] = [cb]; }
form1.method2 = function(){console.log('blah')}
Page.subscribe('some action', form1.method2)
Page.notify = function(actionName){ this._actions[actionName].forEach(function(cb){cb()}) }
form2.method()
 */

