import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import refs from './refs';

refs.footerFormEl.addEventListener('submit', onFooterFormElSubmit);

const paramsNotify = {
  width: '500px',
  position: 'right-bottom',
  fontSize: '20px',
};

class SubscribersAPI {
  static #BASE_URL = 'https://food-boutique.b.goit.study/api';
  static #END_POINT = '/subscription';

  static async createSubscriber(subscriber) {
    const url = `${this.#BASE_URL}${this.#END_POINT}`;

    try {
      const response = await axios.post(url, subscriber);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
}

async function onFooterFormElSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const subscriber = {
    email: form.elements.userEmail.value,
  };
  try {
    const createdSubscriber = await SubscribersAPI.createSubscriber(subscriber);
    Notify.success(
      'Your subscription is confirmed! Welcome to the Food Boutique! 🥦🍓 ',
      paramsNotify
    );
  } catch (err) {
    Notify.failure(
      'Sorry, something went wrong. Please try again later.',
      paramsNotify
    );
  }
  form.reset();
}
