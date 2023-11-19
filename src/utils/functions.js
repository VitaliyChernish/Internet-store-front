import { serverApi } from "./consts";
import moment from 'moment-timezone';

export function showMessage(message, duration) {
  const alertContainer = document.createElement('div');
  alertContainer.textContent = message;
  alertContainer.style.position = 'fixed';
  alertContainer.style.top = '5vw';
  alertContainer.style.left = '50%';
  alertContainer.style.transform = 'translateX(-50%)';
  alertContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  alertContainer.style.color = 'white';
  alertContainer.style.padding = '10px';
  alertContainer.style.borderRadius = '5px';
  alertContainer.style.zIndex = '9999'
  document.body.appendChild(alertContainer);

  setTimeout(function () {
    alertContainer.remove();
  }, duration);
}

export function calc(url, token, formData) {
  fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`
    },
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      // Обробка успішного оновлення
      showMessage(data.message === undefined ? 'Апдейт успішний' : data.message, 7000); // Результат реєстрації (наприклад, токен)
      console.log('Offer updated successfully:', data);
    })
    .catch(error => {
      // Обробка помилки
      showMessage(`Помилка при оновленні: Неможливо з'єднатися з сервером`, 3000);
      console.error('Error updating offer:', error);
    });
}

export function checkAuth(token) {
  fetch(`${serverApi}/api/user/auth`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })
    .then(response => response.json())
    .then(data => {
      showMessage(data.message, 3000); // Виведення повідомлення з сервера
    })
    .catch(error => {
      console.error('Помилка при перевірці авторизації file My_index.html:', error);
    });
}

export const parseData = (key) => {
  const storedData = localStorage.getItem('data');
  const parsedData = JSON.parse(storedData);
  return parsedData[key]
}

export const deleteOffer = (event, index) => {
  event.preventDefault();
  event.stopPropagation()
  const url = `${serverApi}/api/offers/delete/${index}`;
  const token = parseData('token')

  fetch(url, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(data => {
      // Обробка успішного видалення
      console.log(data.message)
      showMessage(data.message + '! ПЕРЕЗАВАНТАЖ СТОРІНКУ!', 5000);
    })
    .catch(error => {
      // Обробка помилки
      console.error('Error deleting offer:', error);
    });
}
export function createOffer(name, link, buyingPrice, oldPrice, newPrice, setTimer, image, descrField) {
  const url = `${serverApi}/api/offers/createOffers`;
  const token = parseData('token');
  const formData = new FormData();

  formData.append('name', name);
  formData.append('link', link);
  formData.append('buyingPrice', buyingPrice);
  formData.append('oldPrice', oldPrice);
  formData.append('newPrice', newPrice);
  formData.append('setTimer', setTimer);
  formData.append('file', image); // Додайте зображення до formData
  formData.append('description', descrField);

  fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`
    },
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      showMessage(data.message === undefined ? 'Дані успішно завантажені' : data.message, 3000);
    })
    .catch(error => {
      showMessage(`Помилка при реєстрації: Неможливо з'єднатися з сервером`, 3000);
      console.error('Помилка при реєстрації:', error);
    });
}

export function updateOffer() {

  const formData = new FormData();
  const token = parseData('token')
  const url = `${serverApi}/api/offers/updateOffers`;

  const arr = Array.from(arguments)

  arr.forEach(el => {
    const arrKeys = Object.keys(el)
    const arrValues = Object.values(el)
    arrKeys.map((el, i) => formData.append([el], arrValues[i]))
  })

  fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`
    },
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      // Обробка успішного оновлення
      showMessage(data.message === undefined ? 'Апдейт успішний' : "Помилка сервера: " + data.message, 7000); // Результат реєстрації (наприклад, токен)
    })
    .catch(error => {
      // Обробка помилки
      showMessage(`Помилка при оновленні: Неможливо з'єднатися з сервером`, 3000);
      console.error('Error updating offer:', error);
    });
}

