//form validation
function validateForm() {
    if (document.myForm.name.value === "") {
        alert("Please enter yourname")
        
    } else if(document.myForm.email.value === "") {
        
    }else if(document.myForm.message.value === "") {

    }else{
        return true;
    }
}