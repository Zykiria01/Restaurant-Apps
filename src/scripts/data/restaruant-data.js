import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async getAll() {
    const response = await fetch(API_ENDPOINT.LIST_RESTO);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getDetail(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const responseJson = await response.json();
      return responseJson.restaurant;
    } catch (error) {
      return Error(error);
    }
  }
}

export default RestaurantSource;
