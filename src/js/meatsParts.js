const partrib = document.querySelector('.cstk__partrib');
const partchuck = document.querySelector('.cstk__partchuck');
const partloin = document.querySelector('.cstk__partloin');
const partsirloin = document.querySelector('.cstk__partsirloin');
const partround = document.querySelector('.cstk__partround');
const partflank = document.querySelector('.cstk__partflank');
const partshortplate = document.querySelector('.cstk__partshortplate');
const partforeshank = document.querySelector('.cstk__partforeshank');
const partbrisket = document.querySelector('.cstk__partbrisket');
const front = document.querySelector('.cstk__front');
const back = document.querySelector('.cstk__back');





partrib.addEventListener('click', () => {
  let elemfront = front.firstElementChild;
  let elemback = back.firstElementChild;
  front.removeChild(elemfront);
  back.removeChild(elemback);

  let h3 = document.createElement('h3');
  h3.innerText = 'Рёбра';
  h3.style.fontSize = '2rem';
  h3.style.textShadow = '2px 4px 4px rgba(0, 0, 0, 1)';
  front.appendChild(h3);       

  let spanBack = document.createElement('span');
  spanBack.innerText = 'Good chouse';
  back.appendChild(spanBack);


});

