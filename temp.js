var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");
var five = document.querySelector("#five");
var six = document.querySelector("#six");
var seven = document.querySelector("#seven");
var eight = document.querySelector("#eight");
var nine = document.querySelector("#nine");

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

four.addEventListener("click", function () {
  answerNum.value += four.innerHTML; //4
});

five.addEventListener("click", function () {
  answerNum.value += five.innerHTML;
});

six.addEventListener("click", function () {
  answerNum.value += six.innerHTML;
});

seven.addEventListener("click", function () {
  answerNum.value += seven.innerHTML;
});

eight.addEventListener("click", function () {
  answerNum.value += eight.innerHTML;
});

nine.addEventListener("click", function () {
  answerNum.value += nine.innerHTML;
});

plus.addEventListener("click", function () {
  tempOne = answerNum.value; //123
  answerNum.value = "";
});

equal.addEventListener("click", function () {
  tempTwo = answerNum.value; //12
  answerNum.value = parseInt(tempOne) + parseInt(tempTwo);
});
