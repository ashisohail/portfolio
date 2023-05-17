// ==============JS code for Validate contact Form   ==============

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
    } else {
        return true;
    }
}

function validateEmail(email) {
    const regPattern = /\S+@\S+\.\S+/;
    return regPattern.test(email);
}

// ==============JS code for EmailJS    ==============

function sendMail(event) {
    const validate = validateForm()
    if (validate) {
        const params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        }
        
        emailjs.send("service_3wcqz2a", "template_87nuohq", params).then((res) => {
            document.getElementById('name').value = ''
            document.getElementById('email').value = ''
            document.getElementById('message').value = ''
            console.log(res.status)
            alert('Email sent successfylly!')
        }).catch((err) => {
            if (err) console.log(err)
           
        })
    } else {
        event.preventDefault()
    }
    event.preventDefault()
}

// ==============JS code for Hamburger   ==============

const hamBurger = document.querySelector(".hamburger");  
const navsub = document.querySelector(".nav-container");  

hamBurger.addEventListener('click', () => {  
navsub.classList.toggle("nav-change")  
}); 

navsub.addEventListener('click', () => {
    navsub.classList.remove("nav-change")  
});