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

const populateDailyData = async () => {
  const data = await retrieveData();
  const cards = document.getElementsByClassName('stat-card');
  for (let i = 0; i < cards.length; i++) {
    const currentData = data[i].timeframes.daily.current;
    const previousData = data[i].timeframes.daily.previous;
    cards[i].innerHTML = `<h1 class="stat-card__time">${currentData}hrs</h1>
        <div class="stat-card__previous-time">Last Week - ${previousData}hrs</div>`;
  }
};

populateStaticData();
populateDailyData();

const dailyButton = document.getElementById('btn-daily');
dailyButton.addEventListener('click', populateDailyData);
