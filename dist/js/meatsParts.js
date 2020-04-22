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




class ChoosePart {
  constructor(front, back, meatPart, src1, src2) {
    this.front = front;
    this.back = back;
    this.meatPart = meatPart;
    this.src1 = src1;
    this.src2 = src2;
  }

  chooseMethod() {
    this.meatPart.addEventListener('click', (e) => {
      let elemfront = this.front.firstElementChild;
      let elemback = this.back.firstElementChild;
      this.front.removeChild(elemfront);
      this.back.removeChild(elemback);
    
      this.front.style.flexDirection = 'column';  
      let h3 = document.createElement('h3');
      let span = document.createElement('span');  
      h3.innerText = 'Рёбра';
      h3.style.fontSize = '2.5rem';  
      span.innerHTML = 'Ребрышки разрежьте так, чтобы на порцию приходилось по одному ребру. Если куски крупные и вы будете готовить мясо в духовке, можно предварительно отварить их в течение 15-30 минут. Я этого не делала. Положите мясо в соус, хорошо обмажьте каждый кусок и уберите в холодное место минимум на 30 минут для маринования.';
      span.style.fontSize = '1.5rem';
      span.style.width = '70%';
      h3.style.marginTop = '30px';
      h3.style.textShadow = '2px 4px 4px rgba(0, 0, 0, 1)';
      this.front.appendChild(h3);       
      this.front.appendChild(span);
    
    
      this.back.style.flexDirection = 'column';
      this.back.style.justifyContent = 'flex-end';
    
      let img1 = document.createElement('img');
      img1.style.width = '210px';
      img1.style.height = '210px';    
      img1.style.borderRadius = '50%';
      img1.style.alignSelf = 'flex-start';
      img1.style.margin = '0 0 30px 30px';
      img1.src = "../pict/" + this.src1;
      img1.style.boxShadow = '2px 4px 4px rgba(0, 0, 0, 1)';
      this.back.appendChild(img1);
    
      let img2 = document.createElement('img');
      img2.style.width = '210px';
      img2.style.height = '210px';  
      img2.style.borderRadius = '50%';
      img2.style.alignSelf = 'flex-end';
      img2.style.margin = '0 30px 30px 0';
      img2.src = "../pict/" + this.src2;
      img2.style.boxShadow = '2px 4px 4px rgba(0, 0, 0, 1)';
      this.back.appendChild(img2);     
    });        

  }


}


let rib = new ChoosePart(front, back, partrib, 'rib.jpg', 'ribcoock.jpg');
rib.chooseMethod();

let chuck = new ChoosePart(front, back, partchuck, 'chuck.jpg', 'chuckcoock.jpg');
chuck.chooseMethod();

let loin = new ChoosePart(front, back, partloin, 'shortlion.jpg', 'shortlioncoock.jpg');
loin.chooseMethod();

let sirloin = new ChoosePart(front, back, partsirloin, 'sirlion.jpg', 'sirlioncoock.jpg');
sirloin.chooseMethod();

let round = new ChoosePart(front, back, partround, 'round.jpg', 'roundcoock.jpg');
round.chooseMethod();

let flank = new ChoosePart(front, back, partflank, 'flank.jpg', 'flankcoock.jpg');
flank.chooseMethod();

let shortplate = new ChoosePart(front, back, partshortplate, 'shortplate.jpg', 'shortplatecoock.jpg');
shortplate.chooseMethod();

let foreshank = new ChoosePart(front, back, partforeshank, 'foreshank.jpg', 'foreshankcoock.jpg');
foreshank.chooseMethod();

let brisket = new ChoosePart(front, back, partbrisket, 'brisket.jpg', 'brisketcoock.jpg');
brisket.chooseMethod();
