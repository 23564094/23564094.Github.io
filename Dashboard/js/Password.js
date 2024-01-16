

function checkPswd() {
    let userId = "Demo";
    let confirmPassword = "Demo";
    let confirmId = document.querySelector(".id").value;
    let password = document.querySelector(".pw").value;

    if (password == confirmPassword && confirmId == userId) {
           document.querySelector("form").action ="index.html";
           console.log(password)

    }
    else{
        alert("please enter correct username/password");
    }
}