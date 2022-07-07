
//variables
const words=["casa", "perro", "gato", "elefante","hueso","abeja","pulga","rinoceronte","paloma","herramienta","mosquito"];
let word="";
let word_underscores="";
const full_year=new Date().getFullYear();
let errors_count=1;
let wrong_letters=[];

//funciones
const replaceAt=(word_underscores,index,letter)=>{
     return word_underscores.substring(0, index) + letter + word_underscores.substring(index+letter.length);
}

const fullYearCopyright=()=>{
    document.querySelector("#copyright").innerHTML+=full_year;
}
const getWord=()=>{   
    word=words[Math.floor(Math.random()*words.length)];
    word_underscores=word.replace(/./g,"_ "); 
    document.querySelector("#winner_msg").style.display="none";    
    document.querySelector("#loser_msg").style.display="none";
    document.querySelector("#hang_img").src="./images/1.png";
    putWord();
   
}
const putWord=()=>{
    document.querySelector("#word_underscores").innerHTML=word_underscores;
}
const finishGame=(loser_msg,winner_msg)=>{
    errors_count=1;
    wrong_letters=[];
    document.querySelector("#word_underscores").innerHTML="";
    document.querySelector("#loser_msg").style.display=loser_msg;
    document.querySelector("#winner_msg").style.display=winner_msg; 
    document.querySelector("#evaluate").disabled=true;
    putWrongLetters();
}
const putWrongLetters=()=>{
    document.querySelector("#wrong_letters").innerHTML=wrong_letters;
}

//eventos
window.onload = ()=>{
    fullYearCopyright();
   
  }

document.querySelector("#get_word").addEventListener("click",()=>{
    getWord();
    document.querySelector("#evaluate").disabled=false;
})

document.querySelector("#evaluate").addEventListener("click",()=>{
     const letter=document.querySelector("#letter").value;
     if(letter!==""){
        document.querySelector("#empty_input").style.display="none";
            let letter_found=false;
            for (const i in word) {
                if(letter===word[i]){
                    console.log("entre al si")
                    letter_found=true;
                    word_underscores=replaceAt(word_underscores,i*2,letter);
                    putWord();
                }
            }
            if(!letter_found){        
                if(errors_count<=7){
                    document.querySelector("#hang_img").src="./images/"+(errors_count+1)+".png";
                
                }  
                if(errors_count==7){
                finishGame("block","none");
                }      
            
                errors_count++;
                wrong_letters.push(letter+" ");
                putWrongLetters();
            }
            else{
                if(word_underscores.indexOf("_")<0){           
                    finishGame("none","block");         
                }
            }

            document.querySelector("#letter").value="";
     }
     else {
        document.querySelector("#empty_input").style.display="block";
     }
})
