const acc = document.getElementsByClassName("menu-item__text");

for(i=0;i<acc.length;i++){
      acc[i].addEventListener("click",() =>{
            let target = event.target.parentElement.parentElement.childNodes;
            /*change between + and - when collapsed or expanded*/
            for(i of target) {
                  if(i.className ==="menu-item") {
                        let child = i.childNodes;
                        for (j of child) {
                              if((j.className === "menu-item__text button" && j.getAttribute("data-button") === "+")) {
                                    j.innerHTML = "-";
                                    j.setAttribute("data-button", "-");
                                    
                              }
                              else if (j.className === "menu-item__text button" && j.getAttribute("data-button") === "-") {
                                    j.innerHTML = "+";
                                    j.setAttribute("data-button", "+");
                              }

                        }
                        
                  }
                  
            }
            
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
  
}


/*polylines styling, that is not possible in CSS*/
let poly = document.getElementsByClassName("check__polyline");

for (i of poly){
      i.setAttribute("points", "20 6 9 17 4 12");
     
}


