function sumAll(a){
    let sum = 0;
    for(let i = 0; i < a; i++){
        sum += i;    
    }

    return sum;
}

const addMemoized = (fun) =>{
    let cache = {};

    return function(...args){
        let n = args[0];

        if(n in cache){
            console.log("Fetching From An Cache: ",cache);
            return cache[n]
        }
        else{
            let res = fun(n);
            cache[n] = res;
            console.log("Fetch from Direct First: ")
            return res;
        }
    }
}

console.time();
const optimized = addMemoized(sumAll);
console.log(optimized(10));
console.timeEnd();

console.time();
console.log(optimized(10));
console.timeEnd();