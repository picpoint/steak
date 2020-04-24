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
const h3 = document.querySelector('.cstk__fronthdr');




class ChoosePart {
  constructor(front, back, meatPart, src1, src2, h3, hdr) {
    this.front = front;
    this.back = back;
    this.meatPart = meatPart;
    this.src1 = src1;
    this.src2 = src2;
    this.h3 = h3;
    this.hdr = hdr;
  }

  chooseMethod() {
    this.meatPart.addEventListener('click', (e) => {
      let elemfront = this.front.firstElementChild;
      let elemback = this.back.firstElementChild;

      console.log(typeof front);
      
    
      this.front.removeChild(elemfront);
      this.back.removeChild(elemback);
          
      this.front.style.flexDirection = 'column';        
      let span = document.createElement('span');  
      
      this.h3.innerText = this.hdr;
      this.h3.style.fontSize = '2.5rem';        
      this.h3.style.marginTop = '30px';
      this.h3.style.textShadow = '2px 4px 4px rgba(0, 0, 0, 1)';
      span.innerText = 'Ребрышки разрежьте так, чтобы на порцию приходилось по одному ребру. Если куски крупные и вы будете готовить мясо в духовке, можно предварительно отварить их в течение 15-30 минут.';
      span.style.fontSize = '1.5rem';
      span.style.width = '70%';                  
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


let rib = new ChoosePart(front, back, partrib, 'rib.jpg', 'ribcoock.jpg', h3, 'Рёбра');
rib.chooseMethod();

let chuck = new ChoosePart(front, back, partchuck, 'chuck.jpg', 'chuckcoock.jpg', h3, 'Грудинка');
chuck.chooseMethod();

let loin = new ChoosePart(front, back, partloin, 'shortlion.jpg', 'shortlioncoock.jpg', h3, 'Короткое филе');
loin.chooseMethod();

let sirloin = new ChoosePart(front, back, partsirloin, 'sirlion.jpg', 'sirlioncoock.jpg', h3, 'Филе');
sirloin.chooseMethod();

let round = new ChoosePart(front, back, partround, 'round.jpg', 'roundcoock.jpg', h3, 'Бедро');
round.chooseMethod();

let flank = new ChoosePart(front, back, partflank, 'flank.jpg', 'flankcoock.jpg', h3, 'Пашина');
flank.chooseMethod();

let shortplate = new ChoosePart(front, back, partshortplate, 'shortplate.jpg', 'shortplatecoock.jpg', h3, 'Брюшина');
shortplate.chooseMethod();

let foreshank = new ChoosePart(front, back, partforeshank, 'foreshank.jpg', 'foreshankcoock.jpg', h3, 'Голяшка');
foreshank.chooseMethod();

let brisket = new ChoosePart(front, back, partbrisket, 'brisket.jpg', 'brisketcoock.jpg', h3, 'Грудина');
brisket.chooseMethod();
