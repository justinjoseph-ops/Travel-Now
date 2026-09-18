document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        alert(
            "Thank you, " +
            name +
            "! Your travel enquiry has been received."
        );

        document
            .getElementById("contactForm")
            .reset();

    });