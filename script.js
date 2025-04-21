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



document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("themeToggle");
    const body = document.body;


    function updateIcon() {
        if (body.classList.contains("dark-mode")) {
            toggleButton.textContent = "🌙"; 
        } else {
            toggleButton.textContent = "☀️"; 
        }
    }

    
    updateIcon();

    
    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        updateIcon();
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".project");
  
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const selectedCategory = button.getAttribute("data-category");
  
        projects.forEach(project => {
          const projectCategory = project.getAttribute("data-category");
  
          if (selectedCategory === "all" || selectedCategory === projectCategory) {
            project.style.display = "block";
          } else {
            project.style.display = "none";
          }
        });
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".gallery");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                gallery.classList.add("animate-in");
            }
        });
    }, {
        threshold: 0.3
    });

    if (gallery) {
        observer.observe(gallery);
    }
});

  
