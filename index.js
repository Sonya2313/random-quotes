import quotes from './src/data/quotes.js';
import {
  handleQuote,
  displayQuote,
  findQuoteById,
} from './src/handlers/quote.js';
import {
  toggleFavorite,
  hideFavoriteBtn,
  showFavoriteCard,
} from './src/handlers/favorite.js';
import {
  localStorageGetitem,
  localStorageSetItem,
} from './src/utils/localStorage.js';

const CURRENT_QUOTE_KEY = 'currentQuote';
const FAVORITE_QUOTES_KEY = 'favoriteQuotes';

export let currentQuote = null;
const favoriteQuotes = [];

function setCurrentQuote(quote, shouldToggleIsFavorite = false) {
  if (shouldToggleIsFavorite) {
    quote.isFavorite = !quote.isFavorite;
    if (quote.isFavorite) {
      favoriteQuotes.push({ ...quote });
    } else {
      const index = favoriteQuotes.findIndex(
        (favoriteQuotes) => favoriteQuotes.id === quote.id,
      );
      if (index !== -1) {
        favoriteQuotes.splice(index, 1);
      }
    }
    localStorageSetItem(FAVORITE_QUOTES_KEY, favoriteQuotes);
  }
  currentQuote = quote;
  localStorageSetItem(CURRENT_QUOTE_KEY, quote);
}

const quoteFavoriteBtn = document.getElementById('quote-favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');
hideFavoriteBtn();
quoteFavoriteBtn.addEventListener('click', () =>
  toggleFavorite(currentQuote, setCurrentQuote, favoritesContainer),
);

const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', () =>
  handleQuote(quotes, favoriteQuotes, setCurrentQuote),
);

function init() {
  const currentQuoteFromStorage = localStorageGetitem(CURRENT_QUOTE_KEY);

  if (currentQuoteFromStorage) {
    displayQuote(currentQuoteFromStorage);
    const quote = findQuoteById(quotes, currentQuoteFromStorage.id);
    quote.isFavorite = currentQuoteFromStorage.isFavorite;
    currentQuote = quote;
  }

  const favoriteQuotesFromStorage = localStorageGetitem(FAVORITE_QUOTES_KEY);
  if (favoriteQuotesFromStorage) {
    favoriteQuotesFromStorage.forEach((quote) => {
      showFavoriteCard(quote, setCurrentQuote, favoritesContainer);
      favoriteQuotes.push(quote);
    });
  }
}

window.addEventListener('load', init);
export { quoteFavoriteBtn };
