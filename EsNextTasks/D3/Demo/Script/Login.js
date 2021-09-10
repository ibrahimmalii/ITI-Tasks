function ValidateEmail(email){
    let EmailRegex = /^[a-zA-Z0-9\.]{1,}\@[a-zA-Z0-9]{2,}\.[a-zA-Z]{2,}$/gm;
    //debugger;
    if(!EmailRegex.test(email)){
        var EmailError = new Error("Email Not Valid");
        throw EmailError;
    }
    return true;
}

function ValidatePassword(password){
    let PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/gm;
    if(!PasswordRegex.test(password)){
        var PasswordError = new Error("Password Must be at least 8 Chars Containing Letters, Capital letters, Digits and Special Characters");
        throw PasswordError;
    }
    return true;
}

document.getElementById("Email").onblur = function(){
    //debugger;
    try{
        let valid = ValidateEmail(document.getElementById("Email").value);
        if(valid){
            document.getElementById("Email").classList.remove("is-invalid");
            document.querySelector("#Email+div").innerText = "";
        }
    }catch(e){
        document.getElementById("Email").classList.add("is-invalid");
        document.getElementById("Email").focus();
        document.querySelector("#Email+div").innerText = e.message;
    }  

    if(CheckValidAll())
        document.getElementById("submit").disabled = false;
}

document.getElementById("Password").onblur = function(){
    //debugger;
    try{
        let valid = ValidatePassword(document.getElementById("Password").value);
        if(valid){
            document.getElementById("Password").classList.remove("is-invalid");
            document.querySelector("#Password+div").innerText = "";
        }
    }catch(e){
        document.getElementById("Password").classList.add("is-invalid");
        document.getElementById("Password").focus();
        document.querySelector("#Password+div").innerText = e.message;
    } 
    
    if(CheckValidAll())
        document.getElementById("submit").disabled = false;
}

function CheckValidAll(){
    for(errorMessage of document.querySelectorAll(".invalid-feedback")){
        if(errorMessage.innerText != "")
            return false;
    }
    return true;
}

function LoginForm(e){
    e.preventDefault();
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;
    var username = "";
    fetch("http://127.0.0.1:5500/Data/Users.json")
    .then(res=>res.json())
    .then(json=>{
        for(item of json){
            if(item.email == email && item.password == password){
                username = item.username;
                break;
            }    
        }
        if(username != ""){
            location.assign(`http://127.0.0.1:5500/Home.html?username=${username}`);
        }
        else{
            alert("user not found");
        }
    })
}

if(document.cookie){
    location.replace("http://127.0.0.1:5500/Home.html")
}