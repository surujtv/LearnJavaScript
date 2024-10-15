// learn In Object Constructor Functions--->

/*
    getters & setters----> these functions are used to manipulate data inside any Object

    Syntax-->
    get --> when we want to get manipulated data from object.
    set --> when we want to set data inside object after manipulation.
*/


let person = {
    name : 'Surendra Jatav',
    age : 23,
    get getNameUpperCase(){
        return this.name.toLocaleUpperCase();
    }
}

console.log(person.getNameUpperCase)    
console.log(person)
// no need to invoke this method we can access it same as object property example-> obj_name.property_name


let person1 = {
    name : 'Surendra jatav',
    age : 23,
    set setData(name){  // it take only single parameter
        this.name = name.toLocaleUpperCase()
    }
}

person1.setData = 'jitendra jatav'
console.log(person1)
