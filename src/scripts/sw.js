/* eslint-disable no-restricted-globals */
import { registerRoute } from 'workbox-routing';
import { setCacheNameDetails } from 'workbox-core';
import { CacheFirst } from 'workbox-strategies';
import { precacheAndRoute } from 'workbox-precaching';

setCacheNameDetails({
  prefix: 'restoku-apps',
  suffix: 'v1',
  precache: 'precache',
  runtime: 'runtime',
});

precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('install', () => {
  console.log('Service Worker: Installing....');
  self.skipWaiting();
});

self.addEventListener('push', () => {
  console.log('Service Worker: Pushed');
});

registerRoute(
  /^https:\/\/restaurant-api\.dicoding\.dev\/(?:(list|detail))/,
  new CacheFirst({
    cacheName: 'restaurant-detail-cache',
  }),
);
