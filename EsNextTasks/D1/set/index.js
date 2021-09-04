let stdName = new Set();
stdName.add('ibrahim');
stdName.add('Ali');
stdName.add('Mohamed');
stdName.add('ibrahim');

// console.log(stdName);

// Using for of
// for (i of stdName){
//     console.log(i);
// }

//Using spread 
console.log(...stdName);