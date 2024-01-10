// variable scope = where a variable is recognized
//                  and accessible (local vs golbal)

let x = 333; // global scope

localFunc1();

function localFunc1 (){
    let x = 111; // local scope
    console.log(x);
}

function localFunc2 (){
    let x = 222; // local scope
    console.log(x);
}