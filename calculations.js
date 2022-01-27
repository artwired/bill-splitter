      
      // Setting global variables
      let regex = /^\d+(?:\.\d{0,2})?$/;
      let billTotal = document.getElementById("dollar-amount-field").value.trim();
      let totalNumOfPeople = document.getElementById("num-of-people").value.trim();
      let billTotalInteger = Number(billTotal);
      let peopleToInteger = Number(totalNumOfPeople);
      let percentage;
      let text;
      let NumOfPeopleField = document.getElementById("num-of-people");
      
      //Firing the Custom Percentage Functionality --------------------------------
      let customPercentage = document.getElementById("custom-option");
      // allowing for users to enter using the Custom Percentage input field. Passes to the calcCustom function
      customPercentage.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
         calcCustom(e);
        }
      });
      // allowing for users to enter using the Number Of People input field as well. Passes to the calcCustom function
      NumOfPeopleField.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
         calcCustom(e);
        }
      });

      // calcCustom function that validates user input and calculates the inserted bill splitter values
      function calcCustom(e, regx, billTot, totNumPeeps, billTotInteger, peepsToInteger, percent) {
        let regex = /^\d+(?:\.\d{0,2})?$/;
        let billTotal = document.getElementById("dollar-amount-field").value.trim();
        let totalNumOfPeople = document.getElementById("num-of-people").value.trim();
        let billTotalInteger = Number(billTotal);
        let peopleToInteger = Number(totalNumOfPeople);
        let customPercentageValue = customPercentage.value.trim();
        let percentage;
        let inputs = document.querySelectorAll("input");


        // Validate custom percentage field entries, adjust to error input field styles and return error message if required--------
        if (isNaN(customPercentageValue) || customPercentageValue < 0 || customPercentageValue == "") {
          percentage = "Please enter a valid percentage";
          document.getElementById("custom-option").style.outline = "2px solid red";
        } else {
            percentage = "";
        }
        document.getElementById("percentage-error-msg").innerHTML = percentage;

        // Validate bill total field entries, adjust to error input field styles and return error message if required---------
        if (regex.test(billTotal) == false || billTotal == "") {
          text = "Please enter a dollar amount";
          document.getElementById("dollar-amount-field").style.outline = "2px solid red";
        } else {
            text = "";
        }
        document.getElementById("dollar-amount-error-msg").innerHTML = text;

        // Validate Number Of People field entries, adjust to error input field styles and return error message if required----------
        if (isNaN(totalNumOfPeople) || totalNumOfPeople == "" || totalNumOfPeople < 1) {
          numberOfPeople = "Can't be zero";
          document.getElementById("num-of-people").style.outline = "2px solid red";
        }
          else {
          numberOfPeople = "";
        }
        document.getElementById("num-people-error-msg").innerHTML = numberOfPeople;

        // Equation performed to find each person's tip amount owed-----------
        let tipPerPersonDisplay = billTotalInteger * (customPercentageValue / 100) / peopleToInteger;
        document.getElementById("tip-per-person").innerHTML = "$" + tipPerPersonDisplay.toFixed(2);

        // Equation performed to find each persons share of the total bill-----------
        let billFinal = (billTotalInteger / totalNumOfPeople) + tipPerPersonDisplay;
        document.getElementById("total-per-person").innerHTML = "$" + billFinal.toFixed(2);

        // Sets totals to $0.00 if there are any validation problems with the inputfields
        if(isNaN(tipPerPersonDisplay) || isNaN(billFinal) || totalNumOfPeople == "" || totalNumOfPeople == "0") {
          document.getElementById("tip-per-person").innerHTML = "$0.00"; 
          document.getElementById("total-per-person").innerHTML = "$0.00"; 
        }

      }


// Firing the percentage options functionality------
function getPercentage(num) {

  // Clears the user input of the custom percentage input field, if there is any.
  customPercentage.value = "";

  //Setting the local variables
  let regex = /^\d+(?:\.\d{0,2})?$/;
  let billTotal = document.getElementById("dollar-amount-field").value.trim();
  let totalNumOfPeople = document.getElementById("num-of-people").value.trim();
  let billTotalInteger = Number(billTotal);
  let peopleToInteger = Number(totalNumOfPeople);
  let text;
  let numberOfPeople;
  let inputs = document.querySelectorAll("input");

// clearing any error styles or messages if there are any diplaying
  inputs.forEach(input => input.style.outline = "none");
  document.getElementById("percentage-error-msg").innerHTML = "";
  document.getElementById("num-people-error-msg").innerHTML = "";
  document.getElementById("dollar-amount-error-msg").innerHTML = "";
// Validate bill total field entries, adjust to error input field styles and return error message if required---------
    if (regex.test(billTotal) == false || billTotal == "") {
      text = "Please enter a dollar amount";
      document.getElementById("dollar-amount-field").style.outline = "2px solid red";
    } else {
        text = "";
    }
    document.getElementById("dollar-amount-error-msg").innerHTML = text;

// Validate Number Of People field entries, adjust to error input field styles and return error message if required----------
    if (isNaN(totalNumOfPeople) || totalNumOfPeople == "" || totalNumOfPeople < 1) {
      numberOfPeople = "Can't be zero";
      document.getElementById("num-of-people").style.outline = "2px solid red";
    } else {
      numberOfPeople = "";
    }
    document.getElementById("num-people-error-msg").innerHTML = numberOfPeople;

// Equation performed to find each person's tip amount owed-----------
  let tipPerPersonDisplay = billTotalInteger * (num / 100) / peopleToInteger;
  document.getElementById("tip-per-person").innerHTML = "$" + tipPerPersonDisplay.toFixed(2);

// Equation performed to find each persons share of the total bill-----------
  let billFinal = (billTotalInteger / totalNumOfPeople) + tipPerPersonDisplay;
  document.getElementById("total-per-person").innerHTML = "$" + billFinal.toFixed(2);

// Sets totals to $0.00 if there are any validation problems with the inputfields
  if(isNaN(tipPerPersonDisplay) || isNaN(billFinal) || totalNumOfPeople == "" || totalNumOfPeople == "0") {
    document.getElementById("tip-per-person").innerHTML = "$0.00"; 
    document.getElementById("total-per-person").innerHTML = "$0.00"; 
  }
}


// setting variables to be used for the reset button functionality
let btnClear = document.getElementById("reset-button");
let inputs = document.querySelectorAll("input");
 
function clearErrorStyles() {
 inputs.forEach(input => input.style.outline = "none");
 document.getElementById("percentage-error-msg").innerHTML = "";
 document.getElementById("num-people-error-msg").innerHTML = "";
 document.getElementById("dollar-amount-error-msg").innerHTML = "";
}
// When the reset button is clicked, clears all input fields and inserted user arguments to reset the form to it's original state
btnClear.addEventListener("click", () => {
  inputs.forEach(input => input.value = "");
  document.getElementById("total-per-person").innerHTML = "$0.00";
  document.getElementById("tip-per-person").innerHTML = "$0.00";
  document.getElementById("custom-option").style.outline = "none";
  document.getElementById("percentage-error-msg").innerHTML = "";
  document.getElementById("num-of-people").style.outline = "none";
  document.getElementById("num-people-error-msg").innerHTML = "";
  document.getElementById("dollar-amount-field").style.outline = "none";
  document.getElementById("dollar-amount-error-msg").innerHTML = "";
  text = "";
  numberOfPeople = "";
  percentage = "";
});
