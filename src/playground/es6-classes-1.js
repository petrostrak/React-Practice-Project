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

const me = new Person('Petros', 34);
console.log(me.getGreeting())
const other = new Person();
console.log(other)