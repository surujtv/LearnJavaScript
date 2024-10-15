//banking

class GeneralCreateAccount{
    constructor(name, age, accountNumber, balance){
        this.name = name         
        this.age = age         
        this.accountNumber = accountNumber         
        this.balance = balance         
    }

    deposit(amount){
        this.balance += amount
    }

    withdraw(amount){
        this.balance -= amount
    }
}

const accounHolder1 = new GeneralCreateAccount('Sandhya', 32, 10000001, 250) 
const accounHolder2 = new GeneralCreateAccount('Surendra', 32, 10000002, 250) 

// console.log(accounHolder1)
// console.log(accounHolder2)

accounHolder1.deposit(2500)
accounHolder2.deposit(2000)
accounHolder1.withdraw(200)
accounHolder2.withdraw(200)

//==================================================================

class SavingsAccount extends GeneralCreateAccount{
    constructor(name, age, accountNumber, balance, accountType){
        super(name, age, accountNumber, balance)
        this.accountType = accountType
    }
    interest(){
        this.balance += this.balance * 7
    }
}

const savingAccount1 = new SavingsAccount('Sandhya', 32, 10000001, 250, "savings")
savingAccount1.deposit(5000)
savingAccount1.interest()

console.log(savingAccount1)

//==================================================================

class CurrentAccount extends SavingsAccount{
    constructor(name, age, accountNumber, balance, accountType, businessName){
        super(name, age, accountNumber, balance, accountType) 
        this.businessName = businessName  
    }
}


const currentAccount1 = new CurrentAccount('Sandhya', 32, 10000001, 250, "savings", 'Sandhya Enterprises')

currentAccount1.deposit(651611)
currentAccount1.interest()

console.log(currentAccount1)

/*  
    extends keyword.
    The extends keyword is used to create a child class of another class (parent). The child class inherits all the methods from another class. Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.

    super() 
    Description. The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

    if we don't use super constructor Error Occurs. 
    ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor. 
*/