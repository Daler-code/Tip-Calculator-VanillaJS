document.querySelector('#tip-form').onchange = function() {

  var bill = Number(document.getElementById('billTotal').value); // getting the total bill amount
  var tip = document.getElementById('tipInput').value; // tip input in 100s
  document.getElementById('tipOutput').innerHTML = `${tip}%`; // tip amount in percent
  var tipValue = bill * (tip/100) // tip value calculation
  var finalBill = bill + tipValue // final bill calculation
  console.log(finalBill)
  var tipAmount = document.querySelector('#tipAmount') // amount of tip 
  var totalBillWithTip = document.querySelector('#totalBillWithTip') // total bill with Tip

  tipAmount.value = tipValue.toFixed(2); // tip amount value in fixed
  totalBillWithTip.value =finalBill.toFixed(2); // total value with tip 

  //Show Results
  document.getElementById('results').style.display='block'
}