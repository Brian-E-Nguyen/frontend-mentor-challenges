const retrieveData = async () => {
  const response = await fetch('./data.json');
  const data = await response.json();
  return data;
};

const populateStaticData = async () => {
  const data = await retrieveData();
  const cards = document.getElementsByClassName('stat-card');
  for (let i = 0; i < cards.length; i++) {
    cards[i].innerHTML = `<h1 class="stat-card__title">${data[i].title}</h1>`;
  }
};

populateStaticData();
