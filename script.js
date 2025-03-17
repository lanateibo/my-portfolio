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