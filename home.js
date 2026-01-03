// Add Money Features

document.getElementById("btn-add-money").addEventListener("click",function(e){
    e.preventDefault()
    
    const accountNumber = document.getElementById("account-number").value

    const pinNumber = document.getElementById("pin-number").value
if (accountNumber.length !== 11 || pinNumber.length !== 4) { alert("Provide a valid Account Number (11 digits) and Pin Number (4 digits)"); return; }
    // if(accountNumber.length !== 11)
    // {
    //     alert("Provide a Valid Account ")
    //     return;
        
    // }


    // if(pinNumber.length !== 4)
    // {
    //     alert("Pin Number")
    //     return;
        
    // }


   const availableBalance = parseInt(document.getElementById("available-balance").innerText)
  

   const addAmount = parseInt (document.getElementById("amount-to-add").value)


   const newBalance = availableBalance + addAmount

   document.getElementById("available-balance").innerText = newBalance
   
})

//Cash Out Features
document.getElementById("btn-Withdraw-Money").addEventListener("click" , function(e){
    e.preventDefault()
   const withdrawAmount = parseInt( document.getElementById("withdraw-amount").value)

   const availableBalance = parseInt(document.getElementById("available-balance").innerText)

const cashOutNewBalance = availableBalance - withdrawAmount

document.getElementById("available-balance").innerText = cashOutNewBalance

})

// Transfer Money Features




// toggling feature
document.getElementById("add-money-listener").addEventListener("click" , function(){
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").
    style.display = "block"
document.getElementById("transfer-money-parent").style.display = "none"
document.getElementById("get-bonus-parent").style.display = "none"
document.getElementById("pay-bill-parent").style.display = "none"
    
})

document.getElementById("cash-out-listener").addEventListener("click" , function(){
    document.getElementById("cash-out-parent").style.display = "block"
    document.getElementById("add-money-parent").
    style.display = "none"
    document.getElementById("transfer-money-parent").style.display = "none"
    document.getElementById("get-bonus-parent").style.display = "none"
    document.getElementById("pay-bill-parent").style.display = "none"
})


document.getElementById("transfer-money-listener").addEventListener("click" , function(){
document.getElementById("transfer-money-parent").style.display = "block"
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("get-bonus-parent").style.display = "none"
    document.getElementById("pay-bill-parent").style.display = "none"
    
})

document.getElementById("get-bonus-listener").addEventListener("click" , function(){
document.getElementById("get-bonus-parent").style.display = "block"
document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("transfer-money-parent").style.display = "none"
    document.getElementById("pay-bill-parent").style.display = "none"
    
})



document.getElementById("pay-bill-listener").addEventListener("click" , function(){
document.getElementById("pay-bill-parent").style.display = "block"
document.getElementById("get-bonus-parent").style.display = "none"
document.getElementById("add-money-parent").
    style.display = "none"
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("transfer-money-parent").style.display = "none"
    
})



