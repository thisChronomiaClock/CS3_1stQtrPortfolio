let stringing = "";


for (let i = 5; i >= 0; i--){
    for (let j = i; j > 0; j--){
        string += " ";
    }
    for (let k = 5 - i; k > 0; k--){
        string += "*";
    }
    string += "\n";
}
   

console.log(stringing);