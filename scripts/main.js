
//variables
const words=["casa", "perro", "gato", "elefante"];
const word=words[Math.floor(Math.random()*words.length)];
let word_underscores=word.replace(/./g,"_ ");
const full_year=new Date().getFullYear();


//funciones
const replaceAt=(word_underscores,index,letter)=>{
     return word_underscores.substring(0, index) + letter + word_underscores.substring(index+letter.length);
}
const fullYearCopyright=()=>{
    document.querySelector("#copyright").innerHTML+=full_year;
}

//eventos
window.onload = ()=>{
    fullYearCopyright();
  }
document.querySelector("#evaluar").addEventListener("click",()=>{
    const letter=document.querySelector("#letter").value;
    for (const i in word) {
        if(letter===word[i]){
            word_underscores=replaceAt(word_underscores,i*2,letter);
        }
    }

})
