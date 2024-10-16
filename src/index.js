'use strict';

const BankAccount = function (initialBalance = 0) {
    let balance = initialBalance;

    this.deposit = function(amount) {
        if (amount > 0) {
            balance += amount;
            console.log(`Депозит: ${amount}. Новий баланс: ${balance}`);
        } else {
            console.log("Сума депозиту повинна бути більше 0");
        }
    };

    this.withdraw = function(amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            console.log(`Зняття: ${amount}. Новий баланс: ${balance}`);
        } else if (amount > balance) {
            console.log("Недостатньо коштів");
        } else {
            console.log("Сума зняття повинна бути більше 0");
        }
    };

    this.getBalance = function() {
        return balance;
    };
}

// Приклад 1:
const account1 = new BankAccount(200);
account1.deposit(150);     // Депозит: 150. Новий баланс: 350
account1.withdraw(75);     // Зняття: 75. Новий баланс: 275
console.log(account1.getBalance()); // 275

// Приклад 2:
const account2 = new BankAccount(100);
account2.withdraw(150);    // Недостатньо коштів
console.log(account2.getBalance()); // 100
