document.getElementById('bt2').addEventListener('click', function() {
    document.body.classList.toggle("dark_mode");


    // Get all input and textarea elements
    const textElements = document.querySelectorAll('input, textarea');

    // Loop through the elements and set their background color
    textElements.forEach(element => {
        if (document.body.classList.contains("dark_mode")) {
            element.style.backgroundColor = "grey"; // Set to grey in dark mode
            element.style.color = "white"; // Set text color to white for visibility
        } else {
            element.style.backgroundColor = ""; // Revert to default
            element.style.color = ""; // Revert to default
        }
    });
});