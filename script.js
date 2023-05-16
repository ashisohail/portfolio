
function validateForm(event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    let error = " ";
    
    if (name === "") {
        console.log('i m empty')
        error += "Please enter Your name. \n";
    }
    
    if (email === "") {
        error += "Please enter Your Email. \n";
    } else if (!validateEmail(email)) {
        error += "Please enter a valid email address.\n"
    }
   
    if (message === "") {
        error += "Please enter a message. \n";
    }

    if (error !== " ") {
        alert(error);
        return false;
    }
}

function validateEmail(email) {
    const regPattern = /\S+@\S+\.\S+/;
    return regPattern.test(email);
}

