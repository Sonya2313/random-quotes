function toggleFavoriteIcon(isFavorite, el) {
  el.classList.toggle('fa', isFavorite);
  el.classList.toggle('far', !isFavorite);
}

function showFavoriteCard(quote, author, container) {
  const favoriteCards = container.querySelectorAll('.favorite-card');

  for (const card of favoriteCards) {
    if (card.dataset.quote === quote) {
      return;
    }
  }

  const favoriteCard = document.createElement('div');
  favoriteCard.classList.add('favorite-card');
  favoriteCard.dataset.quote = quote;

  favoriteCard.innerHTML = `
    <p>${quote}</p>
    <p class="author">${author}</p>
  `;

  container.appendChild(favoriteCard);
}

function hideFavoriteCard(quote, container) {
  const favoriteCards = container.querySelectorAll('.favorite-card');

  favoriteCards.forEach((card) => {
    if (card.dataset.quote === quote) {
      card.remove();
    }
  });
}

export { toggleFavoriteIcon, showFavoriteCard, hideFavoriteCard };
