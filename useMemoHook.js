// create a react js useMemo hook functionality working same in vanilla javascript 

function dataFun(arr) {
    return arr.map(item => item);
}

const useMemo = (dataFun) => {
    let cache = {};
    return function(...args) {
        let n = args.JSON.stringify

        if (n in cache[n]) {
            return cache[n];
        }
        else {
            let res = n;
            cache[n] = res;

            return res;
        }
    }
}

const arr = [
    {
        id: 1,
        name: "umesh",
        salary: 500000,
        location: "hyedrabad"
    },

    {
        id: 2,
        name: "vihaan",
        salary: 100000,
        location: "Mumbai"
    },

    {
        id: 3,
        name: "urvi",
        salary: 1500000,
        location: "delhi"
    },

    {
        id: 4,
        name: "Scala",
        salary: 3000000,
        location: "Silicon Valley, London"
    },

    {
        id: 5,
        name: "Stevian Martin",
        salary: 900000,
        location: "New York"
    },

    {
        id: 6,
        name: "Pranita",
        salary: 1500000,
        location: "Pune"
    }
];


const memo = useMemo(dataFun);

console.time();
console.log(memo(arr.id))
console.timeEnd();