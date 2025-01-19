var calculatorBtn = document.querySelectorAll(".calculator-btn"); // let arr = [ 0 => 1, 1 => 2, 2 => 3, 3 => 4] ; arr[3]
var answerNum = document.querySelector("#answer-num");
var plus = document.querySelector("#plus");
var equal = document.querySelector("#equal");
var minus = document.querySelector("#minus");
var multi = document.querySelector("#multi");
var del = document.querySelector("#delete");

var tempOne = "";
var tempTwo = "";
var sign = "";

for (let i = 0; i < calculatorBtn.length; i++) {
  calculatorBtn[i].addEventListener("click", function () {
    answerNum.value += calculatorBtn[i].innerHTML;
  });
}

plus.addEventListener("click", function () {
  tempOne = answerNum.value; // 1234
  sign = "+";
  answerNum.value = "";
});

minus.addEventListener("click", function () {
  tempOne = answerNum.value;
  sign = "-";
  answerNum.value = "";
});

multi.addEventListener("click", function () {
  tempOne = answerNum.value;
  sign = "*";
  answerNum.value = "";
});

del.addEventListener("click", function () {
  tempOne = "";
  tempTwo = "";
  answerNum.value = "";
});

equal.addEventListener("click", function () {
  tempTwo = answerNum.value;
  if (sign == "+") {
    answerNum.value = parseInt(tempOne) + parseInt(tempTwo);
  }

  if (sign == "-") {
    answerNum.value = parseInt(tempOne) - parseInt(tempTwo);
  }

  if (sign == "*") {
    answerNum.value = parseInt(tempOne) * parseInt(tempTwo);
  }
});
