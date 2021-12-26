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
        $(".desp").toggle("slow");
        $("#imgd").hide("slow");
        $(".desp").click(function() {
            $("#imgd").show("slow");
            $(".desp").hide("slow");
        })
    })
    $("#imgdev").click(function() {
        $(".desdevp").toggle("slow");
        $("#imgdev").hide("slow");
        $(".desdevp").click(function() {
            $("#imgdev").show("slow");
            $(".desdevp").hide("slow");
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
        $(".ova").show();
        $(".w1").addClass("div");
    }).mouseout(function() {
        $(".ova").hide();
        $(".w1").removeClass("div");
    })
    $(".work2").mouseenter(function() {
        $(".ova1").show();
        $(".w2").addClass("div");
    }).mouseleave(function() {
        $(".ova1").hide();
        $(".w2").removeClass("div");
    })
    $(".work3").mouseenter(function() {
        $(".ova2").show();
        $(".w3").addClass("div");
    }).mouseleave(function() {
        $(".ova2").hide();
        $(".w3").removeClass("div");
    })
    $(".work4").mouseenter(function() {
        $(".ova3").show();
        $(".w4").addClass("div");
    }).mouseleave(function() {
        $(".ova3").hide();
        $(".w4").removeClass("div");
    })
    $(".work5").mouseenter(function() {
        $(".ova4").show();
        $(".w5").addClass("div");
    }).mouseleave(function() {
        $(".ova4").hide();
        $(".w5").removeClass("div");
    })
    $(".work6").mouseenter(function() {
        $(".ova5").show();
        $(".w6").addClass("div");
    }).mouseleave(function() {
        $(".ova5").hide();
        $(".w6").removeClass("div");
    })
    $(".work7").mouseenter(function() {
        $(".ova6").show();
        $(".w7").addClass("div");
    }).mouseleave(function() {
        $(".ova6").hide();
        $(".w7").removeClass("div");
    })
    $(".work8").mouseenter(function() {
        $(".ova7").show();
        $(".w8").addClass("div");
    }).mouseleave(function() {
        $(".ova7").hide();
        $(".w8").removeClass("div");
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


