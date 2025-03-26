document.body.onload = function() {myFunction()};
function myFunction() {
    let person = prompt("What is your name, music lover?");
    if (person != null) {
        alert("Hello, " + person + ", and welcome to Note Less Traveled.");
    }
}