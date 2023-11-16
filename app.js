let password = document.getElementById("password");
let btn = document.getElementById("btn");

btn.onclick = function(){
    if (password.type == "password"){
        password.type = "text"
        btn.innerText = "Hide"
    }else{
        password.type = "password"
        btn.innerText = "show"
    }
}