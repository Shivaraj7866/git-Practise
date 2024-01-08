//logical conditional for purchase

let isLoggedIn=true;
let isEmailVerified=true;
let cardInfo=true;

// if(isLoggedIn){
//     console.log("Logged in successfully")
//     if(isEmailVerified){
//         console.log("email verified successfully")
//         if(cardInfo){
//             console.log("you can make a purchase")
//         }
//     }
// }

if(isLoggedIn && isEmailVerified && cardInfo){
    console.log("user can make a purchase")
}else{
    console.log("you cannot make purchase")
}