document.getElementById('main-action-button').onclick = function () {
  document.getElementById('products').scrollIntoView({behavior: "smooth"});
};

const links = document.querySelectorAll('.menu-item > a');
for (let i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    document.getElementById(links[i].getAttribute('data-link')).scrollIntoView({behavior: "smooth"});
  };
}

const burger = document.getElementById('burger');
const name = document.getElementById('name');
const phone = document.getElementById('phone');

const buttons = document.getElementsByClassName('product-button');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    document.getElementById('order').scrollIntoView({behavior: "smooth"});
    let title = buttons[i].closest('.products-item').querySelector('.products-item-title').innerText;
    burger.value = title;
  };
}

document.getElementById('order-form-action').onclick = function (event) {
  event.preventDefault();
  let hasError = false;

  [burger, name, phone].forEach(item => {
    if (!item.value) {
      item.parentElement.style.background = 'red';
      hasError = true;
    } else {
      item.parentElement.style.background = '';
    }
  });

  if (!hasError) {
    [burger, name, phone].forEach(item => {
      item.value = '';
    });
    alert('Спасибо за заказ! Мы скоро свяжемся с вами!');
  }
};

const prices = document.getElementsByClassName('products-item-price');

document.getElementById('change-currency').onclick = function (e) {
  let currentCurrency = e.target.innerText;
  let newCurrency;
  let coeff;

  switch(currentCurrency) {
    case '$':
      newCurrency = '₽';
      coeff = 90;
      break;
    case '₽':
      newCurrency = 'BYN';
      coeff = 3;
      break;
    case 'BYN':
      newCurrency = '€';
      coeff = 1.2;
      break;
    case '€':
      newCurrency = '¥';
      coeff = 5;
      break;
    default:
      newCurrency = '$';
      coeff = 1;
  }

  e.target.innerText = newCurrency;

  for (let i = 0; i < prices.length; i++) {
    prices[i].innerText = +(prices[i].getAttribute('data-base-price') * coeff).toFixed(1) + ' ' + newCurrency;
  }
};

document.querySelector('.linkToTop').style.cursor = 'pointer';
document.querySelector('.linkToTop').onclick = function () {
  document.getElementById('main').scrollIntoView({behavior: "smooth"});
}