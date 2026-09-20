'use strict';

// ---------- DOM ----------
const button = document.getElementById('get-coords-btn');
const spinner = document.getElementById('spinner');
const resultBox = document.getElementById('result');
const errorBox = document.getElementById('error');
const errorText = document.getElementById('error-text');
const latEl = document.getElementById('lat');
const lngEl = document.getElementById('lng');
const accuracyEl = document.getElementById('accuracy');
const mapLink = document.getElementById('map-link');

// ---------- Geolocation API → Promise ----------
function getPosition(options = { enableHighAccuracy: true, timeout: 10000 }) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position), // успех  → fulfilled
      (error) => reject(error), // отказ  → rejected
      options,
    );
  });
}

// ---------- UI-функции ----------
function resetUI() {
  resultBox.classList.add('hidden');
  errorBox.classList.add('hidden');
}

function showSpinner() {
  spinner.classList.remove('hidden');
  button.disabled = true;
}

function hideSpinner() {
  spinner.classList.add('hidden');
  button.disabled = false;
}

function showResult(position) {
  const { latitude, longitude, accuracy } = position.coords;

  latEl.textContent = latitude.toFixed(6);
  lngEl.textContent = longitude.toFixed(6);
  accuracyEl.textContent = Math.round(accuracy);
  mapLink.href = `https://maps.google.com/?q=${latitude},${longitude}`;

  resultBox.classList.remove('hidden');
}

function getErrorMessage(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      return 'Пользователь запретил доступ к геолокации';
    case error.POSITION_UNAVAILABLE:
      return 'Информация о местоположении недоступна';
    case error.TIMEOUT:
      return 'Превышено время ожидания координат';
    default:
      return error.message || 'Неизвестная ошибка';
  }
}

function showError(message) {
  errorText.textContent = '❌ ' + message;
  errorBox.classList.remove('hidden');
}

// ---------- Обработчик кнопки ----------
button.addEventListener('click', function () {
  resetUI();
  showSpinner();

  getPosition()
    .then(function (position) {
      const { latitude, longitude } = position.coords;
      console.log(`Широта: ${latitude}, Долгота: ${longitude}`); // по условию ДЗ
      showResult(position);
    })
    .catch(function (error) {
      console.error('Ошибка геолокации:', error.message);
      showError(getErrorMessage(error));
    })
    .finally(function () {
      hideSpinner(); // спиннер убираем при любом исходе
    });
});
