const data = [
  {
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    alt: "restaurant1",
    name: "The Darzi Bar and Kitchen",
    rating: 4.2,
    food: "North India, Chinese",
    price: "₹2800 for two",
    place: "Middle Circle, CP",
    distance: "1.4 km",
    offer: "Flat 25% OFF"
  },
  {
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
    alt: "restaurant2",
    name: "Spice Villa",
    rating: 4.0,
    food: "Indian, Mughlai",
    price: "₹1500 for two",
    place: "Connaught Place",
    distance: "2.1 km",
    offer: "Flat 15% OFF"
  },
  {
    img: "https://images.unsplash.com/photo-1552566626-52f8b828add9",
    alt: "restaurant3",
    name: "Urban Tadka",
    rating: 4.5,
    food: "Punjabi, North Indian",
    price: "₹1800 for two",
    place: "Rajouri Garden",
    distance: "3.5 km",
    offer: "Flat 30% OFF"
  },
  {
    img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
    alt: "restaurant4",
    name: "Food Junction",
    rating: 3.9,
    food: "Fast Food, Beverages",
    price: "₹800 for two",
    place: "Karol Bagh",
    distance: "2.8 km",
    offer: "Flat 20% OFF"
  },
  {
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    alt: "restaurant5",
    name: "Royal Dine",
    rating: 4.3,
    food: "Biryani, Hyderabadi",
    price: "₹2000 for two",
    place: "Saket",
    distance: "5.0 km",
    offer: "Flat 35% OFF"
  },
  {
    img: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9",
    alt: "restaurant6",
    name: "Cafe Delight",
    rating: 4.1,
    food: "Cafe, Continental",
    price: "₹1200 for two",
    place: "Hauz Khas",
    distance: "4.2 km",
    offer: "Flat 10% OFF"
  }
];

data.forEach((obj) => {

  const finaldiv = document.createElement('div');
  finaldiv.className = "card";

  // IMAGE SECTION
  const div1 = document.createElement('div');
  div1.className = "image";

  const imgdiv = document.createElement('img');
  imgdiv.src = obj.img;
  imgdiv.alt = obj.alt;

  const para = document.createElement('p');
  para.className = "off";
  para.textContent = obj.offer;

  div1.appendChild(imgdiv);

  
  div1.appendChild(para);

  // RESTAURANT SECTION
  const resDiv = document.createElement('div');
  resDiv.className = "Resturant";

  const nameDiv = document.createElement('div');
  nameDiv.className = "Resturant_name Box";
  nameDiv.textContent = obj.name;

  const ratingDiv = document.createElement('div');
  ratingDiv.className = "rating Box";
  ratingDiv.textContent = obj.rating;

  resDiv.appendChild(nameDiv);
  resDiv.appendChild(ratingDiv);

  // FOOD SECTION
  const foodDiv = document.createElement('div');
  foodDiv.className = "Food";

  const foodName = document.createElement('div');
  foodName.className = "Food_name Box";
  foodName.textContent = obj.food;

  const price = document.createElement('div');
  price.className = "price Box";
  price.textContent = obj.price;

  foodDiv.appendChild(foodName);
  foodDiv.appendChild(price);

  // LOCATION SECTION
  const locDiv = document.createElement('div');
  locDiv.className = "Location";

  const place = document.createElement('div');
  place.className = "Place Box";
  place.textContent = obj.place;

  const distance = document.createElement('div');
  distance.className = "Distance Box";
  distance.textContent = obj.distance;

  locDiv.appendChild(place);
  locDiv.appendChild(distance);

  // FINAL APPEND
  finaldiv.appendChild(div1);
  finaldiv.appendChild(resDiv);
  finaldiv.appendChild(foodDiv);
  finaldiv.appendChild(locDiv);


 document.body.appendChild(finaldiv);
});




















































































// const div2 = document.createElement('')
// data.forEach((item) => {
//   container.innerHTML += `
//     <div class="card">
//       <div class="image">
//         <img src="${item.image}" alt="${item.alt}">
//         <p class="off">${item.offer}</p>
//       </div>

//       <div class="Resturant">
//         <div class="Resturant_name Box">
//           <p>${item.name}</p>
//         </div>

//         <div class="rating Box">
//           <p>${item.rating}</p>
//         </div>
//       </div>

//       <div class="Food">
//         <div class="Food_name Box">
//           <p>${item.food}</p>
//         </div>

//         <div class="price Box">
//           <p>${item.price}</p>
//         </div>
//       </div>

//       <div class="Location">
//         <div class="Place Box">
//           <p>${item.place}</p>
//         </div>

//         <div class="Distance Box">
//           <p>${item.distance}</p>
//         </div>
//       </div>
//     </div>
//   `;
// });