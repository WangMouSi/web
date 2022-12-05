function onClick(){
    if(inputsAreEmpty()){
        label.textContent="错误：您输入的数字为空";
        console.error("错误：您的输入数字为空");
        return;
    }
    updateLaber();
}
function inputsAreEmpty(){
    if(getNumber1()=== "" || getNumber2() ===""){
        return true;
    }else{
        return false;
    }
}
function updateLaber(){
    var addend1 = getNumber1();
    var addend2 = getNumber2();
    var sum = parseInt(addend1,10)+parseInt(addend2,10);
    label.textContent = addend1+"+"+addend2+"="+sum;
}
function getNumber1(){
    return inputs[0].value;
}
function getNumber2(){
    return inputs[1].value;
}
var inputs =document.querySelectorAll("input");
var label = document.querySelector("p");
var button = document.querySelector("button");
button.addEventListener("click",onClick);