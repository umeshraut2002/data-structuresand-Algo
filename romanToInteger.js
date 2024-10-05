symbols = {
    "I" : 1,
    "V" : 5,
    "X" : 10,
    "L" : 50,
    "C" : 100,
    "D" : 500,
    "M" : 1000
}

function r_int(rom){
    let value = 0;
    for(let i = 0; i < rom.length; i += 1){
        symbols[rom[i]] < symbols[rom[i+1]] ? value -= symbols[rom[i]] : value += symbols[rom[i]];
    }

    return value;
}

const rom = "CI";


console.log(r_int(rom));
