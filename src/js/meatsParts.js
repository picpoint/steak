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
const span = document.querySelector('.cstk__frontdesc');




class ChoosePart {
  constructor(front, back, partMeat, h3, span, img1, img2) {
    this.front = front;
    this.back = back;
    this.partMeat = partMeat;
    this.h3 = h3;
    this.span = span;
    this.img1 = img1;
    this.img2 = img2;    
  }

  chooseMethod() {
    this.partMeat.addEventListener('click', () => {
      let part;
      let recipe;
      if(this.partMeat == partrib) {
        part = 'Рёбра';
        recipe = 'Ребрышки разрежьте так, чтобы на порцию приходилось по одному ребру. Если куски крупные и вы будете готовить мясо в духовке, можно предварительно отварить их в течение 15-30 минут.';
      } else if(this.partMeat == partchuck) {
        part = 'Лопатка';
        recipe = 'Смазать мясо растительным маслом, сбрызнуть белым винным уксусом. Посолить и поперчить со всех сторон.';
      } else if(this.partMeat == partloin) {
        part = 'Короткое филе';
        recipe = 'Смажьте филе маслом и посыпьте приправами, чтобы покрыть его равномерно со всех сторон. Выложите в форму для запекания и готовьте 20–25 минут при температуре 200 °С.';
      } else if(this.partMeat == partsirloin) {
        part = 'Филе';
        recipe = ' Сложите в миску и добавьте измельчённые чеснок и лук. Посолите, поперчите, посыпьте паприкой и базиликом, выложите в форму вместе с маринадом. Запекайте  при температуре 200 °С примерно 45 минут.';
      } else if(this.partMeat == partround) {
        part = 'Бедро';
      } else if(this.partMeat == partflank) {
        part = 'Пашина';
      } else if(this.partMeat == partshortplate) {
        part = 'Брюшина';
      } else if(this.partMeat == partforeshank) {
        part = 'Голяшка';
      } else if(this.partMeat == partbrisket) {
        part = 'Грудина';
      }

      this.h3.innerText = part;
      this.span.innerText = recipe;
    });
  }
  
}




let rib = new ChoosePart(front, back, partrib, h3, span, 'rib.jpg', 'ribcoock.jpg');
rib.chooseMethod();

let chuck = new ChoosePart(front, back, partchuck, h3, span, 'chuck.jpg', 'chuckcoock.jpg');
chuck.chooseMethod();

let loin = new ChoosePart(front, back, partloin, h3, span, 'shortlion.jpg', 'shortlioncoock.jpg');
loin.chooseMethod();

let sirloin = new ChoosePart(front, back, partsirloin, h3, span, 'sirlion.jpg', 'sirlioncoock.jpg');
sirloin.chooseMethod();

let round = new ChoosePart(front, back, partround, h3, span, 'round.jpg', 'roundcoock.jpg');
round.chooseMethod();

let flank = new ChoosePart(front, back, partflank, h3, span, 'flank.jpg', 'flankcoock.jpg');
flank.chooseMethod();

let shortplate = new ChoosePart(front, back, partshortplate, h3, span, 'shortplate.jpg', 'shortplatecoock.jpg');
shortplate.chooseMethod();

let foreshank = new ChoosePart(front, back, partforeshank, h3, span, 'foreshank.jpg', 'foreshankcoock.jpg');
foreshank.chooseMethod();

let brisket = new ChoosePart(front, back, partbrisket, h3, span, 'brisket.jpg', 'brisketcoock.jpg');
brisket.chooseMethod();
