document.getElementById("btn-add-money").addEventListener("click",function(e){
    e.preventDefault()
    
   const availableBalance = parseInt(document.getElementById("available-balance").innerText)
  

   const addAmount = parseInt (document.getElementById("amount-to-add").value)


   const newBalance = availableBalance + addAmount

   document.getElementById("available-balance").innerText = newBalance
   
})