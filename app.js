
var uservalue = prompt("Enter your number");
var result = document.getElementById('result'); 
result.innerHTML = ""; 

for (let num = uservalue; num >= 0; num--) {
  result.innerHTML += "<h3>Table of " + num + ":</h3>"; 
  
  for (let i = 1; i <= 10; i++) {
    result.innerHTML += num + " * " + i + " = " + (num * i) + "<br>";
  }
  
  result.innerHTML += "<br>"; 
}
