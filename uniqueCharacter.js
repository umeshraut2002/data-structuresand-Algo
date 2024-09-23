function uniqueChar(str){

    for(let i = 0; i < str.length; i++){

        console.log("Loop: ", str[i], "::", i);
        

        let firstIndex = str.indexOf(str[i]);
        console.log("first: ",firstIndex);
        
        let lastIndex = str.lastIndexOf(str[i]);

        console.log("Last: ",lastIndex);
        

        if(firstIndex === lastIndex){
            return i;
        }
    }

    return -1;
    
}

const str = "loveleetcode";

console.log(uniqueChar(str));
