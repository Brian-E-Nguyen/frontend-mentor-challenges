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

const populateWeeklyData = async () => {
  const data = await retrieveData();
  const cards = document.getElementsByClassName('stat-card');
  for (let i = 0; i < cards.length; i++) {
    const currentData = data[i].timeframes.weekly.current;
    const previousData = data[i].timeframes.weekly.previous;
    cards[i].innerHTML = `<h1 class="stat-card__time">${currentData}hrs</h1>
        <div class="stat-card__previous-time">Last Week - ${previousData}hrs</div>`;
  }
};

const populateMonthlyData = async () => {
  const data = await retrieveData();
  const cards = document.getElementsByClassName('stat-card');
  for (let i = 0; i < cards.length; i++) {
    const currentData = data[i].timeframes.monthly.current;
    const previousData = data[i].timeframes.monthly.previous;
    cards[i].innerHTML = `<h1 class="stat-card__time">${currentData}hrs</h1>
        <div class="stat-card__previous-time">Last Week - ${previousData}hrs</div>`;
  }
};

populateStaticData();
populateDailyData();

const dailyButton = document.getElementById('btn-daily');
const weeklyButton = document.getElementById('btn-weekly');
const monthlyButton = document.getElementById('btn-monthly');
dailyButton.addEventListener('click', populateDailyData);
weeklyButton.addEventListener('click', populateWeeklyData);
monthlyButton.addEventListener('click', populateMonthlyData);
