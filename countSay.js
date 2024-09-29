function countSay(n){
    let say = '1';

    while(n>1){
        let count = 0;
        let next = ' ';

        for(let i = 0; i <= say.length; i++){

            console.log(`say[i] = ${say[i]}, i = ${i}`)

            if(i ===  say.length || (i > 0 && say[i] !== say[i-1])){
                next += count + say[i - 1];

                console.log("I am Next: ",next);

                count = 0;
            }

            count ++;

            console.log("I am Count: ", count);
        }

        say = next;

        console.log("Say: ",say)

        n--;

    }

    return say;
}

const n = 1;

console.log(countSay(n))