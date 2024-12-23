// ------------------------ NavBar ---------------------------------

document.addEventListener("DOMContentLoaded", () => { 
    // This event ensures the script runs only after the DOM (HTML structure) is fully loaded.

    // Navbar Toggle
    const hamburger = document.getElementById("hamburger"); 
    // Selects the "hamburger" button element for toggling the menu.

    const menu = document.getElementById("menu"); 
    // Selects the "menu" element, which contains the navigation links.

    hamburger.addEventListener("click", () => { 
        // Adds a click event listener to the hamburger button.
        
        menu.classList.toggle("active"); 
        // Toggles the "active" class on the menu element, which shows or hides the menu.
    });

    //----------------------------- Courses--------------------------------- 

    // Slider Functionality
    const items = document.querySelectorAll(".slider .list .item"); 
    // Selects all slider items within the ".slider .list" element.

    const thumbnails = document.querySelectorAll(".thumbnail .item"); 
    // Selects all thumbnail items within the ".thumbnail" element.

    const next = document.getElementById("next"); 
    // Selects the "next" button element for moving the slider forward.

    const prev = document.getElementById("prev"); 
    // Selects the "prev" button element for moving the slider backward.

    let currentIndex = 0; 
    // Initializes the current index of the active slider item.

    const showSlider = () => { 
        // Function to update the slider display.

        document.querySelector(".slider .list .item.active")?.classList.remove("active"); 
        // Removes the "active" class from the currently active slider item (if any).

        document.querySelector(".thumbnail .item.active")?.classList.remove("active"); 
        // Removes the "active" class from the currently active thumbnail (if any).

        items[currentIndex].classList.add("active"); 
        // Adds the "active" class to the current slider item.

        thumbnails[currentIndex].classList.add("active"); 
        // Adds the "active" class to the current thumbnail.
    };

    const setNext = () => { 
        // Function to move to the next slider item.

        currentIndex = (currentIndex + 1) % items.length; 
        // Updates the current index, looping back to the start if at the end.

        showSlider(); 
        // Calls the showSlider function to update the display.
    };

    const setPrev = () => { 
        // Function to move to the previous slider item.

        currentIndex = (currentIndex - 1 + items.length) % items.length; 
        // Updates the current index, looping to the end if at the start.

        showSlider(); 
        // Calls the showSlider function to update the display.
    };

    next.addEventListener("click", setNext); 
    // Adds a click event listener to the "next" button to move forward.

    prev.addEventListener("click", setPrev); 
    // Adds a click event listener to the "prev" button to move backward.

    // Auto-scroll every 5 seconds
    setInterval(setNext, 5000); 
    // Automatically moves to the next slider item every 5 seconds.

    // Thumbnail Click Event
    thumbnails.forEach((thumbnail, index) => { 
        // Loops through all thumbnail items.

        thumbnail.addEventListener("click", () => { 
            // Adds a click event listener to each thumbnail.

            currentIndex = index; 
            // Updates the current index to the clicked thumbnail's index.

            showSlider(); 
            // Calls the showSlider function to update the display.
        });
    });

    // -----------------------------    Contact --------------------------------
    
document.getElementById("contactForm").addEventListener("submit", function (e) { 
  // Adds a submit event listener to the contact form.

  e.preventDefault(); 
  // Prevents the default form submission behavior.

  // Clear any previous error messages
  document.querySelectorAll(".error-message").forEach((msg) => { 
    // Selects all elements with the class "error-message".

    msg.textContent = ""; 
    // Clears the text content of each error message.

    msg.style.display = "none"; 
    // Hides each error message.
  });

  let isValid = true; 
  // Initializes the form validity as true.

  // Validate Full Name
  const fullName = document.getElementById("fullName"); 
  // Selects the "fullName" input field.

  if (fullName.value.trim() === "") { 
    // Checks if the "fullName" field is empty.

    showError(fullName, "Full Name is required."); 
    // Calls showError to display an error message.

    isValid = false; 
    // Marks the form as invalid.
  } else if (fullName.value.length < 3) { 
    // Checks if the "fullName" is less than 3 characters.

    showError(fullName, "Full Name must be at least 3 characters long."); 
    // Calls showError to display an error message.

    isValid = false; 
    // Marks the form as invalid.
  }

  // Validate Email
  const email = document.getElementById("email"); 
  // Selects the "email" input field.

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  // Regular expression to validate email format.

  if (email.value.trim() === "") { 
    // Checks if the "email" field is empty.

    showError(email, "Email is required."); 
    // Calls showError to display an error message.

    isValid = false; 
    // Marks the form as invalid.
  } else if (!emailRegex.test(email.value)) { 
    // Checks if the "email" does not match the regular expression.

    showError(email, "Please enter a valid email address."); 
    // Calls showError to display an error message.

    isValid = false; 
    // Marks the form as invalid.
  }

  // Validate Message
  const message = document.getElementById("message"); 
  // Selects the "message" input field.

  if (message.value.trim() === "") { 
    // Checks if the "message" field is empty.

    showError(message, "Message is required."); 
    // Calls showError to display an error message.

    isValid = false; 
    // Marks the form as invalid.
  } else if (message.value.length < 10) { 
    // Checks if the "message" is less than 10 characters.

    showError(message, "Message must be at least 10 characters long."); 
    // Calls showError to display an error message.

    isValid = false; 
    // Marks the form as invalid.
  }

  // If the form is valid, show success or proceed with submission logic
  if (isValid) { 
    // Checks if the form is valid.

    alert("Form submitted successfully!"); 
    // Displays a success message.

    this.reset(); 
    // Resets the form fields.
  }
});

// Helper function to show error messages
function showError(inputElement, message) { 
  // Function to display error messages for invalid inputs.

  let errorMessage = inputElement.nextElementSibling; 
  // Selects the next sibling element of the input.

  if (!errorMessage || !errorMessage.classList.contains("error-message")) { 
    // If no error message exists or it doesn't have the "error-message" class.

    errorMessage = document.createElement("div"); 
    // Creates a new "div" element.

    errorMessage.classList.add("error-message"); 
    // Adds the "error-message" class to the element.

    inputElement.parentNode.appendChild(errorMessage); 
    // Appends the error message to the input's parent.
  }

  errorMessage.textContent = message; 
  // Sets the text content of the error message.

  errorMessage.style.display = "block"; 
  // Makes the error message visible.
}

//--------------- ------------Log In --------------------------------------------------

    // Login/Signup Toggle
const loginForm = document.querySelector(".form-inner"); 
// Selects the container for the login and signup forms.

const signupRadio = document.querySelector("#signup"); 
// Selects the radio input for the signup form.

const loginRadio = document.querySelector("#login"); 
// Selects the radio input for the login form.

const titleText = document.querySelector(".title-text"); 
// Selects the container for the title text.

const signupBtn = document.querySelector("label.signup"); 
// Selects the label for the signup button.

const loginBtn = document.querySelector("label.login"); 
// Selects the label for the login button.

signupBtn.addEventListener("click", () => { 
    // Adds a click event listener to the signup button.

    signupRadio.checked = true; 
    // Sets the signup radio button as checked.

    loginForm.style.marginLeft = "-100%"; 
    // Moves the form container to show the signup form.

    titleText.style.marginLeft = "-100%"; 
    // Moves the title text to match the signup form.
});

loginBtn.addEventListener("click", () => { 
    // Adds a click event listener to the login button.

    loginRadio.checked = true; 
    // Sets the login radio button as checked.

    loginForm.style.marginLeft = "0"; 
    // Moves the form container to show the login form.

    titleText.style.marginLeft = "0"; 
    // Moves the title text to match the login form.
});
