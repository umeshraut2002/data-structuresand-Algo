// 4321 = 1234

function intRev(num){
    const rev = num.toString().split('').reverse().join("");
    return rev;
}

const num = 1234;

console.log(intRev(num));
