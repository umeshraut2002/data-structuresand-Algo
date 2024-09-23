function valid(arg){
    let obj = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }

    let stack = []

    for(let char of arg){
        if(obj[char]){
            console.log(obj[char]);
            
            stack.push(char);
        }
        else if(obj[stack.pop()] !== char){
            console.log(obj[stack.pop()]);
           return false;
        }
    }

    return stack.length== 0;

}

const arg = "{}()[]{}"
console.log(valid(arg));
