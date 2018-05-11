const bankAccount = (function (_init) {
    let _balance = _init;
    return {
        deposit: function (d) {
            _balance += d;
        },

        withdraw: function (w) {
            _balance -= w;
        },

        account: function() { 
            return _balance;
        }
    }
})(100);

console.log(`balance ${bankAccount.account()}`); // output 100
bankAccount.deposit(10);
console.log(`balance ${bankAccount.account()}`); // output 110
bankAccount.withdraw(20);
console.log(`balance ${bankAccount.account()}`); // output 9-
