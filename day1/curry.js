function add(x){
    return function (y) {
        return x+y;
    }
}

console.log(add(1)(2)); // output 3