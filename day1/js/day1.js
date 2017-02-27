var d1 = document.getElementById("main");
d1.insertAdjacentHTML('afterbegin', '<div id="two">ああああ</div>');


var Cat = function (name){
  this.name = name;
  Cat.prototype.run = function (){
    console.log(this.name + "が走る");
  };
};
var tama = new Cat('タマ');
tama.run();
console.log(tama.name);
