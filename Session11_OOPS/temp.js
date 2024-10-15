// class MyClass{
//     static count = 0
//     static myName = 'Surendra'
//     #adhaar

//     constructor(name){
//         console.log('mai to apne aap chalunga')
//         // this.name = 'John';
//         this.name = name;
//         this.age = 26;
//         MyClass.count += 1;
//         this.#adhaar = '56696161551'
//     }

//     static greet(){
//         console.log('Hii Sandhya')
//     }
// }


// const instance1 = new MyClass('surendra')
// const instance2 = new MyClass('surendra')
// const instance3 = new MyClass('surendra')
// const instance4 = new MyClass('surendra')
// console.log(instance1)
// console.log(instance2)
// console.log(instance3)
// console.log(instance4)

// MyClass.greet()
// console.log(MyClass.count)
// // instance.greet()


// // console.log(instance1.#adhaar)

//========================================================

//single level inheritance - 
// Class A(Parent,Base,Super) ==> Class B(Child,Derived,Subclass)


//NOTE: agar parent class m constructor hai aur child class m nahi hai to super() method ko call karne ki jarurat nahi hoti. super() sirf constructor k andar hi use hoti hai.

class Parent{
    constructor(){
        this.name = 'Surendra'
        console.log('Parent Class')
    }

    greet(){

        console.log('Hii Sandhya')
    }
}

class Child extends Parent{
    constructor(){
        super()
        this.age = 26
        console.log('Child Class')
    }
}

// class Child1 extends Parent{

// }

// class Child2 extends Parent{

// }


const parentInstance = new Parent()

const childInstance = new Child()

console.log(parentInstance)
console.log(childInstance)

//====================================================

// Multilevel Inheritance - 
// Class A => Class B => Class C => Class D

//====================================================

//Multiple Inheritance - Javascript mai support nahi karta
            // Class A   Class B 
                
            //     Class C     

//====================================================

// Hierarchical Inheritance

        //             Class A 
            
        //     Class B           Class C
            
        // Class D Class E   Class F Class G

//====================================================

// 5.  Hybrid Inheritance:Combination of any two Inheritance (Multiple and Hierarchical).
//     It is not supported in Javascript only support in C++ and Python

//             Class A   Class B
            
//                 Class C
        
//             Class D   Class E


//====================================================

/*
    The instanceof operator in JavaScript is used to check the type of an object at run time. It returns a boolean value if true then it indicates that the object is an instance of a particular class and if false then it is not. 
*/

class A {
    constructor(){
        this.a = 'a'
    }
}

class B {
    constructor(){
        this.b = 'b'
    }
}

class C {
    constructor(){
        this.c = 'c'
    }
}

const instanceA = new A()
const instanceB = new B()
const instanceC = new C()

console.log(instanceB instanceof B) //True
console.log(instanceC instanceof B) //False