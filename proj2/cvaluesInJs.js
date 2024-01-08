// let red=document.querySelector(".red")
// let blue=document.querySelector(".blue")
// let violet=document.querySelector(".violet")
// let yellow=document.querySelector(".yellow")
// let green=document.querySelector(".green")

// const center=document.querySelector(".center")

// let getBgColor=(selectedElement)=>{
//     return window.getComputedStyle(selectedElement).backgroundColor ;
// }

// // var Color=getBgColor(yellow)

// // yellow.addEventListener("mouseenter",()=>{
// //     center.style.background = Color ;
// // })

// var magicColor= (element,Color)=>{
//     return element.addEventListener("mouseenter",()=>{
//         center.style.background = Color ;
//     })
// }

// magicColor(red,getBgColor(red))
// magicColor(yellow,getBgColor(yellow))
// magicColor(green,getBgColor(green))
// magicColor(violet,getBgColor(violet))
// magicColor(blue,getBgColor(blue))

var red = document.querySelector(".red")
var blue = document.querySelector(".blue")
var yellow = document.querySelector(".yellow")
var violet = document.querySelector(".violet")
var green = document.querySelector(".green")

const center =document.querySelector(".center")

function getBgColor(selectedElement){
    return window.getComputedStyle(selectedElement).backgroundColor ;
}

let magicColor=(element,color)=>{
    return element.addEventListener("mouseenter",()=>{
        center.style.background = color ;
    })
}

magicColor(red,getBgColor(red)) ;
magicColor(blue,getBgColor(blue)) ;
magicColor(violet,getBgColor(violet)) ;
magicColor(green,getBgColor(green)) ;
magicColor(yellow,getBgColor(yellow)) ;