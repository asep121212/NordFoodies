import API_ENDPOINT from '../globals/api-endpoint.js';


class RestaurantSource {
  static async flowRestaurant() {
    const response = await fetch(API_ENDPOINT.RESTO);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async inResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }


}

export default RestaurantSource;
