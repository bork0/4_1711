// task #1

let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development",
    difficulty: "advanced",
    feedback: "good"
};

function counterOfProperties(obj) {
    return Object.keys(obj).length;
}

// task #2

let arrayOfKeys = [];
let arrayOfValues = [];

function objectToArray(obj) {

    arrayOfValues = new Array(Object.values(obj));
    arrayOfKeys = new Array(Object.keys(obj))

    console.log(arrayOfValues.flat());
    console.log(arrayOfKeys.flat());
};

// task #3

class Worker {
    #experience = 1.2;
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName,
            this.dayRate = dayRate,
            this.workingDays = workingDays
    }
    set experience(value){
        this.#experience=value
    }
    get experience(){
       return this.#experience
    }
    showSalary() {
        return this.dayRate * this.workingDays;
    }
    showSalaryWithExerience() {
        return this.#experience * this.dayRate * this.workingDays;
    }
}

let worker1 = new Worker('Abu Alladin', 750, 20);
console.log('Salary with experience coefficient is ' + worker1.showSalaryWithExerience());
worker1.experience = 1.5;
console.log(worker1.experience);
console.log('Salary with new experience coefficient is ' + worker1.showSalaryWithExerience());

let worker2 = new Worker('Steve Rogers', 1200, 31);
worker2.experience = 3;
let worker3 = new Worker('Elon Musk', 200000, 31);
worker3.experience = 5;
let worker4 = new Worker('John, The Trainee', 400, 20);
worker4.experience = 1;
let worker5 = new Worker('John Smith', 400, 25);

let arrayOfWorkers = [worker1, worker2,worker3,worker4,worker5];
arrayOfWorkers.sort((a,b) => a.experience-b.experience);

for (let workerIndex = 0; workerIndex<arrayOfWorkers.length; workerIndex++) {
    console.log(arrayOfWorkers[workerIndex].fullName+`'s salary is ` + arrayOfWorkers[workerIndex].showSalaryWithExerience() + ' and his experience coefficient is ' + arrayOfWorkers[workerIndex].experience);
}

// task #4

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName() {
        console.log('Full name is: ' + this.name + ' ' + this.surname);
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    showFullName(middlename) {
        console.log('Full name is: ' + this.name + ' ' + this.surname + ' ' + middlename);
    }
    showCourse() {
        console.log(`Current course: ${2019-this.year + 1}`);
    }
}

let student1 = new Student('Borys', 'Babelashvili', 2015); // to see whether it works

// task #5 

// let parentClass = class GeometricFigures {
//     constructor(){}
//     getArea() {

//     }
//     toString() {
//         return GeometricFigures.name;
//     }
// }

class GeometricFigure {
    getArea() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    constructor(sideOne, height) {
        super();
        this.sideOne = sideOne;
        this.height = height;
    }
    getArea() {
        return (this.sideOne*this.height)/2;
    }
}

let triangle = new Triangle(15,20,25); // to see whether it works

class Square extends GeometricFigure {
    constructor(sideOne) {
        super();
        this.sideOne = sideOne;
    }
    getArea() {
        return this.sideOne**2;
    }
}

let square = new Square(10); // to see whether it works

class Circle extends GeometricFigure {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return (this.radius**2)*3.14;
    }
}

let circle = new Circle(5); // to see whether it works

let figures = [triangle, square, circle]; // to see whether it works


function handleFigures(figures) {
    let areasArray = [];
    for (let i = 0; i<figures.length; i++) {
        let parentClass = Object.getPrototypeOf(figures[i].constructor).name;
        let className = figures[i].toString();
        let area = figures[i].getArea();
        console.log(parentClass + ': ' + className + ' - ' + area);
        areasArray.push(area);
    }
    console.log('Total area: ' + areasArray.reduce((acc,currentValue, currentIndex, array)=>acc+currentValue));
}