/** @constructor */
var Form = function(){
};

Form.prototype._createOption = function(accountName, value){
    var option = document.createElement('option');
    option.innerHTML = accountName;
    option.value = value;
    console.log(this);
    this.accountsList.appendChild(option);
};

Form.prototype._getData = function(form) {
    return {
        'day': form.day.value,
        'month': form.month.value,
        'year': form.year.value,
        'account': form.accountsList.value
    }
};




