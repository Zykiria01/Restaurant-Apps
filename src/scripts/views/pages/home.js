import RestaurantSource from '../../data/restaruant-data';
import { restaturanCard } from '../templates/template-creators';

const Home = {
  async render() {
    return `
       <div class="hero">
       <picture>
        <source
          media="(max-width: 600px)"
          srcset="/images/sharp/hero-image_4-small.jpg"
        />
        <source
          media="(max-width: 1280px)"
          srcset="/images/sharp/hero-image_4-large.jpg"
        />
        <img src="/images/hero-image_4.jpg" alt="Makanan" />
        </picture>
      </div>
      <div class="restaurant-container">
        <div class="restaurant-content">
          <h1 class="slogan">Explore Your Culinary</h1>
          <div id="restaurant-list"></div>
        </div>
      </div>
      <div class="restaurant-container" id="restaurant-list"></div>
      <hr>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.getAll();
    const restaurantContainer = document.getElementById('restaurant-list');
    restaurants.forEach((resto) => {
      restaurantContainer.innerHTML += restaturanCard(resto);
    });
  },
};

export default Home;
