const sketchPad= document.querySelector(".container")

let size=9;
//  size =prompt("Enter the number of rows and columns");


let boxSize= 100/size;
for(i=0;i<size;i++){
    for(j=0;j<size;j++){
        const box = document.createElement("div");
        box.setAttribute("class","gridBox")
        sketchPad.appendChild(box);
        const boxSide = 100/size;
        
        box.setAttribute("style", `flex-basis: ${boxSide}%; padding-top: ${boxSide}%;`);
        box.addEventListener("mousedown",()=>{
            box.classList.add("pinkColor")
        })

    }
}