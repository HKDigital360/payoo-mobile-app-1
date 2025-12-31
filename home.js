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