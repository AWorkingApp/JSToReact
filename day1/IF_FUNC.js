const True = (first) => (second) => first;
const False = (first) => (second) => second; 

const IF = (cond) => (first) => (second) => cond(first)(second)();

IF(True)
    (() => console.log('I am true'))
    (() => console.log('I am false'));

IF(False)
    (() => console.log('I am true'))
    (() => console.log('I am false'));

