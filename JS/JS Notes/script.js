/* let scoobysnack = prompt("Would you like some sticky scooby snacks?")
    scoobysnack = null
    if (scoobysnack == null) {
        console.log(typeof scoobysnack)
    }

// var job = 'subberthon';
// var job = 'milk';
if(job = 'subberthon') {
    let job = 'manchester';
    console.log(job)
}

console.log(job);

var milk = 'monkey';
milk = 'stinky';
console.log(milk);


if(milk = 'monkey'){
    job = 'subberthon';
    if(job = 'subberthon') {
    console.log("WHAT DA HELL")
}}
*/
//const grabber = document.querySelector('.notesleft')
//console.log(grabber)

/*if(prompt("What is your personalized website password?") == "141") {
    alert("Welcome back, Joseph");
    document.getElementById("page").style.display = "block";
    } else {
        document.getElementsByTagName("html")[0].style.display = "none";
        console.clear();
    } */

document
  .getElementById("userpassword")
  .addEventListener("keypress", (event) => {
    // event.keyCode or event.which  property will have the code of the pressed key
    let keyCode = event.keyCode ? event.keyCode : event.which;

    if (keyCode === 13) {
      // calls password enter function
      passwordenter();
    }
  });

function passwordenter() {
  const x = document.getElementById("userpassword").value;
  if (x.length == 3) {
    if (x == 141) {
      document.getElementById("passwordwall").style.display = "none";
      document.getElementById("page").style.display = "block";
      console.log("Password Accepted");
    }
  } else if (x != 141) {
    console.log("Password Denied");
  } else {
    console.log("Somethings off. Try again.");
  }
}

let click = 0;
document.addEventListener("click", function () {
  console.log("Mouse Click!");
  //console.log(event.target.textContent)
  //number of clicks
  click += 1;
  for (let i = 0; i < click; i++) {
    //console.log(`This is click #${click}`);
  }
});
// Creates a variable of what you click on in the Document and logs it
/*
    document.addEventListener('click', function () {
        const info = event.target.textContent;
        console.log(info)
    });
    */

window.addEventListener("keydown", function (e) {
  // tells you key press event details;
  //console.log(e);

  if (e.key === "Control") {
    // document.dispatchEvent(
    //   new KeyboardEvent("keydown", {
    //     ctrlKey: true,
    //     shiftKey: true,
    //     key: 74,
    //   })
    // );
    console.log("Stop pressing that button!");
  }
});

const name = "doodooboy";
console.log(`Hi! I'm Josh and my name ${name}!`);
