//validate the form


document.getElementById('theBtn').addEventListener('click', function(){
    var theForm = document.getElementById('theForm');
    var isValid = true;
    theForm.name.style.backgroundColor = "white";
    theForm.email.style.backgroundColor = "white";
    theForm.textArea.style.backgroundColor = "white";

    var nameRegex = /[A-Za-z]+/;
    if(nameRegex.test(theForm.name.value) == false){
        theForm.name.style.backgroundColor = "red";
        isValid = false;
    }//end if

    var emailRegex = /[A-Za-z0-9]+@[A-Za-z0-9]+(.com|.net|.edu|.gov)/;
    if(emailRegex.test(theForm.email.value) == false){
        theForm.email.style.backgroundColor = "red";
        isValid = false;
    }

    if(theForm.textArea.value == ""){
        theForm.textArea.style.backgroundColor = "red";
        isValid = false;
    }
})
