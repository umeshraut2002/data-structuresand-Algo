function valid(arg){
    const isValid = arg.toString().split('');

    console.log(isValid);
    

    for(let i = 0; i < isValid.length; i++){
        if(isValid[i] === isValid[i+1]){
            return true;
        }
        else{
            return false;
        }
    }

}

const arg = "()[]{}";

console.log(valid(arg));
