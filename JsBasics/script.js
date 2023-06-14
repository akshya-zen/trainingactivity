4 + 3;

if(4+3 == 7)
{
    // alert("Hey cool!");
    console.log("hello")
}
//loops
var Firstname = "Akshya";
var LastName = "Bhaskar"
// if(Firstname === "AK")
// {
//     alert("Hey Hi Ak!");
// } 
// else if(Firstname === "Akshya")
// {
//     alert("Hi Akshya");
// } 
// else
// {
//     alert("Who's this?");
// }

//logical operator
// if((Firstname === "AK") || (Firstname === "Akshya")){
//     alert("Hi Ak or Akshya")
// }

//&& and
// if((Firstname ==="Akshya") && LastName === "Bhaskar")
// {
//     alert("Hey Hi Akshya Bhaskar")
// }

// var age = prompt("What is your age?");

// if (Number(age) < 18) {
// 	alert("Under age to drive");
// } else if (Number(age) > 18) {
// 	alert("Happy riding");
// } else if (Number(age) === 18) {
// 	alert("Happy first ride");
// }

function FirstFunction(){
    console.log("FirstFunction");
}
FirstFunction();

// function square(number) {
//     //console.log(number * number);
//     return number * number;
//   }
//  square(3);
//  square(9);

//array

var list= ["tiger","cat","dog"];
console.log(list[1]);

//
var mixedList = ["animal", 3, undefined];

console.log(mixedList);

//
var list =[
    ["tiger","cat","dog"]
]; 
console.log(list[0][2]); //will print dog
//object
var user ={
    name : "AK",
    city : "chennai",
    state : function(){console.log("TN");} //func inside obj -> state is a method of user
}
user.Favfood = "Greens";
user.state();

//foreach

