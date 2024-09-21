// 

function valid(s,t){
    const srt = s.split('').sort().join("");
    const srtt = t.split('').sort().join("");

    if(srt === srtt){
        return true;
    }
    
    return false;    
}

const s = "rat";
const t = "car"; 

console.log(valid(s,t));


