document.addEventListener("DOMContentLoaded", function () {
  var cars = [
    {
      image: "audi1.jpg",
      title: "BMW X4",
      price: "$45.00 / day",
      details: {
        doors: "4",
        seats: "4",
        fuel: "Diesel",
        features: "Bluetooth, AC",
      },
      totalCost: "$250.00",
    },
    {
      image: "images.jpg",
      title: "Audi A6",
      price: "$55.00 / day",
      details: {
        doors: "4",
        seats: "5",
        fuel: "Petrol",
        features: "GPS, Sunroof",
      },
      totalCost: "$300.00",
    },
    {
      image: "audi1.jpg",
      title: "Mercedes C-Class",
      price: "$65.00 / day",
      details: {
        doors: "4",
        seats: "5",
        fuel: "Electric",
        features: "Heated Seats, Cruise Control",
      },
      totalCost: "$320.00",
    },
    {
      image: "audi1.jpg",
      title: "Toyota Corolla",
      price: "$35.00 / day",
      details: {
        doors: "4",
        seats: "5",
        fuel: "Hybrid",
        features: "Rear Camera, Bluetooth",
      },
      totalCost: "$200.00",
    },
    {
      image: "audi1.jpg",
      title: "Honda Civic",
      price: "$40.00 / day",
      details: {
        doors: "4",
        seats: "5",
        fuel: "Diesel",
        features: "Android Auto, AC",
      },
      totalCost: "$220.00",
    },
    {
      image: "audi1.jpg",
      title: "Ford Mustang",
      price: "$75.00 / day",
      details: {
        doors: "2",
        seats: "4",
        fuel: "Petrol",
        features: "Convertible, Premium Audio",
      },
      totalCost: "$400.00",
    },
    {
      image: "audi1.jpg",
      title: "Chevrolet Camaro",
      price: "$70.00 / day",
      details: {
        doors: "2",
        seats: "4",
        fuel: "Petrol",
        features: "Sports Package, Bluetooth",
      },
      totalCost: "$350.00",
    },
    {
      image: "audi1.jpg",
      title: "Volkswagen Golf",
      price: "$30.00 / day",
      details: {
        doors: "4",
        seats: "5",
        fuel: "Diesel",
        features: "Rear Sensors, AC",
      },
      totalCost: "$180.00",
    },
    {
      image: "audi1.jpg",
      title: "Tesla Model 3",
      price: "$85.00 / day",
      details: {
        doors: "4",
        seats: "5",
        fuel: "Electric",
        features: "Autopilot, Touchscreen",
      },
      totalCost: "$450.00",
    },
  ];

  // Get the container element
  var carContainer = document.querySelector(".car-container");

  // Loop through the cars array and create the HTML structure
  cars.forEach((car) => {
    // Create the outermost card container
    var carCard = document.createElement("div");
    carCard.className = "car-card"; // Just apply the 'car-card' class for Flexbox layout

    // Card HTML structure
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
                <li><a class="bi bi-check"></a><strong> Doors:</strong> ${
                  car.details.doors
                }</li>
                <li><a class="bi bi-check"></a><strong> Seats:</strong> ${
                  car.details.seats
                }</li>
                <li><a class="bi bi-check"></a><strong> Fuel:</strong> ${
                  car.details.fuel
                }</li>
                <li><a class="bi bi-check"></a><strong> Features:</strong> ${
                  car.details.features
                }</li>
              </ul>
              <div class="total-cost"><strong>Total Cost:</strong> ${
                car.totalCost
              }</div>
            </div>
          </div>
          <button class="btn btn-primary btn-book mt-3 reserve-btn" data-car='${JSON.stringify(
            car
          )}'>Rezervo</button>
        </div>
      </div>
    `;

    // Append the card to the container
    carContainer.appendChild(carCard);
  });

  // Add event listeners to each "Rezervo" button
  document.querySelectorAll(".reserve-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      // Get the car data from the data-car attribute
      const car = JSON.parse(btn.getAttribute("data-car"));
      openModal(car);
    });
  });
});
