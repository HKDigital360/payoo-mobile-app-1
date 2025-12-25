// login button functionality
document.getElementById("loginButton").addEventListener("click",function(e){
e.preventDefault()

const mobileNumber = 1516134281
  const mobileNumberValue = document.getElementById("mobile-number").value
  const mobileNumberValueConverted= parseInt(mobileNumberValue)

const pinNumber = 1234
  const pinNumberValue = document.getElementById("pin-number").value
const pinNumberValueConverted= parseInt(pinNumberValue)

console.log(mobileNumberValueConverted , pinNumberValueConverted)

if (mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber)
{window.location.href= "./home.html"}
else{alert("Not Matched")}

});
// document.getElementById("loginButton").addEventListener("click", function() { console.log("login button click"); });


// console.log("login button click");