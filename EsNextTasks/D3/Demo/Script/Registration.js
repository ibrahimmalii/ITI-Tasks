/* Regex - Error - If - Functions */
function ValidateName(name){
    let NameRegex = /^[a-zA-Z\s]{3,}$/g;
    if(!NameRegex.test(name)){
        var NameError = new Error("Name should be Characters only");
        throw NameError;
    }
    return true;
}

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

function ValidatePhone(phone){
    let PhoneRegex = /^(010|011|012|015)[0-9]{8}$/gm;
    if(!PhoneRegex.test(phone)){
        var PhoneError = new Error("Phone Must be 11 Digit starts with 010|011|012|015");
        throw PhoneError;
    }
    return true;
}

/* handling events in JS*/
document.getElementById("FullName").onblur = function(){
    //debugger;
    try{
        let valid = ValidateName(document.getElementById("FullName").value);
        if(valid){
            document.getElementById("FullName").classList.remove("is-invalid");
            document.querySelector("#FullName+div").innerText = "";
        }
    }catch(e){
        document.getElementById("FullName").classList.add("is-invalid");
        document.getElementById("FullName").focus();
        document.querySelector("#FullName+div").innerText = e.message;
    }
    
    if(CheckValidAll())
        document.getElementById("submit").disabled = false;
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

document.getElementById("Phone").onblur = function(){
    //debugger;
    try{
        let valid = ValidatePhone(document.getElementById("Phone").value);
        if(valid){
            document.getElementById("Phone").classList.remove("is-invalid");
            document.querySelector("#Phone+div").innerText = "";
        }
    }catch(e){
        document.getElementById("Phone").classList.add("is-invalid");
        document.getElementById("Phone").focus();
        document.querySelector("#Phone+div").innerText = e.message;
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

if(document.cookie){
    location.replace("http://127.0.0.1:5500/Home.html")
}