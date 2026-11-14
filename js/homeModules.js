import { CarCards } from '../components/carCards/carCards.js';
import { loadCarCards } from '../components/carCards/carCards.js';
import { PriceComparison } from '../components/priceComparison/priceComparison.js';

document.getElementById('carCardsWrapper').innerHTML = CarCards({ page: 'home' });
document.getElementById('priceComparison').innerHTML = PriceComparison();

await loadCarCards({ page: 'home', limit: 6 });
