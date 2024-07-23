document.addEventListener("DOMContentLoaded", () => {
          const foodItems = [
              {
                  image: "./images/explore1.jpg",
                  title: "Rainbow Vegetable Sandwich",
                  time: "Time: 15 - 20 Minutes | Serves: 1",
                  price: "$10.50",
                  oldPrice: "$11.70"
              },
              {
                  image: "./images/explore2.jpg",
                  title: "Rainbow Vegetable Sandwich",
                  time: "Time: 15 - 20 Minutes | Serves: 1",
                  price: "$10.50",
                  oldPrice: "$11.70"
              },
              {
                  image: "./images/explore3.jpg",
                  title: "Rainbow Vegetable Sandwich",
                  time: "Time: 15 - 20 Minutes | Serves: 1",
                  price: "$10.50",
                  oldPrice: "$11.70"
              },
              {
                  image: "./images/explore1.jpg",
                  title: "Rainbow Vegetable Sandwich",
                  time: "Time: 15 - 20 Minutes | Serves: 1",
                  price: "$10.50",
                  oldPrice: "$11.70"
              },
              {
                  image: "./images/explore2.jpg",
                  title: "Rainbow Vegetable Sandwich",
                  time: "Time: 15 - 20 Minutes | Serves: 1",
                  price: "$10.50",
                  oldPrice: "$11.70"
              },
              {
                  image: "./images/explore3.jpg",
                  title: "Rainbow Vegetable Sandwich",
                  time: "Time: 15 - 20 Minutes | Serves: 1",
                  price: "$10.50",
                  oldPrice: "$11.70"
              },
              {
                  image: "./images/explore1.jpg",
                  title: "Rainbow Vegetable Sandwich",
                  time: "Time: 15 - 20 Minutes | Serves: 1",
                  price: "$10.50",
                  oldPrice: "$11.70"
              },
              {
                  image: "./images/explore2.jpg",
                  title: "Rainbow Vegetable Sandwich",
                  time: "Time: 15 - 20 Minutes | Serves: 1",
                  price: "$10.50",
                  oldPrice: "$11.70"
              },
              {
                  image: "./images/explore3.jpg",
                  title: "Rainbow Vegetable Sandwich",
                  time: "Time: 15 - 20 Minutes | Serves: 1",
                  price: "$10.50",
                  oldPrice: "$11.70"
              },
              {
                  image: "./images/explore1.jpg",
                  title: "Rainbow Vegetable Sandwich",
                  time: "Time: 15 - 20 Minutes | Serves: 1",
                  price: "$10.50",
                  oldPrice: "$11.70"
              },
              {
                  image: "./images/explore2.jpg",
                  title: "Rainbow Vegetable Sandwich",
                  time: "Time: 15 - 20 Minutes | Serves: 1",
                  price: "$10.50",
                  oldPrice: "$11.70"
              },
              {
                  image: "./images/explore3.jpg",
                  title: "Rainbow Vegetable Sandwich",
                  time: "Time: 15 - 20 Minutes | Serves: 1",
                  price: "$10.50",
                  oldPrice: "$11.70"
              },
              // Add more items as needed
          ];
      
         
    const foodContainer = document.getElementById("food-container");
    const limit = foodContainer.dataset.limit ? parseInt(foodContainer.dataset.limit, 10) : foodItems.length;

    // Limit to the specified number of items or display all if no limit is set
    const limitedFoodItems = foodItems.slice(0, limit);

    limitedFoodItems.forEach(food => {
        const foodCard = document.createElement('div');
        foodCard.classList.add('explore-foodscard');

        const foodCardImg = document.createElement('div');
        foodCardImg.classList.add('explore-foodscard-img');

        const img = document.createElement('img');
        img.src = food.image;
        img.alt = food.title;

        foodCardImg.appendChild(img);

        const foodCardText = document.createElement('div');
        foodCardText.classList.add('explore-foodscard-text');

        const foodTitle = document.createElement('span');
        foodTitle.classList.add('food-cardtittle');
        foodTitle.textContent = food.title;

        const foodTime = document.createElement('span');
        foodTime.classList.add('food-cardtime');
        foodTime.textContent = food.time;

        const foodPrice = document.createElement('p');
        foodPrice.classList.add('food-cardprice');
        foodPrice.innerHTML = `${food.price} <span>${food.oldPrice}</span>`;

        const orderButton = document.createElement('button');
        orderButton.classList.add('btn-1', 'btn-red');
        orderButton.textContent = 'Order Now';

        foodCardText.appendChild(foodTitle);
        foodCardText.appendChild(foodTime);
        foodCardText.appendChild(foodPrice);
        foodCardText.appendChild(orderButton);

        foodCard.appendChild(foodCardImg);
        foodCard.appendChild(foodCardText);

        foodContainer.appendChild(foodCard);
    });
});
      const hamburger = document.getElementById('hamburger');
      const nav = document.querySelector('nav');
      const logo = document.querySelector('.logo');
  
      hamburger.addEventListener('click', () => {
          nav.classList.toggle('active');
          hamburger.classList.toggle('active');
          logo.classList.toggle('hidden');
      });
      