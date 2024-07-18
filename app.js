
let btn = document.querySelector("button");
console.dir(btn);
/*btn.onclick = function(){
    console.log("Button was clicked");
    
};*/
btn.onclick = sayHello();
 function sayHello(){
    alert("Message is say hello");
 }