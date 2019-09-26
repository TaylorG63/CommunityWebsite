var name;
var email;

function Validate(){
    var validName = false
    var validEmail = false;
    var regName = /[A-Za-z]+/;
    var regEmail = /(%[@]%)+(.com|.edu|.org|.net|.gov)/;
    var errBackgroundColor = "red";
    name = document.getElementById("IName").value;
    email = document.getElementById("IEmail").vaule;
    console.log("Validate is Called");
    if (name == "" || regName.test(name)==false)    
    {
        console.log("NameField Empty or does not have a letter");
        document.getElementById("")
    }
    else{
        validName = true;
        console.log("NameField is valid");
    }
    if (email == "" || regEmail.test(email)==false){
        console.log("EmailField is empty or does not contain @ .com .edu .org .net or .gov")
    }
    else{
        validEmail = true;
        console.log("EmailField is valid");
    }
    if(validName && validEmail){

    }
}

document.getElementById("Bsend").addEventListener("click", Validate);