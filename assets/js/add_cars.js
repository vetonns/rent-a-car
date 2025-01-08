document.addEventListener("DOMContentLoaded", function () {
  const cars = [
    {
      image: "audi1.jpg",
      title: "BMW X4",
      price: "$45.00 / day",
      details: { features: "Bluetooth, AC" },
      city: "Ferizaj",
    },
    {
      image: "images.jpg",
      title: "Audi A6",
      price: "$55.00 / day",
      details: { features: "GPS, Sunroof" },
      city: "Gjilan",
    },
    {
      image: "audi1.jpg",
      title: "Mercedes C-Class",
      price: "$65.00 / day",
      details: { features: "Heated Seats, Cruise Control" },
      city: "Pejë",
    },
    {
      image: "audi1.jpg",
      title: "Toyota Corolla",
      price: "$35.00 / day",
      details: { features: "Rear Camera, Bluetooth" },
      city: "Airport",
    },
    {
      image: "audi1.jpg",
      title: "Honda Civic",
      price: "$40.00 / day",
      details: { features: "Android Auto, AC" },
      city: "Ferizaj",
    },
    {
      image: "audi1.jpg",
      title: "Ford Mustang",
      price: "$75.00 / day",
      details: { features: "Convertible, Premium Audio" },
      city: "Gjilan",
    },
    {
      image: "audi1.jpg",
      title: "Chevrolet Camaro",
      price: "$70.00 / day",
      details: { features: "Sports Package, Bluetooth" },
      city: "Pejë",
    },
    {
      image: "audi1.jpg",
      title: "Volkswagen Golf",
      price: "$30.00 / day",
      details: { features: "Rear Sensors, AC" },
      city: "Airport",
    },
    {
      image: "audi1.jpg",
      title: "Tesla Model 3",
      price: "$85.00 / day",
      details: { features: "Autopilot, Touchscreen" },
      city: "Prishtinë",
    },
  ];

  window.cars = cars;
  window.displayCars = function (filteredCars) {
    const carContainer = document.querySelector(".car-container");
    carContainer.innerHTML = "";

    if (filteredCars.length > 0) {
      filteredCars.forEach((car) => {
        const carCard = document.createElement("div");
        carCard.className = "car-card";
        carCard.innerHTML = `
          <div class="car-card shadow-custom">
    <div class="col align-items-center">
        <div class="col">
            <div class="car-card-img">
                <img src="assets/img/${car.image}" alt="${
          car.title
        }" class="img-fluid">
            </div>
        </div>
        <div class="card-1">
            <div class="car-card-body">
                <h5 class="car-title">${car.title}</h5>
                <div class="car-price">${car.price}</div>
                <ul class="car-details list-unstyled mt-3 mb-3">
                    <li><strong>Features:</strong> ${car.details.features}</li>
                </ul>
                <div class="city"><strong>City:</strong> ${car.city}</div>
                <button class="btn btn-primary btn-book mt-3 reserve-btn" data-car='${JSON.stringify(
                  car
                )}' onclick="openModal(event)">Rezervo</button>
            </div>
        </div>
    </div>
</div>
        `;
        carContainer.appendChild(carCard);
      });
    } else {
      carContainer.innerHTML = "<p>No cars found</p>";
    }
  };

  // Display all cars initially
  window.displayCars(cars);
});
