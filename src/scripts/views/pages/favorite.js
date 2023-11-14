import FavoriteRestaurantIDB from '../../data/favorite-restaurnat-idb';
import { restaturanCard } from '../templates/template-creators';

const Favorite = {
  async render() {
    return `
    <h1 class="fav-header">Favorite Page</h1>
    <hr/>
    <div class="restaurant-content">
    <div class="restaurant-container" id="restaurant-list">
    
    </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIDB.getAll();
    const restaurantContainer = document.getElementById('restaurant-list');
    if (restaurants.length === 0) {
      restaurantContainer.innerHTML = 'no favorite restaurant';
    } else {
      restaurants.forEach((resto) => {
        restaurantContainer.innerHTML += restaturanCard(resto);
      });
    }
  },
};

export default Favorite;
