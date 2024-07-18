let inp= document.querySelector("input");
let btn= document.querySelector("button");
let ul= document.querySelector("ul");


btn.addEventListener("click",function(){
    let item= document.createElement("li");
    item.innerText=inp.value;
    let delBtn=document.createElement("button");
    delBtn.innerText = "Delete Task"
    delBtn.classList.add("Delete");
    item.appendChild(delBtn)
    
    ul.appendChild(item);
    inp.value=" ";
    
});

ul.addEventListener("click",function(event){
    
    if(event.target.nodeName=="BUTTON"){
        let Lisitem=event.target.parentElement;
        Lisitem.remove();
        console.log("Task was deleted");

    }
    
    
});




/*let delBtns = document.querySelectorAll(".Delete");
for(delBtn of delBtns){
    delBtn.addEventListener("click",function(){
        console.log("Task is deleted")
        let par=this.parentElement;
        console.log(par);
        par.remove();
    })
   
}*/