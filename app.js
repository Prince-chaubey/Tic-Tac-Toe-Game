let boxes=document.querySelectorAll(".box");
let resetbutton=document.querySelector(".reset");
let winningMessage=document.querySelector(".msg");
let winningDiv=document.querySelector(".wins");
let turnO=true;


let winningpatterns=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];

let finalwinner=(val)=>{
winningMessage.innerText=`Conratulations,Winner is ${val}`
winningDiv.classList.remove("wins");
}

let disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}


let enabledboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        winningMessage.innerText="";
        turnO=true;
        box.innerText="";
        box.style.backgroundColor="#fff";
    }
}

let showWinner=()=>{
    for(let winners of winningpatterns){
        let pos1=boxes[winners[0]].innerText;
        let pos2=boxes[winners[1]].innerText;
        let pos3=boxes[winners[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                finalwinner(pos1);
                disabledboxes();
            }
        }
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="X";
            box.style.backgroundColor="#ffffc2";
            turnO=false;
        }
        else{
            box.innerText="O";
            box.style.backgroundColor="#ffffc2";
            turnO=true;
        }
        box.disabled=true;
        showWinner();
        
    })
})


resetbutton.addEventListener("click",enabledboxes);
