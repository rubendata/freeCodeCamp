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