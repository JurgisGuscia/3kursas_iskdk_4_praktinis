import { CarInfo } from '../components/carInfo/carInfo.js';
document.getElementById('carInfoContent').innerHTML = CarInfo();

const params = new URLSearchParams(window.location.search);
const carId = Number(params.get('id'));
async function loadCarInfo() {
  const container = document.querySelector('#carInfoContent');

  try {
    const response = await fetch('./data/cars.json');

    if (!response.ok) {
      throw new Error('Nepavyko užkrauti automobilių duomenų');
    }

    const data = await response.json();

    const car = data.find((car) => car.id === carId);

    if (!car || !params.has('id')) {
      container.innerHTML = '<h2>Automobilis nerastas</h2>';
      return;
    }

    // Main car information
    container.querySelector('.headImage').src = car.image;
    container.querySelector('.headImage').alt = car.name;

    container.querySelector('.infoHeader h3').textContent = car.name;

    container.querySelector('.infoHeader span').textContent = `nuo ${car.monthlyPrice} € / mėn.`;

    container.querySelector('p').textContent = car.description;

    // Technical specifications
    const details = container.querySelectorAll('.detailCard .botRow');

    details[0].textContent = car.fuel;
    details[1].textContent = car.transmission;
    details[2].textContent = `${car.powerKw} kW (${car.powerHp} AG)`;
  } catch (error) {
    console.error('Klaida:', error);
    container.innerHTML = '<h2>Nepavyko užkrauti automobilio informacijos</h2>';
  }
}

loadCarInfo();
