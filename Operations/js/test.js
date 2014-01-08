var test = new Account(0);
test.getYear(2010).getMonth(1).getDay(10).addTransactions(300);
test.getYear(2010).getMonth(1).getDay(10).addTransactions(300);
test.getYear(2010).getMonth(1).getDay(11).addTransactions(300);
test.getYear(2010).getMonth(11).getDay(10).addTransactions(300);
test.getYear(2011).getMonth(1).getDay(10).addTransactions(300);
console.log(test.getYear(2010).getMonth(2).getDay(0).getSumm());
