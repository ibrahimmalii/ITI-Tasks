console.clear();

var input = document.querySelector('#Answer');

var number = 0
function EnterNumber(num) {
    input.value += eval(num) ;
};


function EnterOperator(op) {
    input.value += op;
}


function EnterEqual(){
    input.value = eval(input.value);
}

function EnterClear(){
    input.value = '';
}

// Easy Way for floating and ceiling numbers //
console.log(22.6 | 0); //=> 22

console.log(22.6 | 1); //=> 23