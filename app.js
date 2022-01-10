const cardData = [
  {
    title: 'Profile Card',
    image: './Profile-Card/design/desktop-design.jpg',
    siteSrc: './Profile-Card/index.html',
    githubSrc:
      'https://github.com/Brian-E-Nguyen/frontend-mentor-challenges/tree/master/Profile-Card',
  },
];

// cardData.map((data, i) => {
//   var card = document.createElement('div');
//   card.innerHTML = (
//     <div class='challenge-card'>
//       <img
//         src='./Profile-Card/design/desktop-design.jpg'
//         class='challenge-card__banner'
//       />
//     </div>
//   );
//   document.getElementsByClassName('container')[0].appendChild(card);
//   console.log(i);
// });

cardData.forEach((data) => {
  var card = document.createElement('div');
  card.innerHTML =
    `<div class='challenge-card'>` +
    `<img  src='${data.image}' class='challenge-card__banner'/>` +
    `</div>`;
  document.getElementsByClassName('container')[0].appendChild(card);
});
