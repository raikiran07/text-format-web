'use-strict';
const displayResult = document.querySelector(".results");
const result = document.getElementById("result");
const capital = document.getElementById("capital");
const allCap = document.getElementById("allCap");
const removeNumber = document.getElementById("removeNumber");
const removeSpecial = document.getElementById("removeSpecial");
const submitBtn = document.getElementById("enter");
const userInput = document.getElementById("username");
const resetBtn = document.getElementById("reset");


function formatText(){
    
    
    let str = userInput.value;
    if(str != ""){

        if(capital.checked){
        
            str = str[0].toUpperCase() + str.slice(1).toLowerCase();
    
        }
        if(allCap.checked){
            
            const arrayStr = str.split(' ');
            for(let i=0;i<arrayStr.length;i++){
                arrayStr[i] = arrayStr[i][0].toUpperCase() + arrayStr[i].slice(1).toLowerCase();
            }
        
            str = arrayStr.join(" ");
            
            
        }
        if(removeNumber.checked){
            str = str.replace(/[0-9]/g,"");
        }
        if(removeSpecial.checked){
             str = str.replace(/[^a-zA-Z0-9 ]/g, "");
        }
    
        displayResult.style.display="block";
        result.innerHTML = str;
    

    }
   else{
       alert("enter a valid string!!");
   }

    // console.log(str);
}

function resetWindow(){
    location.reload();
}

submitBtn.addEventListener("click",formatText);
resetBtn.addEventListener("click",resetWindow);