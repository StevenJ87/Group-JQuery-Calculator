let buildNum = "";
let currentLine = document.querySelector("#first-number");
let secondLine = document.querySelector("#second-number");
let operLine = document.querySelector("#operator");
let resultLine= document.querySelector("#result");
let operOne="";
let operTwo="";
let operation="";



console.log(currentLine)

$(document).ready(function() {

     
        
    $(".btn-primary").click(function(){
    var number = $(this).val();
     buildNum=buildNum.toString()+number.toString();
     currentLine.innerText=buildNum;
     return buildNum;
    });

    $("#button-plus").click(function(){
        operOne=buildNum;
        buildNum="";
        operation="+";
        operator.innerText=operation;
        currentLine=secondLine

    });
    $("#button-minus").click(function(){
        operOne=buildNum;
        buildNum="";
        operation="-";
        operator.innerText=operation;
        currentLine=secondLine

    });
    $("#button-multiply").click(function(){
        operOne=buildNum;
        buildNum="";
        operation="*";
        operator.innerText=operation;
        currentLine=secondLine

    });
    $("#button-divide").click(function(){
        operOne=buildNum;
        buildNum="";
        operation="/";
        operator.innerText=operation;
        currentLine=secondLine

    });
    $("#button-power").click(function(){
        operOne=buildNum;
        buildNum="";
        operation="^";
        operator.innerText=operation;
        currentLine=secondLine

    });
    // $("#button-equal").click(function(){
    //   operTwo=buildNum;
    //   if (operation == "+") {
    //       outPut=operOne.valueOf() + operTwo.valueOf();
    //       resultLine.innerText=outPut.toString();
    //   else if {}

    //   }
    // });
    $("#button-clear").click(function(){
      operOne="";
      operTwo=""; 
      operator.innerText="";
      currentLine = document.querySelector("#first-number");
      currentLine.innerText="";
      secondLine.innerText="";
    });
    
    
    });

 