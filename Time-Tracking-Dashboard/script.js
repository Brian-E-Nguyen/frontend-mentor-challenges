const retrieveData = async () => {
  const response = await fetch('./data.json');
  const data = await response.json();
  return data;
};

const populateStaticData = async () => {
  const data = await retrieveData();
  const titles = document.getElementsByClassName('stat-card__title');
  for (let i = 0; i < titles.length; i++) {
    titles[i].innerText = `${data[i].title}`;
  }
};

const populateDailyData = async () => {
  const data = await retrieveData();
  const cards = document.getElementsByClassName('stat-card');
  for (let i = 0; i < cards.length; i++) {
    const currentData = data[i].timeframes.daily.current;
    const previousData = data[i].timeframes.daily.previous;

    let currentTime = document.getElementsByClassName('stat-card__time')[i];
    let previousTime = document.getElementsByClassName(
      'stat-card__previous-time'
    )[i];
    currentTime.innerText = currentData + 'hrs';
    previousTime.innerText = `Last week - ${previousData}hrs`;
  }
};

const populateWeeklyData = async () => {
  const data = await retrieveData();
  const cards = document.getElementsByClassName('stat-card');
  for (let i = 0; i < cards.length; i++) {
    const currentData = data[i].timeframes.weekly.current;
    const previousData = data[i].timeframes.weekly.previous;

    let currentTime = document.getElementsByClassName('stat-card__time')[i];
    let previousTime = document.getElementsByClassName(
      'stat-card__previous-time'
    )[i];
    currentTime.innerText = currentData + 'hrs';
    previousTime.innerText = `Last week - ${previousData}hrs`;
  }
};

const populateMonthlyData = async () => {
  const data = await retrieveData();
  const cards = document.getElementsByClassName('stat-card');
  for (let i = 0; i < cards.length; i++) {
    const currentData = data[i].timeframes.monthly.current;
    const previousData = data[i].timeframes.monthly.previous;

    let currentTime = document.getElementsByClassName('stat-card__time')[i];
    let previousTime = document.getElementsByClassName(
      'stat-card__previous-time'
    )[i];
    currentTime.innerText = currentData + 'hrs';
    previousTime.innerText = `Last week - ${previousData}hrs`;
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
