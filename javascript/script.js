//form validation
function validateForm() {
    if (document.myForm.name.value === "") {
        alert("Please enter your Name");
    } else if(document.myForm.email.value === "") {
        alert("Please enter your Email");
    }else if(document.myForm.message.value === "") {
        alert("Please enter your Message")
    }else{
        return true;
    }
    
}

$(document).ready(function() {
    $("#imgd").click(function() {
        $(".desp").toggle();
        $("#imgd").hide();
        $(".desp").click(function() {
            $("#imgd").show();
            $(".desp").hide();
        })
    })
    $("#imgdev").click(function() {
        $(".desdevp").toggle();
        $("#imgdev").hide();
        $(".desdevp").click(function() {
            $("#imgdev").show();
            $(".desdevp").hide();
        })
    })
    $("#prodimg").click(function() {
        $(".prodp").toggle();
        $("#prodimg").hide();
        $(".prodp").click(function() {
            $("#prodimg").show();
            $(".prodp").hide();
        })
    })
});

