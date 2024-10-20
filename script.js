// let username;
// // username = window.prompt("Enter Your Username")


// console.log(username);
let username;

document.getElementById("submit").onclick = function(){
    username = document.getElementById("text").value;
    document.getElementById("myh1").textContent= `Hello, ${username}!` 
    

}