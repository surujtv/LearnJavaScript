/*  
    THEORY ---->
    Object Constructor Function --->
    
    Definition -->
    
    A constructor function is a special kind of JavaScript function that is used to create objects.
    
    1) It has the same name as the object it creates, but with an initial capital letter (CamelCase).  
    For example: "Person" instead of "person".
    
    2) The code inside a constructor function is executed when we use the new keyword before calling this function. This means that every time you call a constructor function and use the new keyword, a new empty object will be created automatically for you by JavaScript.

    Syntax -->
    function Person(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    let person1 = new Person("Surendra", 23, "Male");  
    
    #we can create multiple objects by calling function using new keyword.

    Output -->
    person1 = {
        name : "Surendra",
        age : 23,
        gender : "Male"
    }
*/

//  PRACTICAL --->

