//variables
const words=["casa", "perro", "gato", "elefante","hueso","abeja","pulga","rinoceronte","paloma","herramienta","mosquito"];
const letter=document.querySelector("#letter");
const button_get_word=document.querySelector("#get_word");
const button_evaluate= document.querySelector("#evaluate");
const winner_msg= document.querySelector("#winner_msg");
const loser_msg= document.querySelector("#loser_msg");
const full_year=new Date().getFullYear();
const empty_input_msg=document.querySelector("#empty_input");
let word="";
let word_underscores=document.querySelector("#word_underscores");
let hang_img=document.querySelector("#hang_img");
let errors_count=1;
let wrong_letters=document.querySelector("#wrong_letters");
let copyright_year=document.querySelector("#copyright");

//funciones
const replaceAt=(word_underscores,index,letter)=>{
     return word_underscores.substring(0, index) + letter + word_underscores.substring(index+letter.length);
}

const fullYearCopyright=()=>{
    copyright_year.innerHTML+=full_year;
}
const getWord=()=>{   
    word=words[Math.floor(Math.random()*words.length)];
    word_underscores.innerHTML=word.replace(/./g,"_ "); 
    winner_msg.classList.add("visibility");    
    loser_msg.classList.add("visibility"); 
    hang_img.src="./images/1.png";
     
}

const finishGame=(loser,winner)=>{
    errors_count=1;
    wrong_letters.innerHTML="";
    word_underscores.innerHTML="";
    if(loser){
        loser_msg.classList.remove("visibility");
    }
    if(winner){
        winner_msg.classList.remove("visibility"); 
    }
    button_evaluate.disabled=true;   
}


//eventos
window.onload = ()=>{
    fullYearCopyright();
   
  }

button_get_word.addEventListener("click",()=>{
    getWord();
    button_evaluate.disabled=false;
})

button_evaluate.addEventListener("click",()=>{
     if(letter.value!==""){
        empty_input_msg.classList.add("visibility")
            let letter_found=false;
            for (const i in word) {
                if(letter.value.toLowerCase()===word[i]){
                    letter_found=true;
                    word_underscores.innerHTML=replaceAt(word_underscores.innerHTML,i*2,letter.value.toLowerCase());
                }
            }
            if(!letter_found){        
                if(errors_count<=7){
                    hang_img.src="./images/"+(errors_count+1)+".png";
                    wrong_letters.innerHTML+=letter.value.toLowerCase()+",";                         
                
                }  
                if(errors_count==7){
                    finishGame(true,false);
                }                  
                errors_count++;               
            }
            else{
                if(word_underscores.innerHTML.indexOf("_")<0){           
                    finishGame(false,true);         
                }
            }

            letter.value="";
     }
     else {
        empty_input_msg.classList.remove("visibility");
     }
})
