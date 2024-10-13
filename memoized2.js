// Write a program to add 2 numbers from the method and return using the memoized function and shows with and without memoized default time consumtion 

function twoSum(a,b) {
    let result = a + b;
    return result;
}

const memoized = (fun) => {
    let cache = {};
    return function(...arg){
        let n = JSON.stringify([arg]);

        if(n in cache){
            return cache[n];
        }
        else{
            let res = fun(...arg);
            cache[n] = res;
            return res;
        }
    }
}

const memo = memoized(twoSum);

console.time()
console.log(memo(10,20));
console.timeEnd();

// fetch time data from the cache reducing time 

console.time();
console.log(memo(10,20));
console.timeEnd();


// for the 25 and 33

console.time();
console.log(memo(25, 33));
console.timeEnd();