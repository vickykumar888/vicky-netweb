
const text =function(sentence){
    let str=sentence.split(" ");
    for (let i=0;i<str.length;i++){
        str[i]=str[i][0].toUpperCase()+str[i].substring(1);
    }
    return str.join(" ")
}
console.log(text("this is my first paragraph"))