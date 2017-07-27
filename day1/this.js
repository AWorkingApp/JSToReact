let mike = {
    name: 'mike',
    printName: printName
}

let jim = {
    name: 'jim'
}

function printName(){
    console.log(this.name);
}

printName(); // output: undefined
mike.printName(); // output: mkie
// jim.printName(); // not a function

printName = printName.bind(jim); // bind printName with jim, you can only bind once
printName(); // output: jim

mike.printName(); // output: mike
console.log('---------')
let tom = {
    name: 'tom',
    printName: function (){ printName(); },
    print: function (){ this.printName(); } // error
};
tom.printName(); // tom is jim
tom.print(); // tom is jim

let james = {
    name: 'james',
    printName: function (){ 
        printName();// this gives us jim

        console.log(this.name); // this gives us james
    }
}
james.printName(); // james is jim!?

console.log('---------')
const paul = {
    name: 'paul',
    printName: function (){
       let f = () => console.log(this.name);
       f();
    }
}
paul.printName(); // paul is paul
