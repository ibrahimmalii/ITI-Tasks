/*validation functions*/
function validateName(name){
    //var nameRule = new RegExp();
    var nameRule = /^[a-zA-Z\s]{3,20}(?:[a-zA-z]{3})$/gmi;
    if(nameRule.test(name))
        return true;
    else{
        var nameError = new Error("Name not Valid, Name should be letters only & at least 3 ");
        throw nameError;
    }
}

function validateEmail(email){
    var emailRule = /^[a-zA-Z0-9\.]{1,}\@[a-zA-Z0-9]{2,}\.[a-zA-Z]{2,}$/gmi;
    if(emailRule.test(email))
        return true;
    else
        throw new Error("Email not Valid");
}

function validatePassword(password){
    if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/gm.test(password))
        return true;
    else
        throw new Error("Password must containt A, *, 0 at least 8 Char")
}

function validatePhone(phone){
    if(/^(010|011|012|015)[0-9]{8}$/.test(phone))
        return true;
    else
        throw new Error("phone must be 11 number start with (010|011|012|015)");
}

/* using our validation */
document.getElementById("FullName").onblur = function(){
    debugger;
    try{
        validateName(this.value);
        this.classList.remove("is-invalid");
    }catch(e){
        this.focus();
        this.classList.add("is-invalid");
        //document.querySelector("#FullName+div").style.display = "block";
        document.querySelector("#FullName+div").innerText = e.message;
    }
}

document.getElementById("Email").onblur = function(){
    debugger;
    try{
        validateEmail(this.value);
        this.classList.remove("is-invalid");
    }catch(e){
        this.focus();
        this.classList.add("is-invalid");
        //document.querySelector("#FullName+div").style.display = "block";
        document.querySelector("#Email+div").innerText = e.message;
    }
}

document.getElementById("Password").onblur = function(){
    //debugger;
    try{
        validatePassword(this.value);
        this.classList.remove("is-invalid");
    }catch(e){
        this.focus();
        this.classList.add("is-invalid");
        //document.querySelector("#FullName+div").style.display = "block";
        document.querySelector("#Password+div").innerText = e.message;
    }
}

document.getElementById("Phone").onblur = function(){
    try{
        validatePhone(this.value);
        this.classList.remove("is-invalid");
    }catch(e){
        this.focus();
        this.classList.add("is-invalid");
        //document.querySelector("#FullName+div").style.display = "block";
        document.querySelector("#Phone+div").innerText = e.message;
    }
}

/*Show or hide Password*/
var flag = true;
function showPassword(){
    if(flag){
        document.getElementById("show").style.display = "none";
        document.getElementById("hide").style.display = "block";
        flag = false
        document.getElementById("Password").type = "text"
    }
    else{
        document.getElementById("show").style.display = "block";
        document.getElementById("hide").style.display = "none";
        flag = true
        document.getElementById("Password").type = "password"
    }
    
}

function Done(e){
    e.preventDefault();
    //debugger;
    try{
        validateName(document.getElementById("FullName").value)
        validateEmail(document.getElementById("Email").value)
        validatePassword(document.getElementById("Password").value)
        validatePhone(document.getElementById("Phone").value)
        document.getElementById("register").submit();
    }catch(error){
        alert(error.message);
    }
}