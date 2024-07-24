//this is a basic bank that was created in javascript by josh

const withdrawBtn = document.getElementById("withdrawBtn");
const depositBtn = document.getElementById("depositBtn");
let balance = 500; let newBalance1; let newBalance2;
let withdrawAmount = document.getElementById("amount1").value;
let depositAmount = document.getElementById("amount2").value;

withdrawBtn.onclick = function(){
    balance = Number(balance);
    newBalance1 = balance - withdrawAmount;
    document.getElementById("bal").innerHTML = newBalance1;
    document.getElementById("with").innerHTML = withdrawAmount;
}

//for some reason, it isnt adding the 2 numbers together, its just combining them
depositBtn.onclick = function(){
    balance = Number(balance);
    newBalance2 = balance + depositAmount;
    document.getElementById("bal").textContent = newBalance2;
    document.getElementById("dep").innerHTML = depositAmount;
    
}