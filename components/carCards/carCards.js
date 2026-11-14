export function CarCards({ page = '' }) {
  return `
    <div class="carListWrapperHeader">
        <div class="cardListWrapperHeaderLeft">${page == 'home' ? 'Atrinkti pasiūlymai' : 'Siūlomi automobiliai'}</div>
        <div class="cardListWrapperHeaderRight">
            ${page == 'home' ? "<a href='cars.html'>Peržiūrėti visus pasiūlymus <span class='contactArrow'>→</span></a>" : ''}
        </div>
    </div>
    <div id="cardListWrapper" class="cardListWrapper">
        
    </div>
    `;
}

const response = await fetch('../data/cars.json');
const data = await response.json();

export async function loadCarCards({ page, limit } = {}) {
  let formattedList = data;
  if (page == 'home') {
    formattedList = data
      .filter((car) => car.popular == true)
      .sort((a, b) => b.monthlyPrice - a.monthlyPrice)
      .slice(0, limit);
  }
  const container = document.querySelector('#cardListWrapper');
  container.innerHTML = formattedList
    .map(
      (car) => `
        <div class="carCard" onclick="window.location.href='carInfo.html?id=${car.id}'">
            ${car.popular ? `<div class="popularCar">Populiariusias</div>` : ''}
            <img src="${car.image}" rel="audi">
            <div class="carCardBottom">
                <div class="carCardBotRow">
                    <div class="carCardName">${car.name}</div>
                    <div class="carCardPrice"> ${car.monthlyPrice} € / mėn.</div>
                </div>
                <div class="carCardBotRow">
                    <div class="carCardGas">
                        <img src="./icons/gas.png" rel="gas station">
                        <span class="">${car.fuel}</span>
                    </div>
                    <div class="carCardGearbox">
                        <img src="./icons/gearbox.png" rel="gear box">
                        <span class="">${car.transmission}</span>
                    </div>
                    <div class="carCardPower">
                        <img src="./icons/engine.png" rel="engine">
                        <span class="">${car.powerKw} kW (${car.powerHp} AG)</span>
                    </div>
                </div>
                <div class="carCardBotRow">
                    <span class="carCardLink">Peržiūrėti pasiūlymą<span class="contactArrow">→</span></span>
                </div>
            </div>    
        </div>
        `,
    )
    .join('');
}
