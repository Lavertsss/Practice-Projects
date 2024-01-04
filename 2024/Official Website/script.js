document.getElementById("to-info").addEventListener("click", function (event) {
  event.preventDefault();
  document
    .querySelector("#choice-lander")
    .scrollIntoView({ behavior: "smooth" });
  this.blur(); // Blurs the clicked button after scrolling
});

document
  .getElementById("to-landing")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document
      .querySelector("#menu-lander")
      .scrollIntoView({ behavior: "smooth" });
    this.blur(); // Blurs the clicked button after scrolling
  });

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
  });
});
