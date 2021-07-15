import validator from './validator.js';

console.log(validator);

document.getElementById("subscriptionBtn").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";
})

document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
})

document.getElementById('myForm').addEventListener('submit', function(){
    validateForm()

    const result = validator.isValid('363535453612736462')

})

function validateForm()
          {
              var element = document.forms["myForm"]["mycheckbox"].checked;
          
              if(element == true){
                  document.getElementById("info").innerHTML  = "Gracias por confirmar";
                  return false; 
              }
              else{
                  document.getElementById("info").innerHTML  =  "No ha aceptado los términos y condiciones";
                  return false;
              }
          }