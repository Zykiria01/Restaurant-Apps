import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaruant-data';
import { restaurantDetail } from '../templates/template-creators';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <h2 class="detail-title">Detail Page</h2>
      <hr/>
      <div class="restaurant-content" id="restaurant-content"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.getDetail(url.id);
    const restaurantContainer = document.getElementById('restaurant-content');
    restaurantContainer.innerHTML = restaurantDetail(restaurant);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant,
    });
  },
};

export default Detail;
