/* eslint-disable consistent-return */
import CONFIG from '../globals/config';

const CacheHelper = {
  async cachingAppShell(requests) {
    const cache = await this._openCache();
    cache.addAll(requests);
  },

  async deleteOldCache() {
    const cacheNames = await caches.keys();
    cacheNames
      .filter((name) => name !== CONFIG.CACHE_NAME)
      .map((filteredName) => caches.delete(filteredName));
  },

  async revalidateCache(request) {
    const response = await caches.match(request);
    if (response) {
      this._fetchRequest(request);
      return response;
    }

    return this._fetchRequest(request);
  },

  async _openCache() {
    return caches.open(CONFIG.CACHE_NAME);
  },

  async _fetchRequest(request) {
    try {
      const response = await fetch(request);
      if (!response || response.status !== 200) {
        return response;
      }

      await this._addCache(request);
      return response;
    } catch (error) {
      console.log('Opps.. Something Error');
    }
  },

  async _addCache(request) {
    if (request.method !== 'POST') {
      const cache = await this._openCache(request);
      cache.add(request);
    }
  },
};

export default CacheHelper;
