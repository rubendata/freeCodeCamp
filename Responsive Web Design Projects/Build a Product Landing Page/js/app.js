const acc = document.getElementsByClassName("menu-item__text");

for(i=0;i<acc.length;i++){
      acc[i].addEventListener("click",() =>{
            let target = event.target.parentElement.parentElement.childNodes;
            for (i of target){
            
                  if(i.tagName && i.className.includes("carousel") ){
                        i.classList.toggle("display");
                  }
            }
            
      })
}

/*SVG styling, that is not possible in CSS*/

let svg = document.getElementsByClassName("check__svg");

for (i of svg){
      i.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      i.setAttribute("width", "24");
      i.setAttribute("height", "24");
}


/*polylines styling, that is not possible in CSS*/
let poly = document.getElementsByClassName("check__polyline");

for (i of poly){
      i.setAttribute("points", "20 6 9 17 4 12");
     
}


