import axios from 'axios';
import Storage from './storage.js';

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
    return mapPaginationProduct(res);
  }

  async fetchPopular() {
    const popularOptions = {
      params: {
        limit: 5,
      },
    };
    const res = await axios.get('/api/products/popular', popularOptions);
    return mapProducts(res);
  }

  async fetchDiscount() {
    const res = await axios.get('/api/products/discount');
    return mapProducts(res);
  }

  async fetchCategories() {
    const res = await axios.get('/api/products/categories');
    return res.data.map(mapCategory);
  }

  async fetchByIdForModal(id) {
    const res = await axios.get(`/api/products/${id}`);
    const data = mapProduct(res.data);
    return data;
  }

  async fetchById(id) {
    const res = await axios.get(`/api/products/${id}`);
    const data = mapProduct(res.data);
    Storage.save(`product_${id}`, data);
    return data;
  }

  async fetchCachedById(id) {
    const product = Storage.load(`product_${id}`);
    if (!product) {
      return this.fetchById(id);
    } else {
      return product;
    }
  }

  async postOrders(email, productsData) {
    const payload = {
      email: email,
      products: productsData.map(product => ({
        productId: product._id,
        amount: product.quantity,
      })),
    };
    const res = await axios.post('/api/orders', payload);
    return res.data;
  }

  async postSubscription(subscriber) {
    const res = await axios.post('/api/subscription', subscriber);
    return res.data;
  }
}

function mapCategory(str) {
  return str.replaceAll('_', ' ');
}

function mapProduct(product) {
  return {
    ...product,
    category: mapCategory(product.category),
  };
}

function mapProducts(res) {
  return res.data.map(mapProduct);
}

function mapPaginationProduct(res) {
  const pagination = res.data;
  return {
    ...pagination,
    results: pagination.results.map(mapProduct),
  };
}
