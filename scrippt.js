let emailId = document.getElementById("email-id");
let emailErrormsg = document.getElementById("email-error-msg");
let emailIcon = document.getElementById("email-icon");
let nameInput = document.getElementById("name-input");
let nameErrormsg = document.getElementById("name-error-msg");
let nameIcon = document.getElementById("name-icon");
let suggestions = document.getElementById("suggestions");
let sugErrormesg = document.getElementById("sug-error-msg");
let sugIcon = document.getElementById("sug-icon");
let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z]{2,}\.[a-zA-Z]{2,5}$/;

button.disabled = true;

function checker() {
  emailIcon.style.display = "inline-block";

  if (emailId.value.length <= 20 && emailId.value.match(mailRegex)) {
    emailIcon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    emailIcon.style.color = '#2ecc71';
    emailErrormsg.style.display = 'none';
    emailId.style.border = '2px solid #2ecc71';
    button.disabled = false;
  } else if (emailId.value === "") {
    emailIcon.style.display = 'none';
    emailErrormsg.style.display = 'none';
    emailId.style.border = '2px solid #d1d3d4';
    button.disabled = true;
  } else {
    emailIcon.innerHTML = '<i class="fa-sharp fa-solid fa-circle-exclamation"></i>';
    emailIcon.style.color = '#ff2851';
    emailErrormsg.style.display = 'block';
    emailId.style.border = '2px solid #ff2851';
    button.disabled = true;
  }
}
function validate() {
    nameIcon.style.display = "inline-block";

     if(nameInput.value === ""){
        nameIcon.innerHTML = '<i class="fa-sharp fa-solid fa-circle-exclamation"></i>';
        nameIcon.style.color = '#ff2851';
        // nameErrormsg.style.display = 'block';
        nameInput.style.border = '2px solid #ff2851';
    }else {
        nameIcon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        nameIcon.style.color = '#2ecc71';
        // nameErrormsg.style.display = 'block';
        nameInput.style.border = '2px solid #2ecc71';
    }
}

  function validateSuggestions() {
    sugIcon.style.display = "inline-block";

     if(suggestions.value === ""){
        sugIcon.innerHTML = '<i class="fa-sharp fa-solid fa-circle-exclamation"></i>';
        sugIcon.style.color = '#ff2851';
        // nameErrormsg.style.display = 'block';
        suggestions.style.border = '2px solid #ff2851';
    }else {
        sugIcon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        sugIcon.style.color = '#2ecc71';
        // nameErrormsg.style.display = 'block';
        suggestions.style.border = '2px solid #2ecc71';
    }

}


const countrySelect = document.getElementById("Country");
const stateSelect = document.getElementById("State");

const countryStateData = {
  USA: ["New York", "California", "Texas", "Florida"],
  Canada: ["Ontario", "Quebec", "Alberta", "Manitoba"],
  Australia: ["New South Wales", "Queensland", "Victoria", "Tasmania"],
  SouthKorea: ["Gangwon-do", "Sejong", "Ulsan", "Gwangju"],
  India: ["Telangana", "Andhra Pradesh", "West Bengal", "Maharashtra"]
};

window.onload = function () {
  for (let country in countryStateData) {
    countrySelect.options[countrySelect.options.length] = new Option(
      country,
      country
    );
  }
  countrySelect.onchange = function () {
    stateSelect.disabled = false;
    stateSelect.length = 1;

    const selectedCountry = this.value;
    const states = countryStateData[selectedCountry];

    for (let state of states) {
      stateSelect.options[stateSelect.options.length] = new Option(
        state,
        state
      );
    }
  };
};

const submitButton = document.getElementById('button');
const successMessage = document.querySelector('.container > h4');
const form = document.getElementById('myForm');

// Hide the success message initially
successMessage.style.display = 'none';

submitButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent form submission

  // Check if name and suggestions are empty
  if (nameInput.value === "") {
    nameIcon.innerHTML = '<i class="fa-sharp fa-solid fa-circle-exclamation"></i>';
    nameIcon.style.color = '#ff2851';
    nameInput.style.border = '2px solid #ff2851';
  }

  if (suggestions.value === "") {
    sugIcon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
    sugIcon.style.color = '#ff2851';
    suggestions.style.border = '2px solid #ff2851';
  }

  // Show the success message if all fields are filled
  if (nameInput.value !== "" && suggestions.value !== "") {
    // Print form values to console
    var nameValue = nameInput.value;
    var emailValue = emailId.value;
    var ratingValue = document.getElementById('rating').value;
    var suggestionsValue = suggestions.value;
    var countryValue = document.getElementById('Country').value;
    var stateValue = document.getElementById('State').value;

    console.log('Name:', nameValue);
    console.log('Email:', emailValue);
    console.log('Rating:', ratingValue);
    console.log('Suggestions:', suggestionsValue);
    console.log('Country:', countryValue);
    console.log('State:', stateValue);

    // Show the success message
    successMessage.style.display = 'block';

    // Clear form values after 5 seconds
    setTimeout(function() {
      successMessage.style.display = 'none';
      form.reset();
      nameIcon.style.display = 'none';
      emailIcon.style.display = 'none';
      sugIcon.style.display = 'none';
      nameInput.style.border = '2px solid #d1d3d4';
      emailId.style.border = '2px solid #d1d3d4';
      suggestions.style.border = '2px solid #d1d3d4';
    }, 4000);
  }
});


// submitButton.addEventListener('click', function() {
  
//   var nameValue = nameInput.value;
//   var emailValue = emailId.value;
//   var ratingValue = document.getElementById('rating').value;
//   var suggestionsValue = suggestions.value;
//   var countryValue = document.getElementById('Country').value;
//   var stateValue = document.getElementById('State').value;

//   console.log('Name:', nameValue);
//   console.log('Email:', emailValue);
//   console.log('Rating:', ratingValue);
//   console.log('Suggestions:', suggestionsValue);
//   console.log('Country:', countryValue);
//   console.log('State:', stateValue);

  
//   successMessage.style.display = 'block';

  
//   setTimeout(function() {
//     successMessage.style.display = 'none';
//     form.reset();
//     nameIcon.style.display = 'none';
//     emailIcon.style.display = 'none';
//     sugIcon.style.display = 'none';
//     nameInput.style.border = '2px solid #d1d3d4';
//     emailId.style.border = '2px solid #d1d3d4';
//     suggestions.style.border = '2px solid #d1d3d4';
//   }, 2000);
// });












