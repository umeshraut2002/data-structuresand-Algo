// 4321 = 1234

function intRev(num){
    const rev = num.toString().split('').reverse().join("");
    // console.log(typeof(parseInt(rev) * Math.sign(num)));
    return parseInt(rev) * Math.sign(num);
    
}

const num = 1234;

console.log(intRev(num));
