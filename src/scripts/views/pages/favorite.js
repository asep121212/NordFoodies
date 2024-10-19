import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import {createRestaurantMenu} from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="loading" id="loading">
      <div id="load"></div>
    </div> 
    <section id="mainContent" tabindex="0">
    <div id="row" class="row"  tabindex="0"></div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#row');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantMenu(restaurant);
    });

    const loading = document.querySelector('#loading');
    loading.style.display = 'none';
  },
};

export default Favorite;
