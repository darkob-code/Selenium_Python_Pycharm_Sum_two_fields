function startCalc(){
interval = setInterval("calc()",1);
}
function calc(){
one = document.SumForm.firstBox.value;
two = document.SumForm.secondBox.value; 
document.SumForm.thirdBox.value = (one * 1) + (two * 1);
}
function stopCalc(){
clearInterval(interval);
}