// pallindeome partitioning 
//  input = "aab"
//  output = [["a","a","b"],["aa","b"]];

function pallindromePartition(str){
    let newStr = str.split('');
    let arr = [];

    arr.push(newStr);

    for(let i = 0; i < newStr.lrngth; i++){
        if(str[i] === str[i+1]){
            arr.push(str[i])
        }

        arr.push(str[i])
    }

    return arr;

}

const str = "aab";

console.log(pallindromePartition(str));

