import quotes from './src/data/quotes.js';
import { handleQuote } from './src/handlers/quote.js';
import { toggleFavorite, hideFavoriteBtn } from './src/handlers/favorite.js';

export let currentQuote = null;

function setCurrentQuote(quote) {
  currentQuote = quote;
}

const quoteFavoriteBtn = document.getElementById('quote-favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');
hideFavoriteBtn();
quoteFavoriteBtn.addEventListener('click', () =>
  toggleFavorite(currentQuote, quoteFavoriteBtn, favoritesContainer),
);

const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', () =>
  handleQuote(quotes, setCurrentQuote),
);

export { quoteFavoriteBtn };
