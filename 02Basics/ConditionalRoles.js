// Create an application with following roles:
// admin- get full access
// subadmin- get access to create/delete courses
// testprep- gets access to create/delete tests
// user- get acccess to consume content

var user="testprep";

switch(user){
    case "admin":
        console.log("You will get full access");
        break;
    case "subadmin":
        console.log("gets access to create/delete courses"); 
        break;
    case "testprep":
        console.log("gets access to create/delete tests");
        break;
    case "user":
        console.log("gets access to consume content");
        break;
    default:
        console.log("Trial Use");   
}