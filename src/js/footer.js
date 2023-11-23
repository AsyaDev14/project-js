// import axios from 'axios';
// const axios = axios.create({
//   baseURL: 'https://food-boutique.b.goit.study/api',
// });

const footerFormEl = document.querySelector('.footer-form');
footerFormEl.addEventListener('submit', onFooterFormElSubmit);

class SubscribersAPI {
  static #BASE_URL = 'https://food-boutique.b.goit.study/api';
  static #END_POINT = '/subscription';

  static async createSubscriber(subscriber) {
    const url = `${this.#BASE_URL}${this.#END_POINT}`;
    const options = {
      method: 'POST',
      body: JSON.stringify(subscriber),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await fetch(url, options);
      return res.json();
    } catch (err) {
      console.log(err);
    }
  }
}

async function onFooterFormElSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const { elements } = form;

  const subscriber = {
    email: elements.subscriberEmail.value,
  };

  try {
    const createdSubscriber = await SubscribersAPI.createSubscriber(subscriber);
  } catch (err) {
    console.log(err);
  }
  form.reset();
}
