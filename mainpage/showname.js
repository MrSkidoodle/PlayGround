// this alerts the user of something
/* this is a multi line comment
it works with multiple lines
like this! */
'use strict';

window.addEventListener("load", function() {
    if ("fname" in sessionStorage && "age" in sessionStorage) {
        const fname = sessionStorage.getItem("fname")
        const age = sessionStorage.getItem("age")
        document.getElementById("User").textContent=`${fname}, ${age} years old`    
    } else {
        this.window.location.href = "../loginpage/index.html"
    }
});