function validateForm () {
    var name = document.getelementbyid("name").value;
    var name = document.getelementbyid("email").value;
    var name = document.getelementbyid("message").value;
    var error = " ";

    if (name == " ") {
        error += "Please enter Your name. \n";
    }
    
    if (email == " ") {
        error += "Please enter Your Email. \n";
    } else if (!validateEmail (email)) {
        error += "Please enter a valid email address.\n"
    }
   

    if (message == " ") {
        error += "Please enter a message. \n";
    }

    if (error != " ") {
        alert(error);
        return false;
    }
}

function validateEmail (email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}