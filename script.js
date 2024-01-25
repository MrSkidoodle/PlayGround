// this alerts the user of something
/* this is a multi line comment
it works with multiple lines
like this! */
'use strict';
let FullName = prompt("What is your name");
let age = prompt("How old are you?")
let MakeAccount = confirm("Make an account?")
if (MakeAccount) {
    document.getElementById("User").textContent=`${FullName}, ${age} years old`;
}