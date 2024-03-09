// JavaScript code to enhance your eco-friendly forest-themed website

document.addEventListener("DOMContentLoaded", function () {
    // DOMContentLoaded event ensures that the JavaScript runs after the page is fully loaded.

    // Add event listeners for navigation links (scroll to sections)
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth",
                });
            }
        });
    });

    // Add event listener for the "Schedule a Pickup" button
    const schedulePickupButton = document.querySelector("#hero .btn");
    if (schedulePickupButton) {
        schedulePickupButton.addEventListener("click", function () {
            // Replace with your logic to open the scheduling form/modal
            alert("Opening the scheduling form!");
        });
    }

    // Add event listener for form validation (example)
    const signupForm = document.querySelector("#login-signup form");
    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = this.elements.name.value;
            const phone = this.elements.phone.value;
            const address = this.elements.address.value;

            // Example: Validate that the name and phone fields are not empty
            if (!name || !phone || !address) {
                alert("Please fill in all required fields.");
            } else {
                // Submit the form or perform other actions
                alert("Form submitted successfully!");
                // You can replace this with code to send the form data to your server.
            }
        });
    }

    // Add more JavaScript functionality for other sections as needed.
});
