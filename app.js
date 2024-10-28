let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");

let turn0 = true;


const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];
boxes.forEach((box)=>{
      box.addEventListener("click",()=>{
        // console.log("box is clicked");
        if(turn0){
            box.innerText="0";
            turn0 = false;
            
        }
        else{
            box.innerText="x";
            turn0=true;
        }
        box.disabled = true;
        checkWinner();
      });
});
reset.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText=" ";
        box.disabled=false;
        box.style.backgroundColor="#ffffc7";
    });
});

const checkWinner = ()=>{
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        let a =  boxes[pattern[0]].innerText;
        let b = boxes[pattern[1]].innerText;
        let c = boxes[pattern[2]].innerText;
        if(a!="" && b!="" && c!=""){
            if(a===b && b===c){
            
                
                boxes[pattern[0]].style.backgroundColor="#236086";
                boxes[pattern[1]].style.backgroundColor="#236086";
                boxes[pattern[2]].style.backgroundColor="#236086";
                boxes.forEach((box)=>{
                    box.disabled=true;
                    boxes
                });
                 break;
            }
        }
    
        }
       
    }
