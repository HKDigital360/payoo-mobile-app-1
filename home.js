

const transactionData = []


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
   
   
   const data = {
    name: "Add Money",
    date :new Date().toLocaleTimeString()
   }
   transactionData.push(data)
})

//Cash Out Features
document.getElementById("btn-Withdraw-Money").addEventListener("click" , function(e){
    e.preventDefault()
   const withdrawAmount = parseInt( document.getElementById("withdraw-amount").value)

   const availableBalance = parseInt(document.getElementById("available-balance").innerText)

const cashOutNewBalance = availableBalance - withdrawAmount

document.getElementById("available-balance").innerText = cashOutNewBalance


const data = {
    name: "Cash Out",
    date :new Date().toLocaleTimeString()
   }
   transactionData.push(data)
})

// Transfer Money Features


// transaction 
document.getElementById("transaction-listener").addEventListener("click" , function(){
  
  const transactionContainer = document.getElementById("transaction-container")
  transactionContainer.innerText=""
  ;
  // transactionContainer.innerHTML = "";

for( const data of transactionData){
  const div = document.createElement("div")
  div.innerHTML=

 ` 
 <div  class=" p-3 bg-white rounded-xl flex justify-between items-center mt-3">
<div class="flex items-center">
    <div class="border-2 p-2 rounded-full">
        <img src="./assets/wallet1.png" class="mx-auto bg-[#f4f5f7] " alt="">
</div>
    <div class="ml-2">
        <h2 class=" text-black font-semibold">${data.name}</h2>
        <p>${data.date}</p>
    </div>
    
</div>
<i class="fa-solid fa-ellipsis-vertical"></i>
    </div>
    `
  transactionContainer.appendChild(div)
  
}
})


// toggling feature

// home.js

function showSection(sectionId) {
  const sections = [
    "add-money-parent",
    "cash-out-parent",
    "transfer-money-parent",
    "get-bonus-parent",
    "pay-bill-parent",
    "transaction-parent"
  ];

  for (let i = 0; i < sections.length; i++) {
    const id = sections[i];
    if (id === sectionId) {
      document.getElementById(id).style.display = "block";
    } else {
      document.getElementById(id).style.display = "none";
    }
  }
}

// Attach listeners
document.getElementById("add-money-listener").addEventListener("click", () => showSection("add-money-parent"));
document.getElementById("cash-out-listener").addEventListener("click", () => showSection("cash-out-parent"));
document.getElementById("transfer-money-listener").addEventListener("click", () => showSection("transfer-money-parent"));
document.getElementById("get-bonus-listener").addEventListener("click", () => showSection("get-bonus-parent"));
document.getElementById("pay-bill-listener").addEventListener("click", () => showSection("pay-bill-parent"));
document.getElementById("transaction-listener").addEventListener("click", () => showSection("transaction-parent"));





// document.getElementById("add-money-listener").addEventListener("click" , function(){
//     document.getElementById("cash-out-parent").style.display = "none"
//     document.getElementById("add-money-parent").
//     style.display = "block"
// document.getElementById("transfer-money-parent").style.display = "none"
// document.getElementById("get-bonus-parent").style.display = "none"
// document.getElementById("pay-bill-parent").style.display = "none"
    
// })

// document.getElementById("cash-out-listener").addEventListener("click" , function(){
//     document.getElementById("cash-out-parent").style.display = "block"
//     document.getElementById("add-money-parent").
//     style.display = "none"
//     document.getElementById("transfer-money-parent").style.display = "none"
//     document.getElementById("get-bonus-parent").style.display = "none"
//     document.getElementById("pay-bill-parent").style.display = "none"
// })


// document.getElementById("transfer-money-listener").addEventListener("click" , function(){
// document.getElementById("transfer-money-parent").style.display = "block"
//     document.getElementById("cash-out-parent").style.display = "none"
//     document.getElementById("add-money-parent").style.display = "none"
//     document.getElementById("get-bonus-parent").style.display = "none"
//     document.getElementById("pay-bill-parent").style.display = "none"
    
// })

// document.getElementById("get-bonus-listener").addEventListener("click" , function(){
// document.getElementById("get-bonus-parent").style.display = "block"
// document.getElementById("add-money-parent").style.display = "none"
//     document.getElementById("cash-out-parent").style.display = "none"
//     document.getElementById("transfer-money-parent").style.display = "none"
//     document.getElementById("pay-bill-parent").style.display = "none"
    
// })



// document.getElementById("pay-bill-listener").addEventListener("click" , function(){
// document.getElementById("pay-bill-parent").style.display = "block"
// document.getElementById("get-bonus-parent").style.display = "none"
// document.getElementById("add-money-parent").
//     style.display = "none"
//     document.getElementById("cash-out-parent").style.display = "none"
//     document.getElementById("transfer-money-parent").style.display = "none"
    
// })



