const map = new Map();
map.set('foo' , 1);
map.set('bar' , 2);

//1- Array from 
// console.log(map);
// console.log(Array.from(map));


//2- define new array => array of 
// let arr = Array.of(1,2,3,4,5,6);
// console.log(arr);


//3- copy within 
// let arr = [0, 2,5,6,7,8,9,10,11];
// console.log(arr.copyWithin(3,0));


//4- fill()
// let arr = [0, 2,5,6,7,8,9,10,11];
// console.log(arr.fill('foo' , 3));


//5- find and findIndex 
// let arr = [0, 2,5,6,7,8,9,10,11];
// console.log(arr.find(x=>x==5));
// console.log(arr.findIndex(x=>x==5));


//6- set 
// let arr = [0, 2,5,2,7,2,0,7,2];
// let newArr = new Set(arr);
// console.log(newArr);


//7- iterator ==> iterate step by step
// let strArr = ['a' , 'b' , 'c'];
// let iterator = strArr.entries();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


//8- yield != return  ===> Generators
// function* myGenerator()
// {
//     let x = yield 1;
//     let y = yield 2;
//     let z = yield 3;
// };

// let gen = myGenerator();
// console.log(gen);
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());


let delay = duration => 
    new Promise((resolve , reject)=>{
        setTimeout(() => {
            console.log('inside promise');
            resolve();
        }, duration);
    });

function* myGenerator()
{
    let first = yield delay(1000);
    let second = yield delay(5000);
};

let gen = myGenerator();
console.log(gen.next());
console.log(gen.next());



