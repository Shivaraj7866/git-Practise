let counter=document.querySelector(".counter")
let followers=document.querySelector(".followers")

let count=1;

setInterval(()=>{
    if(count < 1000){
        count++;
        counter.innerHTML=count;
    }
},1)

setTimeout(()=>{
    followers.innerHTML="Hooray...,Followers in Instagram reached 1000 !"
    
},5000)