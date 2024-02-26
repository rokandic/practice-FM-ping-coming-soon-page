function submitForm() {
  let input = document.getElementById("input-email");
  let email = input.value;
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;  
  let validEmail = regex.test(email);

  // make error message and red input outline visible
  if( (!email) || (!validEmail) ) {
   if(!email)
     input.setCustomValidity("Whoops! It looks like you forgot to add your email.");
   else if (!validEmail) 
    input.setCustomValidity("Please provide a valid email address.");    
    let errorLabel = document.getElementById("error-email");
    errorLabel.classList.add("visible");
    input.classList.add("error-outline");
    input.reportValidity();
    input.focus();
  }
}

function clearErrorStyles() {  
  let errorLabel = document.getElementById("error-email");
  let input = document.getElementById("input-email");

  console.log(input.validity);
  input.setCustomValidity("");
  input.reportValidity();
  errorLabel.classList.remove("visible");
  input.classList.remove("error-outline");  
}