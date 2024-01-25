'use strict';
const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    const age = form.age.value;
    const fname = form.fname.value;
    sessionStorage.setItem("fname", fname);
    sessionStorage.setItem("age", age);
})