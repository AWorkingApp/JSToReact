let hw = () => { console.log("hello world"); }
hw();

function printName(name) { console.log(name); }

let mike = { 
    name: 'mike', 
    printName: () => { console.log(this.name); },
    print: () => { printName(this.name); },
    printFunc: function () { printName(this.name); }
}
mike.printName(); // undefined
mike.print(); // undefined
mike.printFunc(); // mike