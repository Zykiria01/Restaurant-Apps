/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#restaurant-list');
  I.see(
    'no favorite restaurant',
  );
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see(
    'no favorite restaurant',
  );

  I.amOnPage('/#');

  I.waitForElement('.resto-name', 2);
  I.seeElement('.resto-name');

  const firstRestaurant = locate('.resto-name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/favorite');
  I.waitForElement('.restaurant', 2);
  I.seeElement('.restaurant');

  const likedRestaurantName = await I.grabTextFrom('.resto-name');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.seeElement('.resto-name');
});

Scenario('unlike one restaurants', async ({ I }) => {
  I.see(
    'no favorite restaurant',
  );

  I.amOnPage('/#');

  I.waitForElement('.resto-name', 5);
  I.seeElement('.resto-name');

  const firstRestaurant = locate('.resto-name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/favorite');
  I.waitForElement('.restaurant', 5);
  I.seeElement('.restaurant');

  const likedRestaurantName = await I.grabTextFrom('.resto-name');

  I.seeElement('.resto-name');

  const firstRestaurantLiked = locate('.resto-name').first();
  I.click(firstRestaurantLiked);

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/favorite');
  const unlikeRestaurant = I.grabTextFrom('.restaurant-container', 10);
  assert.strictEqual(firstRestaurantName, likedRestaurantName, unlikeRestaurant);
});
