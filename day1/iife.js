let f = function print(name){
    return function(){
        console.log(name);
    }
}

let func = f('test'); 
func();// output test
f('test')(); // output test