var database = [
    {
        userName : "Akshya",
        password : "Password@12"
    }
];
var newsfeed = [
    {
        userName : "Sri",
        timeline : "Hey i am Sri!"
    },
    {
        userName : "Bala",
        timeline : "Hey, Bala here"
    }
];

var userNamePrompt = prompt("What's ur name?");
var passwordPrompt = prompt("ur pwd?");

function signIn(user , pass)
{
    if(user === database[0].userName && pass === database[0].password){
        console.log(newsfeed);
    }else 
    {
        console.log("You have entered wrong credentials")
    }
}
signIn(userNamePrompt,passwordPrompt);
