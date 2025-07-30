const sketchPad= document.querySelector(".container")

let size=36;
  
const sizeBtn= document.querySelector(".gridSize")
sizeBtn.addEventListener("click",()=>{
    size =prompt("Enter the number of rows and columns you want between 1 and 100.");
    if (size>100|| size<1 || size==null){
        while(size>100||size<1){
        size = prompt("Enter a number between 1 and 100.")
    }}
    if(size==null){size=36}
    createSketchPad();
})

let boxSize= 100/size;

function createSketchPad(){
    sketchPad.innerHTML="";
for(let i=0;i<size;i++){
    for(let j=0;j<size;j++){
        createGridBox();
    }
}}

let currentMode= "pink";
function createGridBox(){
    const box = document.createElement("div");
        box.setAttribute("class","gridBox")
        sketchPad.appendChild(box);
        const boxSide = 100/size;
        box.setAttribute("style", `flex-basis: ${boxSide}%; padding-top: ${boxSide}%;`);
        box.style.opacity = 1;
        
    

        box.addEventListener("mouseover",()=>{
                
                if(currentMode=="multiColor"){
                    
                        const redValue= Math.floor(Math.random()*256);
                        const greenValue=Math.floor(Math.random()*256) ;
                        const blueValue=Math.floor(Math.random()*256) ;
                        box.style.backgroundColor=`rgb(${redValue},${greenValue},${blueValue})`;
                        box.style.opacity=1;
            }
                else if (currentMode=="sketch"){
                        
                        box.style.backgroundColor="black";
        
                        let currentOpacity= getComputedStyle(box).opacity;
                        if(currentOpacity==1){currentOpacity=0}
                        let newOpacity = parseFloat(currentOpacity)+0.1;
                        if(newOpacity>=1) newOpacity=0.99;
                        box.style.opacity=newOpacity;
                    
                }
                else if (currentMode=="pink"){
                    box.classList.add("pinkColor")
                }
                else if (currentMode=="erase")
                    box.style.backgroundColor="rgb(255,255,255)"
                

                    })

}

createSketchPad();

const resetBtn= document.querySelector(".reset");
resetBtn.addEventListener("click",()=>{
    createSketchPad()
    currentMode="pink";
});

const eraserBtn= document.querySelector(".eraser");
eraserBtn.addEventListener("click",()=>{
    currentMode="erase";
});

const multiColorBtn = document.querySelector(".multi");
multiColorBtn.addEventListener("click",()=>{
    currentMode="multiColor"
});

const sketchBtn = document.querySelector(".sketch");
sketchBtn.addEventListener("click",()=>{
    currentMode="sketch"
})



