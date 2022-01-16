/**
 *
 * @returns data from data.json file
 */
const retrieveData = async () => {
  const response = await fetch('./data.json');
  const data = await response.json();
  return data;
};

/**
 * Populates non-numeric data from data.json file
 */
const populateStaticData = async () => {
  const data = await retrieveData();
  const titles = document.getElementsByClassName('stat-card__title');
  for (let i = 0; i < titles.length; i++) {
    titles[i].innerText = `${data[i].title}`;
  }
};

/**
 * Displays data on card
 *
 * @param {*} currentData
 * @param {*} previousData
 * @param {*} i
 */
const displayData = async (currentData, previousData, i) => {
  let currentTime = document.getElementsByClassName('stat-card__time')[i];
  let previousTime = document.getElementsByClassName(
    'stat-card__previous-time'
  )[i];
  currentTime.innerText = currentData + 'hrs';
  previousTime.innerText = `Last week - ${previousData}hrs`;
};

/**
 * Retrieves daily data and passes them to displayData() function
 */
const populateDailyData = async () => {
  const data = await retrieveData();
  for (let i = 0; i < data.length; i++) {
    const currentData = data[i].timeframes.daily.current;
    const previousData = data[i].timeframes.daily.previous;
    displayData(currentData, previousData, i);
  }
};

/**
 * Retrieves weekly data and passes them to displayData() function
 */
const populateWeeklyData = async () => {
  const data = await retrieveData();
  for (let i = 0; i < data.length; i++) {
    const currentData = data[i].timeframes.weekly.current;
    const previousData = data[i].timeframes.weekly.previous;
    displayData(currentData, previousData, i);
  }
};

/**
 * Retrieves monthly data and passes them to displayData() function
 */
const populateMonthlyData = async () => {
  const data = await retrieveData();
  for (let i = 0; i < data.length; i++) {
    const currentData = data[i].timeframes.monthly.current;
    const previousData = data[i].timeframes.monthly.previous;
    displayData(currentData, previousData, i);
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
