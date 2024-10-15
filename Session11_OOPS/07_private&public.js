/*
    Public and Private properties inside classes - 

    to make any field or property private just start property name with # 
    for example -
    class User {
        name 
        #age    // this property will be private
    } 

    User.name   //Accessible
    User.#age   //Not Accessible
*/

class GeneralCreateAccount{
    #name
    #accountNumber  // private kar diya | agr constructor ki kisi property ko private karna hai to use sabse pehle class ke andar define karna hota h with # 

    static changeAccountNumber = 1000000
    static config = 'kanandandianda'
    static user // isme agar static keyword nahi lagayenge to ye object m store ho jayega

    constructor(name, age, balance){
        this.#name = name         
        this.age = age         
        this.#accountNumber = GeneralCreateAccount.changeAccountNumber += 1         
        this.balance = balance         
    }

    deposit(amount){
        this.balance += amount
    }
    
    withdraw(amount){
        this.balance -= amount
    }

    static greet(){
        console.log('Hello Moto...')
    }

    static {    // to set first value of static keywords or static methods 
        this.user = 5
    }
}

//access static values - 
console.log(GeneralCreateAccount.changeAccountNumber)
console.log(GeneralCreateAccount.config)
// accounHolder1.greet()    // we can't access it

GeneralCreateAccount.greet()
console.log(GeneralCreateAccount.user)

// create objects using class-
const accounHolder1 = new GeneralCreateAccount('Sandhya', 32, 250) 
const accounHolder2 = new GeneralCreateAccount('Surendra', 32, 250)
const accounHolder3 = new GeneralCreateAccount('Surendra', 32, 250) 

// console.log(accounHolder1.#accountNumber)

console.log(accounHolder1)
console.log(accounHolder2)
console.log(accounHolder3)

accounHolder1.deposit(2500)
accounHolder2.deposit(2000)
accounHolder1.withdraw(200)
accounHolder2.withdraw(200)

//==================================================================

class SavingsAccount extends GeneralCreateAccount{
    constructor(name, age, balance, accountType){
        super(name, age, balance)
        this.accountType = accountType
    }
    interest(){
        console.log('Savings Interest')
        this.balance += this.balance * 7
    }
}

const savingAccount1 = new SavingsAccount('Sandhya', 32, 250, "savings")
savingAccount1.deposit(5000)

console.log(savingAccount1)
savingAccount1.interest()

//==================================================================

class CurrentAccount extends SavingsAccount{
    constructor(name, age, balance, accountType, businessName){
        super(name, age, balance, accountType) 
        this.businessName = businessName  
    }

    // interest(){
    //     console.log('Current Interest')
    //     this.balance += this.balance * 14
    // }
    // NOTE:ye vali interest method apne parent ki interest method ko override kar lega 

}


const currentAccount1 = new CurrentAccount('Sandhya', 32, 250, "savings", 'Sandhya Enterprises')

currentAccount1.deposit(651611)

console.log(currentAccount1)
currentAccount1.interest()

/*  
    extends keyword.
    The extends keyword is used to create a child class of another class (parent). The child class inherits all the methods from another class. Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.

    super() 
    Description. The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
*/