
function createAccount () {
    accounts.push(new Account(0));
    var option = document.createElement('option');
    option.innerHTML = accountName.value;
    option.value = accounts.length - 1;
    var optionTr = option.cloneNode(true);
    var optionMv = option.cloneNode(true);
    accountsList.appendChild(option);
    accountsListTr.appendChild(optionTr);
    accountsListMv.appendChild(optionMv);
}
function createTransaction () {
    var flag = (transactionForm.typeOperation[0].checked) ? 1 : 0,
        day = transactionForm.day.value,
        month = transactionForm.month.value,
        year = transactionForm.year.value,
        summ = flag ? parseInt(transactionForm.summ.value, 10) : -parseInt(transactionForm.summ.value, 10),
        account = transactionForm.accountsList.value;
    accounts[account].getYear(year).getMonth(month).getDay(day).addTransactions(summ);
}
function getBalance () {
    day = getBalanceForm.dayBalance.value;
    month = getBalanceForm.monthBalance.value;
    year = getBalanceForm.yearBalance.value;
    account = getBalanceForm.accountsList.value;
    console.log(accounts[account].getYear(year).getMonth(month).getDay(day).getSumm());
}
function getMovement () {
    var day = getMovementForm.day.value,
        month = getMovementForm.month.value,
        year = getMovementForm.year.value,
        account = getMovementForm.accountsList.value;
    if (typePeriod[0].checked) {
        alert(accounts[account].getYear(year).getMonth(month).getDay(day).getMovement());
    } else if (typePeriod[1].checked) {
        alert(accounts[account].getYear(year).getMonth(month).getMovement());
    } else {
        alert(accounts[account].getYear(year).getMovement());
    }
}
var accounts = [],
    transactionForm = document.getElementById('transactionForm'),
    createAccountForm = document.getElementById('accountForm'),
    getBalanceForm = document.getElementById('balanceForm'),
    getMovementForm = document.getElementById('movementForm'),
    typePeriod = getMovementForm.typePeriod,
    accountsList = transactionForm.accountsList,
    accountsListTr = getBalanceForm.accountsList,
    accountsListMv = getMovementForm.accountsList,
    createAccountButton = document.getElementById('addAccount'),
    createTransactionButton = document.getElementById('addTransaction'),
    getBalanceButton = document.getElementById('getBalance'),
    getMovementButton = document.getElementById('getMovement'),
    accountName = createAccountForm.accountName;

createAccountButton.addEventListener('click', createAccount);
createTransactionButton.addEventListener('click', createTransaction);
getBalanceButton.addEventListener('click', getBalance);
getMovementButton.addEventListener('click', getMovement);



