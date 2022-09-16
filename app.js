var upCost = 20;
var upOwn = 0;
var money = 0;

function upgrade() {
  if (money >= upCost) {
    money = money - upCost;
    upOwn = upOwn + 1;
    upCost = Math.round(upCost * 1.15);
    document.querySelector(".mainNum").innerHTML = money;
    document.querySelector(".upCost").innerHTML = upCost;
    document.querySelector(".upOwn").innerHTML = upOwn;
  }
}

function goUp(amount) {
  money = money + amount;
  document.querySelector(".mainNum").innerHTML = money;
}

setInterval(function () {
  money = money + upOwn;
  document.querySelector(".mainNum").innerHTML = money;
}, 1000);
