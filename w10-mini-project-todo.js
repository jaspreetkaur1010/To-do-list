let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");
btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    ul.appendChild(item);
    inp.value="";
    let items=document.querySelectorAll("li");
    for (itm of items){
        itm.addEventListener("click",function(){
            this.classList.add("strike");
        });
    }
})
