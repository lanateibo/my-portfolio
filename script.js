document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".click-details");

    buttons.forEach(button => {
        button.addEventListener("click", function() {

        const details = button.nextElementSibling;

        if (details.style.display === "none") {
            details.style.display = "block";
            button.textContent = "Hide Details";
        }

        else {
            details.style.display = "none";
            button.textContent = "Show Details";
        }

         });

    });
    
});


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        let valid = true;

        let name = document.getElementById("name");
        let email = document.getElementById("email");
        let message = document.getElementById("message");


        let nameError = document.getElementById("nameError");
        let emailError = document.getElementById("emailError");
        let messageError = document.getElementById("messageError");


        valid &= validateField(name, nameError, "Name is required.");

        valid &= validateEmail(email, emailError);

        valid &= validateField(message, messageError, "Message is required.");

        
        if (!valid) {
            event.preventDefault(); 
            return;
        }

    });

   
    function validateField(field, errorElement, errorMessage) {
        if (!field.value.trim()) {
            errorElement.textContent = errorMessage;
            errorElement.style.display = "block";
            return false;
        } else {
            errorElement.style.display = "none";
            return true;
        }
    }

    function validateEmail(email, errorElement) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!email.value.trim() || !emailPattern.test(email.value.trim())) {
            errorElement.textContent = "Please enter your email.";
            errorElement.style.display = "block";
            return false;
        } else {
            errorElement.style.display = "none";
            return true;
        }
    }
});

