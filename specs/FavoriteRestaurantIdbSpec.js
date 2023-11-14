/* eslint-disable no-undef */
import { itActsAsFavoriteRestaurantModel } from './contract/FavoriteRestaurantContract';
import FavoriteRestaurantIDB from '../src/scripts/data/favorite-restaurnat-idb';

describe('Favorite Movie Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIDB.getAll()).forEach(
      async (restaurant) => {
        await FavoriteRestaurantIDB.deleteRestaurant(restaurant.id);
      },
    );
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIDB);
});
