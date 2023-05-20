// function defined as method on a object has its context set as person object
const person = {
    name: 'Dev',
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person.greet(); // Output: Hello, my name is John