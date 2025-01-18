var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");

var plus = document.querySelector("#plus");
var equal = document.querySelector("#equal");
var answerNum = document.querySelector("#answer-num");

var tempOne = "";
var tempTwo = "";

one.addEventListener("click", function () {
  answerNum.value += one.innerHTML; //1
});

two.addEventListener("click", function () {
  answerNum.value += two.innerHTML; //2
});

three.addEventListener("click", function () {
  answerNum.value += three.innerHTML; //3
});

plus.addEventListener("click", function () {
  tempOne = answerNum.value; //123
  answerNum.value = "";
});

equal.addEventListener("click", function () {
  tempTwo = answerNum.value; //12
  answerNum.value = parseInt(tempOne) + parseInt(tempTwo);
});
