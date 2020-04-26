const partrib = document.querySelector('.cstk__partrib');                                                 // область рёбра
const partchuck = document.querySelector('.cstk__partchuck');                                             // область лопатка
const partloin = document.querySelector('.cstk__partloin');                                               // область филе
const partsirloin = document.querySelector('.cstk__partsirloin');                                         // область коротко филе
const partround = document.querySelector('.cstk__partround');                                             // область бедро
const partflank = document.querySelector('.cstk__partflank');                                             // область пашина
const partshortplate = document.querySelector('.cstk__partshortplate');                                   // область брюшина
const partforeshank = document.querySelector('.cstk__partforeshank');                                     // область голяшка
const partbrisket = document.querySelector('.cstk__partbrisket');                                         // область грудина
const front = document.querySelector('.cstk__front');                                                     // разделочная доска лицевая сторона 
const back = document.querySelector('.cstk__back');                                                       // разделочная доска задняя сторона 
const h3 = document.querySelector('.cstk__fronthdr');                                                     // текст заголовка мясной части
const span = document.querySelector('.cstk__frontdesc');                                                  // текст рецепта




class ChoosePart {                                                                                        // класс для выбора части
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
    this.partMeat.addEventListener('click', () => {                                                       // вешаем событие по клику
      let part;
      let recipe;
      
      let pict1 = this.back.firstElementChild;                                                            // картинка сырого мяса
      let pict2 = this.back.lastElementChild;                                                             // картинка готового
      pict1.src = '../pict/' + this.img1;
      pict2.src = '../pict/' + this.img2;      

      if(this.partMeat == partrib) {                                                                      // если выбран тот или иной кусок, подставляем нужную инфу
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
        recipe = 'Смазывайте бедрышки жиром два раза через 10 минут и еще один раз через 5 минут. Итого мясо у вас будет готовиться 35 минут. Включите верхний гриль на максимальную температуру. Поднимите противень на верхнюю полку и запекайте 2 часа. ';
      } else if(this.partMeat == partflank) {
        part = 'Пашина';
        recipe = 'Рулет будет запекаться, поэтому его нужно завернуть в пищевую фольгу и выложить на решетку или в форму для запекания. В духовке рулет должен запекаться около 2 часов при средней температуре.';
      } else if(this.partMeat == partshortplate) {
        part = 'Брюшина';
        recipe = 'Решётку поставить в противень, накрыв сверху фольгой. (чтобы решетка не касалась воды). Запекать 1,5 часа при температуре 180 градусов. Затем снять фольгу, перевернуть брюшину, полить маринадом с противня и запекать ещё 20-30 мин. В режиме конвекции. Приятного аппетита.';
      } else if(this.partMeat == partforeshank) {
        part = 'Голяшка';
        recipe = 'Смешиваем горчицу, сметану, перец, обмазываем, укладываем её в кастрюльку, накрываем крышкой и в холодильник на сутки. Достаём за пол часа до запекания, хорошенько ещё раз обмажем её тем маринадом, в котором она была, солим, посыпаем зернами горчицы. Готовить будем в мешке для запекания(рукаве).';
      } else if(this.partMeat == partbrisket) {
        part = 'Грудина';
        recipe = 'Разогреваем духовку и отправляем в нее запекаться грудинку при температуре примерно 200 градусах. Расчет времени составляет один час на один кг. мяса. Если Ваш кусок грудинки весит 2 кг, соответственно, засекаем два часа времени.';
      }

      this.h3.innerText = part;                                                                              // присваиваем заголовку нужную текстовую инфу
      this.span.innerText = recipe;                                                                          // присваиваем спану нужный рецепт
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
