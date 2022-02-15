'use-strict';
const displayResult = document.querySelector(".results");
const result = document.getElementById("result");
const capital = document.getElementById("capital");
const allCap = document.getElementById("allCap");
const removeNumber = document.getElementById("removeNumber");
const removeSpecial = document.getElementById("removeSpecial");
const capitalNewSentence = document.getElementById("capital-new");
const upperCase = document.getElementById("uppercase");
const lowerCase = document.getElementById("lowercase");
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
        if(upperCase.checked){
            str = str.toUpperCase();
            console.log(str);
        }
        if(lowerCase.checked){
            str = str.toLowerCase();
            console.log(str);
        }
    
        if(removeNumber.checked){
            str = str.replace(/[0-9]/g,"");
        }
        if(removeSpecial.checked){
             str = str.replace(/[^a-zA-Z0-9 ]/g, "");
        }
        if(capitalNewSentence.checked){
            const strArr = str.split(" ");
            strArr[0] = strArr[0].replace(strArr[0][0],strArr[0][0].toUpperCase());
            for(let i=0;i<strArr.length;i++){
                    if(strArr[i].includes('.')&&i<strArr.length-1){
                        strArr[i+1] = strArr[i+1].replace(strArr[i+1][0],strArr[i+1][0].toUpperCase());

                        }
            str = strArr.join(" ");
                        }
            
        }

        
        displayResult.style.opacity="1";
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