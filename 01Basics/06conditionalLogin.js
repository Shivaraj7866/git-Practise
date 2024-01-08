//allow user to access if he is logged in with one of these :

    //from google
    //from email
    //from facebook

let google=false;
let email=true;
let facebook = true;

// if(google){
//     console.log('logged in from google')
//     if(email) {
//         console.log('logged in from email')
//         if(facebook) console.log('logged in from facebook') 

//     }
// } 
// else console.log('you are not allowed to use this course')

if(google || email || facebook){
    console.log('you are successfully logged in ')
}
else console.log('you are not allowed to use this course')