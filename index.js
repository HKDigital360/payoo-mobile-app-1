// login button functionality
document.getElementById("loginButton").addEventListener("click",function(e){
e.preventDefault()

// const mobileNumber = 1516134281
  const mobileNumberValue = (document.getElementById("mobile-number").value)
  // const mobileNumberValueConverted= parseInt(mobileNumberValue)

// const pinNumber = 1234
  const pinNumberValue = (document.getElementById("pin-number").value)
// const pinNumberValueConverted= parseInt(pinNumberValue)

// console.log(mobileNumberValueConverted , pinNumberValueConverted)
console.log(mobileNumberValue , pinNumberValue)

if (mobileNumberValue.length !== 11 || pinNumberValue.length !== 4)

{alert("Provide a valid Account Number (11 digits) and Pin Number (4 digits)")
  return;
}
else{
  window.location.href= "./home.html"
}
});
// document.getElementById("loginButton").addEventListener("click", function() { console.log("login button click"); });


// console.log("login button click");