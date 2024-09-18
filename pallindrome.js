// if the reverse string is euals to the string is called pallindrome 
// input : "cddc" // valid pallindrome

function pallindrome(str){
    let valid = str.toLowerCase().split('').reverse().join("").replace(/[ \{},:.@]/g, '');

    console.log(valid);
    

    // if(str === valid){
    //     return true;
    // }

    // else{
    //     return false;
    // }


    for(let i = 0; i < valid.length; i++){
        if(valid[i] === valid[valid.length-1]){
            return true;
        }
        else{
            return false;
        }
    }
}

let str = "A man, a plan, a canal: Panama";

console.log(pallindrome(str));