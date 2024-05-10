function submit(){
    var name= document.getElementById("Username").value;
    var email= document.getElementById("Email").value;
    var pass= document.getElementById("Password").value;
    var cpass= document.getElementById("confirm_password").value;
    var para1= document.getElementById("para1");
    var text;
    

    // if (name=="" && email=="" && pass=="" && cpass=="") {
    //     // alert("fill all blank");
    //     res1.innerHTML="Username required" ;
    //     res2.innerHTML="Enter valid Email";
    //     res3.innerHTML="Enter valid password";
    //     res4.innerHTML="Password must be same";
    // }
    if(name.length < 2){
        text = "Name Should be more than 6 characters";
        // para1.innerHTML = text;
        let res1 = document.getElementById("para1");
        res1.innerHTML="Username required" ;
        return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Enter Valid Email Address";
        // error_message.innerHTML = text;
        let res2 = document.getElementById("para2");
        res2.innerHTML="Enter valid Email";
        return false;
    }
    if(pass.length < 8){
        text = "Password must be  more than 8 characters";
        // error.innerHTML = text;
        let res3 = document.getElementById("para3");
        res3.innerHTML="Password must be  more than 8 characters";
        return false;
    }
    if(pass != cpass){
        text = "Password does not match";
        // error.innerHTML = text;
        let res4 = document.getElementById("para4");
        res4.innerHTML="Password must be same";
        return false;
    }
    window.location.replace("newpag.html");
    //  return false;
}

function changecolor(color){
    const bgAnimate=document.getElementById("bg-animate");

    bgAnimate.style.background = color;
    bgAnimate.classList.add('active');
}