export const createClientData = (data, whatOffer, priceOffer, offerLink, buttonPlace, itemPrice, message) => {
  // Встановлюємо поточний час за київським часом
  let kievTime = moment().tz('Europe/Kiev');
  if (!whatOffer) {
    whatOffer = 1
  }
  // Отримуємо години, хвилини, день, місяць та рік
  let hours = kievTime.format('HH');
  let minutes = kievTime.format('mm');
  let day = kievTime.format('DD');
  let month = kievTime.format('MM');
  let year = kievTime.format('YYYY');

  // Форматуємо дату та час у вигляді "години/дні/місяці/роки"
  let formattedDate = `${hours}:${minutes} ${day}/${month}/${year}`;

  fetch(`${serverApi}/api/clients/createClientData`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      offerLink,
      buttonPlace,
      clientName: data.customerName,
      clientPhone: data.customerPhone,
      offerConfirmation: 'Клієнт очікує дзвінок',
      clientOffer: whatOffer,
      offerDetails: itemPrice,
      offerComments: message,
      date: formattedDate
    })
  })
    .then(response => response.json())
    .then(data => {
      // Обробка відповіді сервера після реєстрації
      showMessage(data.message === undefined ? `Дякую, найближчим часом зв'яжимось із вами` : data.message, 5000); // Результат реєстрації (наприклад, токен)
    })
    .catch(error => {
      // Обробка помилок, якщо такі є
      showMessage(`Помилка при реєстрації: Неможливо з'єднатися з сервером`, 6000);
      console.error('Помилка при реєстрації:', error);
    });

}

export function getAllClientData(setCustomerDataFromServer) {
  const token = parseData('token')
  fetch(`${serverApi}/api/clients/getAllClientData`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    },
  })
    .then(response => response.json())
    .then(skills => {
      setCustomerDataFromServer(skills);
    })
    .catch(error => console.error(error));
}

export const getOneClientData = (setCustomerDataFromServer, clientPhone) => {
  // event.preventDefault();
  // event.stopPropagation();
  // const clientPhone = '939311710'
  const url = `${serverApi}/api/clients/getOneClientData/${clientPhone}`;

  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.json())
    .then(getOneCustomer => {
     return setCustomerDataFromServer(getOneCustomer);
    })
    .catch(error => {
      // Обробка помилки
      console.error('Error deleting offer:', error);
    });
}

export function updateClientData(
  clientEmail,
  clientTelegram,
  clientOffer,
  offerConfirmation,
  offerDetails,
  comment,
  index
) {
  const formData = new FormData();
  const token = parseData('token')

  formData.append('clientEmail', clientEmail);
  formData.append('clientTelegram', clientTelegram)
  formData.append('clientOffer', clientOffer);
  formData.append('offerConfirmation', offerConfirmation);
  formData.append('offerDetails', offerDetails);

  const url = `${serverApi}/api/clients/updateClientData/${index}`;

  fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`
    },
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      // Обробка успішного оновлення
      showMessage(data.message === undefined ? 'Апдейт успішний' : data.message, 7000); // Результат реєстрації (наприклад, токен)
    })
    .catch(error => {
      // Обробка помилки
      showMessage(`Помилка при оновленні: Неможливо з'єднатися з сервером`, 7000);
      console.error('Error updating offer:', error);
    });
}
export const deleteClientData = (index) => {
  // event.preventDefault();
  // event.stopPropagation()
  const url = `${serverApi}/api/clients/deleteClientData/${index}`;
  const token = parseData('token')

  fetch(url, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(data => {
      // Обробка успішного видалення
      console.log(data.message)
      showMessage(data.message + '! ПЕРЕЗАВАНТАЖ СТОРІНКУ!', 5000);
    })
    .catch(error => {
      // Обробка помилки
      console.error('Error deleting offer:', error);
    });
}



export const sendMessageToTelegram = (TOKEN, CHAT_ID, MESSAGE) => {
  fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: MESSAGE,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error('Error sending message:', error);
    });
}