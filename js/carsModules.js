import { CarCards } from '../components/carCards/carCards.js';
import { loadCarCards } from '../components/carCards/carCards.js';

document.getElementById('carCardsWrapper').innerHTML = CarCards({});

await loadCarCards({});
