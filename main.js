//РИСОВАЛКА В КВАДРАТЕ
var body = document.querySelector('body');

var btn = document.createElement("button");
btn.className = "btnS";
btn.innerHTML = "Сброс";
body.appendChild(btn);

var gridd = document.createElement("div");
body.appendChild(gridd);
gridd.className = "box";

//количество пикселей
var numberPoint = 40;
gridd.style.setProperty('--point', numberPoint);

//заполнение квадрата пикселями
for(i=1;i<=numberPoint*numberPoint;i++){
  var objectTarget = document.createElement("div");
  objectTarget.className = "targetObj";
  objectTarget.style.setProperty('--targetColor', 'red');
  gridd.appendChild(objectTarget);
};

//прослушиватель наведения мыши, изменение цвета
$(".targetObj").mouseover(function() {
  this.style.setProperty('--targetColor', 'white');
});

//Сброс цвета
$(btn).click(function(){
  var element = document.querySelectorAll(".targetObj");
  element.forEach(element => {
    element.style.setProperty('--targetColor', 'red');
  });
});

//прослушиватель выходя мыши, возвращение цветаы
// $(".targetObj").mouseleave(function(){
//   this.style.setProperty('--targetColor', 'red');
// });

