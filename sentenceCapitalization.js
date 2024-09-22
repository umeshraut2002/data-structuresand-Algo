// const capital = (str) => {
//     return str.toLowerCase().split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
// }

// console.log(capital("hello world"));


function capital(str){
    return str.toLowerCase().split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
}

const str = "hello world";

console.log(capital(str));
