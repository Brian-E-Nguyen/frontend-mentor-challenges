const cardData = [
  {
    title: 'Profile Card',
    image: './Profile-Card/design/desktop-design.jpg',
    siteSrc: './Profile-Card/index.html',
    githubSrc:
      'https://github.com/Brian-E-Nguyen/frontend-mentor-challenges/tree/master/Profile-Card',
  },
  {
    title: 'Three Column Card',
    image: './Three-Column-Card/design/desktop-design.jpg',
    siteSrc: './Three-Column-Card/index.html',
    githubSrc:
      'https://github.com/Brian-E-Nguyen/frontend-mentor-challenges/tree/master/Three-Column-Card',
  },
];

cardData.forEach((data) => {
  var card = document.createElement('div');
  card.innerHTML = ` 
  <div class="challenge-card">
    <img
      src='${data.image}'
      class="challenge-card__banner"
    />
    <div class="challenge-card__container">
      <h1 class="challenge-card__title">${data.title}</h1>
      <p>
        <span class="challenge-card__language--html">HTML</span>
        <span class="challenge-card__language--css">CSS</span>
      </p>
      <a class="challenge-card__link" href="${data.siteSrc}">
        <button
          class="challenge-card__button challenge-card__button--example"
        >
          <img
            class="challenge-card__button--image"
            src="./assets/link.png"
            alt=""
          />
        </button>
      </a>
      <a
        class="challenge-card__link"
        href="${data.githubSrc}"
        target="_blank"
      >
        <button
          class="challenge-card__button challenge-card__button--github"
        >
          <img
            class="challenge-card__button--image"
            src="./assets/github.png"
            alt=""
          />
        </button>
      </a>
    </div>
  </div>`;
  document.getElementsByClassName('container')[0].appendChild(card);
});
