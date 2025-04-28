function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior (page reload)

    // Get the values from the form fields using their IDs
    const name = document.getElementById('name').value; // Retrieve the value of the Name input
    const email = document.getElementById('email').value; // Retrieve the value of the Email input
    const message = document.getElementById('message').value; // Retrieve the value of the Message textarea

    // For demonstration, we'll just log the values to the console
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`); // Log the form values for debugging

    // Clear the form after submission to reset the fields
    document.getElementById('contact-form').reset(); // Reset the form inputs to their default values
    
    // Show a confirmation message to the user
    alert('Thank you for your message!'); // Alert the user that their message was received
}