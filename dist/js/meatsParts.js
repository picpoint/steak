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




class choosePart {
  constructor(front, back) {
    this.front = front;
    this.back = back;
  }

  chooseMethod() {

  }
}



partrib.addEventListener('click', (e) => {
  let elemfront = front.firstElementChild;
  let elemback = back.firstElementChild;
  front.removeChild(elemfront);
  back.removeChild(elemback);

  front.style.flexDirection = 'column';  
  let h3 = document.createElement('h3');
  let span = document.createElement('span');  
  h3.innerText = 'Рёбра';
  h3.style.fontSize = '2.5rem';  
  span.innerHTML = 'Ребрышки разрежьте так, чтобы на порцию приходилось по одному ребру. Если куски крупные и вы будете готовить мясо в духовке, можно предварительно отварить их в течение 15-30 минут. Я этого не делала. Положите мясо в соус, хорошо обмажьте каждый кусок и уберите в холодное место минимум на 30 минут для маринования.';
  span.style.fontSize = '1.5rem';
  span.style.width = '70%';
  h3.style.marginTop = '30px';
  h3.style.textShadow = '2px 4px 4px rgba(0, 0, 0, 1)';
  front.appendChild(h3);       
  front.appendChild(span);


  back.style.flexDirection = 'column';
  back.style.justifyContent = 'flex-end';

  let img1 = document.createElement('img');
  img1.style.width = '210px';
  img1.style.height = '210px';    
  img1.style.borderRadius = '50%';
  img1.style.alignSelf = 'flex-start';
  img1.style.margin = '0 0 30px 30px';
  img1.src="../pict/rib.jpg";
  img1.style.boxShadow = '2px 4px 4px rgba(0, 0, 0, 1)';
  back.appendChild(img1);

  let img2 = document.createElement('img');
  img2.style.width = '210px';
  img2.style.height = '210px';  
  img2.style.borderRadius = '50%';
  img2.style.alignSelf = 'flex-end';
  img2.style.margin = '0 30px 30px 0';
  img2.src="../pict/ribcoock.jpg";
  img2.style.boxShadow = '2px 4px 4px rgba(0, 0, 0, 1)';
  back.appendChild(img2); 

});



