import axios from 'axios';

export class FoodBoutiqueAPI {
  constructor() {
    this.page = 1;
    this.query = null;

    this.category = null;
    this.byABC = true;
    this.byPrice = true;
    this.byPopularity = true;
    this.limit = 9;

    axios.defaults.baseURL = 'https://food-boutique.b.goit.study';
  }

  async fetchProductsByQuery() {
    const foodBoutiqueOptions = {
      params: {
        keyword: this.query,
        category: this.category,
        byABC: this.byABC,
        byPrice: this.byPrice,
        byPopularity: this.byPopularity,
        page: this.page,
        limit: this.limit,
      },
    };
    const res = await axios.get('/api/products', foodBoutiqueOptions);
    return res.data;
  }

  async fetchPopular() {
    const popularOptions = {
      params: {
        limit: 5,
      },
    };
    const res = await axios.get('/api/products/popular', popularOptions);
    return res.data;
  }

  async fetchDiscount() {
    const res = await axios.get('/api/products/discount');
    return res.data;
  }

  async fetchCategories() {
    const res = await axios.get('/api/products/categories');
    return res.data;
  }

  async fetchById(id) {
    const res = await axios.get(`/api/products/${id}`);
    return res.data;
  }

  async postOrders() {
    const res = await axios.post('/api/products/orders');
    return res.data;
  }

  async postSubscription() {
    const res = await axios.post('/api/products/subscription');
    return res.data;
  }
}
