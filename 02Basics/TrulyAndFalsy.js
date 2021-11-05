// Falsy Values 
// undefined
// null
// 0
// NaN

var user="2";
// if(user==2)  if we use 2 equal sign its printed
// {
//     console.log("Condition is true");
// }

if (user==2) { //For strict checking its not a string so condition becomes false hence its not being printed
    //when we use double == it doesnt recognises th data type sp use ===.
    console.log("Condition is true");
}
console.log("2"+2);
console.log(2+2);
