function cal(a,b,c,...other){
    console.log(other);
    let sum = a + b + c;
    return sum += other;
}

const parameters = cal(1,2,3,4,5);

console.log(parameters)