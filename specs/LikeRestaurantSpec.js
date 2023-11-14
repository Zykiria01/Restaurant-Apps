/* eslint-disable indent */
/* eslint-disable no-undef */
import FavoriteRestaurantIDB from '../src/scripts/data/favorite-restaurnat-idb';
import * as TesFactories from './helper/TestFactories';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TesFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="like this restaurant"]'),
    ).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TesFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="unike this restaurant"]'),
    ).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TesFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantIDB.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });

    FavoriteRestaurantIDB.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TesFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurantIDB.putRestaurant({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIDB.getAll()).toEqual([{ id: 1 }]);

    FavoriteRestaurantIDB.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TesFactories.createLikeButtonPresenterWithRestaurant({});
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIDB.getAll()).toEqual([]);
  });
});
