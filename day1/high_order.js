function calculate(x, y, cb){
    let sum = x + y;
    cb(sum)
}

calculate(1,2, function(sum){ console.log(`sum: ${sum}`);})