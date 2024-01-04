// Function to check if no menu option is selected and fade out the button-wrapper
function fadeOutButtonWrapper() {
  const menuOptions = document.querySelectorAll(".menu-option");
  const buttonWrapper = document.querySelector(".button-wrapper");

  // Check if no menu option is selected
  const noMenuOptionSelected = !Array.from(menuOptions).some(
    (option) => option.getAttribute("aria-checked") === "true"
  );

  // If no menu option is selected, fade out the button-wrapper div
  if (noMenuOptionSelected) {
    buttonWrapper.style.opacity = "0";
    buttonWrapper.style.transition = "opacity 2s ease-in"; // Add a transition effect for the fade-out
  } else {
    // If at least one menu option is selected, fade in the button-wrapper div
    buttonWrapper.style.opacity = "1";
  }
}

// Get all menu options
const menuOptions = document.querySelectorAll(".menu-option");

// Add click event listener to each menu option
menuOptions.forEach((option) => {
  option.addEventListener("click", function () {
    const isChecked = this.getAttribute("aria-checked") === "true";

    // Remove 'aria-checked' from all other menu options
    menuOptions.forEach((otherOption) => {
      if (otherOption !== this) {
        otherOption.setAttribute("aria-checked", "false");
      }
    });

    // Toggle 'aria-checked' for the clicked menu option
    this.setAttribute("aria-checked", isChecked ? "false" : "true");

    // Call the function to fade out the button-wrapper
    fadeOutButtonWrapper();
  });
});

// Existing code for smooth scrolling
document.getElementById("to-info").addEventListener("click", function (event) {
  event.preventDefault();
  document
    .querySelector("#choice-lander")
    .scrollIntoView({ behavior: "smooth" });
});

document
  .getElementById("to-landing")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document
      .querySelector("#menu-lander")
      .scrollIntoView({ behavior: "smooth" });
  });
