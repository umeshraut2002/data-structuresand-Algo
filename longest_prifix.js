// longest prefix of the string 
// input : ["flower","flow","flight"]
// output : "fl"

function long_prefix(str){
    let prefix = str[0];
    console.log(prefix);

    for(let i = 1; i < str.length; i++){

        console.log("I am For Loop: ",str[i], i);
        

        while(str[i].indexOf(prefix) !== 0){
            console.log("I am While Loop: ",str[i],str[i].indexOf(prefix) !== 0);
            
            prefix = prefix.substring(0, prefix.length-1);

            console.log("Substring: ",prefix.substring(0, prefix.length-1));
            

            console.log("Inner Prefix: ",prefix);
            
        }
    }
    return prefix;
}

const str = ["flower","flow","flight"];

console.log(long_prefix(str));
