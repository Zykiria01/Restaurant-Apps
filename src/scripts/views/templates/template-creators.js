/* eslint-disable indent */
/* eslint-disable import/prefer-default-export */
import CONFIG from '../../globals/config';

export const restaturanCard = (restaurant) => `<div class="restaurant">
  <div class="resto-image-wrapper">
    <img class="lazyload" src="${CONFIG.BASE_IMAGE_URL}/${
  restaurant.pictureId
}" alt="${restaurant.name}" crossorigin="anonymous"/>

<p>
<i class="fa fa-solid fa-building"></i>
${restaurant.city}</p>
</div>
<div class="title">
  <h2 class="resto-name"><a href="${`/#/detail/${restaurant.id}`}"> ${
  restaurant.name
}<a/></h2>
<p>
<i class="fa fa-solid fa-star"></i>
${restaurant.rating}
</p>

  </div>
     <p class="resto-desc">
     ${restaurant.description}</p>
      </div>`;

export const restaurantDetail = (restaurant) => `
      <div class="restaurant-content">
      <div class="detail-header">
      <img class="lazyload" src="${CONFIG.BASE_IMAGE_URL}/${
  restaurant.pictureId
}" class="detail-img" alt="${restaurant.name}" crossorigin="anonymous"/>
  <div>
  <h1>${restaurant.name}</h1>
  <p>
  Rating : ${restaurant.rating} / 5.0
  </p>
  <p>
  Alamat :
  ${restaurant.address}, ${restaurant.city}</p>
  <hr/>
  <p class="resto-description">
${restaurant.description}</p>
<hr/>

</div>


</div>
       <div class="info-resto">
        <div id="likeButtonContainer"></div>
         
        
        </div>
     <h1 class="menu-title">Our Menu</h1>
     <div class="divider"></div>
     <div class="resto-menu-wrapper">
     <div>
     <h3>Drink Menu</h3>
      <hr/>
      <div class="detail-menu-wrapper">
          ${restaurant?.menus?.drinks
            .map((drinks) => `<li class="list-group-item">${drinks.name}</li>`)
            .join('')}
      </div> 
     </div>
     <div>
     <h3>Food Menu</h3>
     <hr/>
      
     <div class="detail-menu-wrapper">
        ${restaurant?.menus?.foods
          .map((food) => `<li class="list-group-item">${food.name}</li>`)
          .join('')}
        </div> 
     
     </div>
    </div> 

    <div class="resto-review-wrapper ">
    ${restaurant.customerReviews
      .map(
        (review) => `<div class="review-container">
        <h2 >Nama Customer :</h2>
        <p> ${review.name}</p>
        <h2>Ulasan :</h2>
        <p >${review.review}</p>
        <p>${review.date}</p>
        </div>`,
      )
      .join('')}</div>
      
    </div>`;

export const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

export const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
