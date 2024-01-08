
let courses=[
   
    {
        name:'MERN stack complete course',
        price:'5.2'
    },
    {
        name:'Javascript course',
        price:'2.1'
    },
    {
        name:'Python fullStack complete course',
        price:'2.9'
    },
    {
        name:'JavaFullStack complete course',
        price:'2.8'
    },
    {
        name:'Django course',
        price:'7.2'
    }
]

{/*<ul>
        <li class="list-gruop-item">JavaFullStack complete course
            <span class="float-end">Rs 299 only..</span>
        </li>
    </ul> */}

// function generatLists(){
//     let ul=document.querySelector(".list-group")
//     ul.innerHTML="" ;

//     courses.forEach(course => {

//         ul.appendChild(li)
//         let li=document.createElement("li")
//         li.classList.add("list-gruop-item","p-2","fs-5")

//         let name=document.createTextNode(course.name)
//         li.appendChild(name)

//         li.appendChild(span)
//         let span=document.createElement("span")
//         span.classList.add("float-end","p-2")
//         let price=document.createTextNode("Rs" + course.price + "only..")
//         span.appendChild(price)

        
//     })
// }

// window.addEventListener("load",generatLists)

// let btnElem=document.querySelector(".btn")

// btnElem.addEventListener("click",()=>{
//         courses.sort((a,b)=> a.price - b.price )
//         generatLists() ;
// })

function generateLIST(){

    let ul=document.querySelector(".list-group")
    ul.innerHTML=""

    courses.forEach( course => {

        let li=document.createElement("li")
        li.classList.add("list-gruop-item","p-2","fs-5")
        ul.appendChild(li)

        let name=document.createTextNode(course.name)
        li.appendChild(name)

        let span=document.createElement("span")
        span.classList.add("float-end","p-2","shadow","rounded-4")
        li.appendChild(span)
        let price=document.createTextNode("Rs" + course.price + "only..")
        span.appendChild(price)

    })
}

window.addEventListener("load",generateLIST)

let btnElem=document.querySelector(".btn")
console.log(btnElem)
let btnElem2=document.querySelector(".btn-outline-primary")
console.log(btnElem2)

btnElem.addEventListener("click",()=>{
    courses.sort((a,b)=> a.price - b.price)
    generateLIST() ;
})

btnElem2.addEventListener("click",()=>{
    courses.sort((a,b)=> b.price - a.price)
    generateLIST() ;
})


