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
              orderButton.textContent = 'Review Now';
      
              foodCardText.appendChild(foodTitle);
              foodCardText.appendChild(foodTime);
              foodCardText.appendChild(foodPrice);
              foodCardText.appendChild(orderButton);
      
              foodCard.appendChild(foodCardImg);
              foodCard.appendChild(foodCardText);
      
              foodContainer.appendChild(foodCard);
          });
      
          const hamburger = document.getElementById('hamburger');
          const nav = document.querySelector('nav');
          const logo = document.querySelector('.logo');
      
          hamburger.addEventListener('click', () => {
              nav.classList.toggle('active');
              hamburger.classList.toggle('active');
              logo.classList.toggle('hidden');
          });
      
          const reviewNav = document.getElementById('review-nav');
          const reviewButtons = document.querySelectorAll('.btn-1.btn-red');
          const reviewPopup = document.getElementById('review-popup');
          const closePopup = document.querySelector('.popup .close');
          const popupSection = document.getElementById('popup-section');
      
          const reviewFormHTML = `
              <h2>Submit Your Review</h2>
              <form id="reviewForm">
                  <label for="name">Name:</label>
                  <input type="text" id="name" name="name" required>
                  <label for="email">Email:</label>
                  <input type="email" id="email" name="email" required>
                  <label for="review">Review:</label>
                  <textarea id="review" name="review" required></textarea>
                  <button type="submit">Submit</button>
              </form>
          `;
          
          const reviewListHTML = `
              <h2>All Reviews</h2>
              <div class="review-list" id="reviewsContainer">
                  <!-- Reviews will be injected here by JavaScript -->
              </div>
          `;
      
          const showPopup = (content) => {
                    popupSection.innerHTML = content;
                    reviewPopup.style.display = 'block';
                };
            
                const hidePopup = () => {
                    reviewPopup.style.display = 'none';
                };
            
                reviewNav.addEventListener('click', (e) => {
                    e.preventDefault();
                    showPopup(reviewListHTML);
                    setTimeout(displayReviews, 0); // Ensure displayReviews runs after popupSection is updated
                });
            
                reviewButtons.forEach(button => {
                    button.addEventListener('click', () => {
                        showPopup(reviewFormHTML);
                        setupForm();
                    });
                });
            
                closePopup.addEventListener('click', hidePopup);
            
                window.addEventListener('click', (event) => {
                    if (event.target == reviewPopup) {
                        hidePopup();
                    }
                });
            
                const setupForm = () => {
                    const reviewForm = document.getElementById('reviewForm');
                    if (reviewForm) {
                        reviewForm.addEventListener('submit', (event) => {
                            event.preventDefault();
                            const name = document.getElementById('name').value;
                            const email = document.getElementById('email').value;
                            const review = document.getElementById('review').value;
                            if (name && email && review) {
                                const newReview = {
                                    name,
                                    email,
                                    review,
                                    timestamp: new Date().toLocaleString()
                                };
                                saveReview(newReview);
                                hidePopup();
                            } else {
                                alert('Please fill out all fields.');
                            }
                        });
                    }
                };
            
                const saveReview = (review) => {
                    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
                    reviews.push(review);
                    localStorage.setItem('reviews', JSON.stringify(reviews));
                };
            
                const displayReviews = () => {
                    const reviewsContainer = document.getElementById('reviewsContainer');
                    if (reviewsContainer) {
                        reviewsContainer.innerHTML = '';
                        const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
                        reviews.forEach(review => {
                            const reviewElement = document.createElement('div');
                            reviewElement.className = 'review';
                            reviewElement.innerHTML = `
                                <h3>${review.name}</h3>
                                <p>${review.review}</p>
                                <small>${review.email} - ${review.timestamp}</small>
                            `;
                            reviewsContainer.appendChild(reviewElement);
                        });
                    } else {
                        console.error('Element with ID "reviewsContainer" not found.');
                    }
                };
            
                // Initial call to display reviews if there are any
                displayReviews();
            });