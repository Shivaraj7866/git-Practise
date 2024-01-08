//create an application with an following roles :

    //admin: gets full access;
    //subadmin: gets access to create/delete the courses;
    //testPrep : gets access to create/delete the tests;
    //user : gets access to consume the content;

let user = 'testPrep';

switch(user){
    case 'admin' : console.log('gets full access')
    break ;
    case 'subadmin' : console.log('gets access to create/delete the courses');
    break ;
    case 'testPrep' : console.log('gets access to create/delete the tests');
    break ;
    case 'user' : console.log('gets access to consume the content');
    break ;
    default : console.log('trial user')
}