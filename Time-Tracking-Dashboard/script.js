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
 * @param {*} timeframe
 * @param {*} i
 */
const displayData = async (currentData, previousData, timeframe, i) => {
  let currentTime = document.getElementsByClassName('stat-card__time')[i];
  let previousTime = document.getElementsByClassName(
    'stat-card__previous-time'
  )[i];
  currentTime.innerText = currentData + 'hrs';
  previousTime.innerText = `${timeframe} - ${previousData}hrs`;
};

/**
 * Retrieves daily data and passes them to displayData() function
 */
const populateDailyData = async () => {
  removeButtonActiveClass();
  const dailyButton = document.getElementById('btn-daily');
  dailyButton.classList.add('active');

  const data = await retrieveData();
  const timeframe = 'Yesterday';
  for (let i = 0; i < data.length; i++) {
    const currentData = data[i].timeframes.daily.current;
    const previousData = data[i].timeframes.daily.previous;
    displayData(currentData, previousData, timeframe, i);
  }
};

/**
 * Retrieves weekly data and passes them to displayData() function
 */
const populateWeeklyData = async () => {
  removeButtonActiveClass();
  const weeklyButton = document.getElementById('btn-weekly');
  weeklyButton.classList.add('active');

  const data = await retrieveData();
  const timeframe = 'Last Week';
  for (let i = 0; i < data.length; i++) {
    const currentData = data[i].timeframes.weekly.current;
    const previousData = data[i].timeframes.weekly.previous;
    displayData(currentData, previousData, timeframe, i);
  }
};

/**
 * Retrieves monthly data and passes them to displayData() function
 */
const populateMonthlyData = async () => {
  removeButtonActiveClass();
  const monthlyButton = document.getElementById('btn-monthly');
  monthlyButton.classList.add('active');

  const data = await retrieveData();
  const timeframe = 'Last Month';
  for (let i = 0; i < data.length; i++) {
    const currentData = data[i].timeframes.monthly.current;
    const previousData = data[i].timeframes.monthly.previous;
    displayData(currentData, previousData, timeframe, i);
  }
};

/**
 * Removes buttons' "active" class when user clicks on a button
 */
const removeButtonActiveClass = () => {
  const timeframeButtons = document.getElementsByClassName('btn-stat');
  for (let i = 0; i < timeframeButtons.length; i++) {
    timeframeButtons[i].classList.remove('active');
  }
};

/**
 * Generates stat cards when the page is loaded
 */
const generateCards = async () => {
  const data = await retrieveData();
  for (let i = 0; i < data.length; i++) {
    let card = document.createElement('div');
    card.classList.add('stat-card');
    card.setAttribute('id', data[i].title.toLowerCase());
    card.innerHTML = `<div class="stat-card__container">
                          <div>
                            <h1 class="stat-card__title"></h1>
                            <img src="/images/icon-ellipsis.svg" class="stat-card__ellipse" alt="">
                          </div>
                        <h2 class="stat-card__time"></h2>
                        <h3 class="stat-card__previous-time"></h3>
                      </div>`;
    document.getElementsByClassName('grid-container')[0].appendChild(card);
  }
};
generateCards();
populateStaticData();
populateDailyData();

const dailyButton = document.getElementById('btn-daily');
const weeklyButton = document.getElementById('btn-weekly');
const monthlyButton = document.getElementById('btn-monthly');
dailyButton.addEventListener('click', populateDailyData);
weeklyButton.addEventListener('click', populateWeeklyData);
monthlyButton.addEventListener('click', populateMonthlyData);
