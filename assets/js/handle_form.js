// Add event listener to the submit button
document
  .querySelector(".btn-primary.smb")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default action (e.g., page reload)

    // Get the values of inputs and selects
    const pickupDate = document.getElementById("pickup_date").value;
    const returnDate = document.getElementById("return_date").value;
    const city = document.querySelector(".form-select.translate").value;
    const model = document.querySelectorAll(".form-select")[1].value;

    // Create an object with form data
    const formData = {
      pickupDate,
      returnDate,
      city,
      model,
    };

    // Log the form data
    console.log(formData);

    // Perform further actions, like sending data to a server
  });
