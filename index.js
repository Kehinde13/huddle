const input = document.querySelector("input") ;
const form = document.querySelector("form");
const error = document.querySelector(".error");
const btn = document.querySelector(".error");


form.addEventListener("submit", validate)
btn.addEventListener("click", validate);


function validate(e) {
    e.preventDefault()
    console.log('validate worked');

    let email = input.value

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
      error.style.display = "none"
    } else{
       error.style.display = "block"
    }
}
