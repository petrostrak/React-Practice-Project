class Person{
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return `Hi! my name is ${this.name} and I'm ${this.age} years old!`;
    }

    getDescription(){
        return `${this.name} is ${this.age}`;
    }
}

class Student extends Person{
    constructor(name, age, major = 'undecided'){
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();
        if(this.major){
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting(){
        let isHomeLocation = super.getGreeting();
        if(this.homeLocation){
            isHomeLocation += ` I'm visiting from Athens, Greece!`
        }
        return isHomeLocation;

    }
}

const me = new Student('Petros', 34, 'Computer Science');
console.log(me.hasMajor())
console.log(me.getDescription())

const other = new Student();
console.log(other)

const petros = new Traveler('Petran', 34, 'Athens');
console.log(petros.getGreeting())