document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".btn-p.smb")
    .addEventListener("click", function (event) {
      event.preventDefault();

      // Get form inputs
      const priceInput = document.getElementById("price").value.trim();
      const detailsInput = document.getElementById("details").value.trim();
      const cityInput = document
        .querySelectorAll(".form-select")[1]
        .value.trim();
      const modelInput = document.getElementById("model").value.trim();

      // Debugging: Log input values
      console.log({ priceInput, detailsInput, cityInput, modelInput });

      // Filter the cars array
      const filteredCars = window.cars.filter((car) => {
        // Extract the numeric price value from the car's price string
        const numericPrice = parseFloat(car.price.replace(/[^0-9.]/g, ""));

        const matchesModel =
          modelInput === "" ||
          car.title.toLowerCase().includes(modelInput.toLowerCase());
        const matchesCity =
          cityInput === "" ||
          car.city.toLowerCase() === cityInput.toLowerCase();
        const matchesPrice =
          priceInput === "" || numericPrice.toString().startsWith(priceInput);
        const matchesDetails =
          detailsInput === "" ||
          car.details.features
            .toLowerCase()
            .includes(detailsInput.toLowerCase());

        // Return true if all conditions are met
        return matchesModel && matchesCity && matchesPrice && matchesDetails;
      });

      // Display the filtered cars
      window.displayCars(filteredCars);
    });
});
