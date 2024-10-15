let person = {
    name : 'Sandhya Dwivedi',
    age : 25,
    isGraduate : true
}

function personDetails (obj) {
    console.log('Name : ', obj.name)
    console.log('Age : ', obj.age)
    console.log('isGraduate : ', obj.isGraduate)
}

//with de-structuring - 

function personDetails1 ({name, age, isGraduate}) {
    console.log('Name : ', name)
    console.log('Age : ', age)
    console.log('isGraduate : ', isGraduate)
}

personDetails(person)
personDetails1(person)
