/* Create an application with following roles:
 admin- get full access
 subadmin- get access to create/delete courses
 testprep- gets access to create/delete tests
 user- get acccess to consume content
 other-trial user

 Input: getUserRole(name,roll)
 */

 var getUserRole= function (name,role){ // Another way to declare function

    switch (role) {
        case "admin":
            return `${name} is admin with all access.`;
          
        case "subadmin":
            return `${name} is sub-admin with all access for courses`;
         
        case "test-prep":
            return `${name} is admin with all access to tests.`;
         
        case "user":
            return `${name} is with all access to consume content`;
            
        default:
            return  `${name} is trial user.`;
      
    }
    }
console.log(getUserRole("Aryan", "admin"));
var getRole= getUserRole("Sam","user");
console.log(getRole);
 