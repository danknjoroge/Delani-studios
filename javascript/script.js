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

//user interface logic
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
        $(".prodp").toggle("slow");
        $("#prodimg").hide("slow");
        $(".prodp").click(function() {
            $("#prodimg").show("slow");
            $(".prodp").hide("slow");
        })
    })
    $(".work1").mouseover(function() {
        $(".work1-overlay").show("slow");
    }).mouseout(function() {
        $(".work1-overlay").hide("slow");

    })
});

//business logic
var takeData = document.getElementById("myForm");
takeData.addEventListener("submit", (e) => {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message= document.getElementById("message").value;
    if (name != "" && message !="") {
        alert( name + " " +"We have received your message. Thank you for reaching out to us");
    };
    document.getElementById("myForm").reset();
});


