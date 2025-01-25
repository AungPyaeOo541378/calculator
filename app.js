var calculatorBtn = document.querySelectorAll(".calculator-btn");
var answerNum = document.querySelector("#answer-num");
var plus = document.querySelector("#plus");
var minus = document.querySelector("#minus");
var multi = document.querySelector("#multi");
var divided = document.querySelector("#divided");
var del = document.querySelector("#delete");
var equal = document.querySelector("#equal");
var point = document.querySelector("#point");

var tempOne = "";
var tempTwo = "";
var sign = "";

for (let i = 0; i < calculatorBtn.length; i++) {
    calculatorBtn[i].addEventListener("click",function () {
        answerNum.value += calculatorBtn[i].innerHTML; 
    })
}

plus.addEventListener("click",function () {
 tempOne = answerNum.value;
 sign = "+";
 answerNum.value = "";
});

minus.addEventListener("click",function () {
    tempOne = answerNum.value;
    sign ="-";
    answerNum.value ="";
})
multi.addEventListener("click",function () {
    tempOne= answerNum.value;
    sign= "*";
    answerNum.value =""; 
})
divided.addEventListener("click",function () {
   tempOne = answerNum.value;
   sign ="/" ;
   answerNum.value= "";
})
del.addEventListener("click",function () {
    tempOne="";
    tempTwo="";
    answerNum.value="";
})

point.addEventListener("click",function () {
    answerNum.value+=".";
    

})
equal.addEventListener("click",function () {
    tempTwo = answerNum.value;
    if (sign =="+"){
        answerNum.value = parseInt(tempOne) + parseInt(tempTwo);
    }

    if (sign =="-"){
        answerNum.value = parseInt(tempOne) - parseInt(tempTwo);
    }

    if (sign == "*"){
        answerNum.value = parseInt(tempOne) * parseInt(tempTwo);
    }

    if (sign =="/"){
        answerNum.value = parseInt(tempOne) / parseInt(tempTwo);
    }

})