window.addEventListener('DOMContentLoaded', domLoaded);

function domLoaded() {
  const button = document.getElementById('convertButton');
  const cInput = document.getElementById('cInput');
  const fInput = document.getElementById('fInput');
  const errorText = document.getElementById('errorMessage');
  const weatherImage = document.getElementById('weatherImage');

  function ConvertTemp() {
    const celcius = cInput.value.trim();
    const fahrenheit = fInput.value.trim();
    if (hasInvalidTemp(celcius, fahrenheit)) return;
    cInput.value = fahrenheit ? convertFtoC(fahrenheit) : celcius;
    fInput.value = celcius ? convertCtoF(celcius) : fahrenheit;
    showWeatherImage(fInput.value);
  }

  function showWeatherImage(temp) {
    if (temp > 50) weatherImage.src = 'images/warm.png';
    else if (temp >= 32) weatherImage.src = 'images/cool.png';
    else weatherImage.src = 'images/cold.png';
  }

  function hasInvalidTemp(cel, fahr) {
    if (isNaN(cel + fahr) || cel + fahr === '') {
      errorText.innerText = `${cel + fahr} is not a number`;
      return true;
    }
    errorText.innerText = '';
    return false;
  }

  cInput.addEventListener('input', () => (fInput.value = ''));
  fInput.addEventListener('input', () => (cInput.value = ''));
  button.addEventListener('click', ConvertTemp);
}

const convertCtoF = degCelsius => (degCelsius * 9) / 5 + 32;

const convertFtoC = degFahrenheit => ((degFahrenheit - 32) * 5) / 9;
