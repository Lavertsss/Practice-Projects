"use strict";
/*
console.log("BMI Test")
const massMark = 78 ;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI)
const sentence = `Mark's BMI is (${BMIMark}), while John's BMI is (${BMIJohn}). It's ${markHigherBMI} that Mark has a higher BMI than John.`;

console.log(sentence)
console.log(BMIMark > BMIJohn || massMark > massJohn)
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    */

/*
console.log("Gymnastic Victory")
    
const Dolphins = (96 + 108 + 89) / 3;
console.log(`The average score for the Dolphins is (${Dolphins})`);
const Koalas = (88 + 91 + 110) / 3;
console.log(`The average score for the Koalas is (${Koalas})`);

const Dolphinswin = "Dolphins win the trophy!";
const Koalaswin = "Koalas win the trophy!";
const draw = "Both win the trophy!";

if (Dolphins > Koalas) {
    console.log(Dolphinswin); 
}   else if (Dolphins < Koalas) {
    console.log(Koalaswin);
}   else if(Dolphins === Koalas) {
    console.log(draw);
}
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    */
/*
console.log("Tip Calculation");
const bill = 275;
const tip = bill >=50 && bill <=300 ? bill * 0.15 : bill * 0.20;
const total = (bill + tip);
console.log(`Your bill was $${bill}, adding the tip which was $${tip}, putting your total cost at $${bill + tip}.`)
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

 /*
/*
// calling / running / invoking function 
calcage1();
// Function declaration on the global scope and usable throughout code
console.log("Function Declaration")
const age1 = calcage1(2003);

function calcage1(birthyear) {
    return 2023 - birthyear;
}
console.log(calcage1)
//function expression limits it to the block and help mantain clean syntax
console.log("Function Expression")
const calcage2 = function (birthyear) {
    return 2023 - birthyear;
}
const age2 = calcage2(2003)
console.log(calcage2)

    */
//Arrow function  shorter and faster to write
/*
console.log("Arrow Function")
const calcage3 = birthyear => 2023 - birthyear;
const age3 = calcage3(2003)
console.log(calcage3)

console.log(age1, age2, age3)
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

console.log("Functions calling other Functions")
console.log(fruitprocessor);
console.log(cutfruitpieces);
function cutfruitpieces(fruit) {
    return fruit * 4;
}

function fruitprocessor(apples, oranges) {
    const applepieces = cutfruitpieces(apples);
    const orangepieces = cutfruitpieces(oranges);

    const juice = `Juice with ${apples} apples and ${applepieces} apple slices; as well as ${oranges} oranges and ${orangepieces} orange slices.`;
    return juice;
}
console.log(fruitprocessor(2,3));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

console.log("Function Excercise");
const calcaverage = (a, b, c) => (a + b + c) / 3;

const scorewhales = calcaverage(85, 54, 41);
const scorelions = calcaverage(23, 34, 27);

console.log(scorewhales, scorelions)

const checkwinner = function(avgwhales, avglions) {
    if (avgwhales >= 2 * (avglions)) {
        console.log(`Whales win (${avgwhales} vs. ${avglions})`)
    }
    else if (avglions >= 2 * (avgwhales)) {
    console.log(`Lions win (${avglions} vs. ${avgwhales})`)
}
    else {
        console.log("No team wins...")
    }
}

checkwinner(scorewhales, scorelions)
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    */
console.error("Arrays");

const friends = ["Chris", "Elvedin", "Erika", "Julian"];
console.log(friends);

const years = new Array(1291, 1984, 2008, 2003);
console.log(friends.length);
console.log(friends[friends.length - 3]);
console.log(`${friends[0]} was born in ${years[3]}.`);

friends[0] = "Fatso";
friends[1] = "Pastey";
friends[2] = "Slut";
friends[3] = "Beandaddy";
console.log(friends);
console.log(friends.indexOf("Slut"));

// Can't change the whole array. You can only change one at a time.

/*const ultimateheader = function() {

const yname = prompt("What is your first name???");
const tname = prompt('What is your best friends name???');
const agegroup = prompt('How old are you???');
const starter = prompt('What is your starter pokemon?(Charizard, Blastoise, or Venasaur)');

const aage = agegroup >= 18 ? 'weathered' : 'young';

const passage = console.log(`Welcome ${aage} adventurer ${yname}! Everyone's got to start somewhere...
Oh! Would you look at that... It seems that ${tname} is on his way to claim their starter!
You'd best be on your way to grab one of those pokemon! 
(Pssst! Going on what i've heard..${starter} is the best choice.) 
Good luck!`);
};

ultimateheader();

//passage is the variable for the completed response.
// ultimateheader(); to activate the function
// adult swim spinning header
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    */ /*

console.log('Array Challenge');

const calcTip = function(bill) {
    return bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.20
};
console.log(calcTip);

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips [1], bills[2] + tips[2]];
console.log(bills, tips, totals);
    */ /* const question = prompt("Which Pokemon starter do you want to choose? Venasaur, Charizard, Blastoise, Mewtwo, or Zorua?");
/* 
console.log("Objects Practice")

const Venasaur = {NN: "#0003", Type: "Grass/Poison", Color: "Green", Weaknesses: "Fire/Psychic/FLying/Ice"};
const Charizard = {NN: "#0006", Type: "Fire/Flying", Color: "Orange", Weaknesses: "Water/Electric/Water"};
const Blastoise = {NN: "#0009", Type: "Water", Color: "Blue/Brown", Weaknesses: "Grass/Electric"};
const Mewtwo = {NN: "#0150", Type: "Psychic", Color: "Pink/Purple", Weaknesses: "Bug/Ghost/Dark"};
const Zorua = {NN: "#0571", Type: "Dark", Color: "Black/Red", Weaknesses: "Bug/Fighting/Fairy"};

const question2 = prompt("What do you want to know about Zorua? Choose bewtween : NN, type, color, and weakness")
if (Zorua[question2]) {
    console.log(Zorua[question2])
} else {
    console.log("Try again")
}
*/
/*
if (question == "Venasaur") {
    console.log(Venasaur)
} else if (question == "Charizard") {
    console.log(Charizard)
} else if (question == "Blastoise") {
    console.log(Blastoise)
} else if (question == "Mewtwo") {
    console.log(Mewtwo)
} else if (question == 'Zorua') {
    console.log(Zorua)
} else {
    console.log("Wrong entry! Please choose between the Pokemon listed.")
}
    */
/*
    const jojo = [
        'Joseph',
        'Maddox',
        19,
        2003,
        ['Chris', 'Elvedin', 'Joshua'],
        'African-American',
        true,
        'Web Developer',
        '@Lavertsss',
    ];

    const types = [];

    for (let i = 0; i < jojo.length; i++) {
        //reading from the jojo array
        console.log([i], jojo[i]);

        //types[i] = typeof jojo[i];
        types.push(typeof jojo[i])
    }
    console.log(types)
    
    console.log("EASIER")


    const years = [1990, 1993, 1968, 2003];
    const age = [];
//initialization + condition + iteration
    for (let i = 0; i < years.length; i++) {
        age.push(2023 - years[i]);
    }
    console.log(age);

//continue and break

    console.log("--- STRICTLY STRINGS ---")

    for (let i = 0; i < jojo.length; i++) {
        //continue statement
        if(typeof jojo[i] !== 'string') continue;

        console.log([i], jojo[i], typeof jojo[i]);
    }

    console.log('--- BREAK WITH NUMBER ---');
    for (let i = 0; i < jojo.length; i++) {
        //break statement
        if(typeof jojo[i] === 'boolean') break;

        console.log([i], jojo[i], typeof jojo[i]);
    }


    console.log('--- REVERSE LOOP ---')
    // 0, 1, ...,4
    //4, 3, ...,0

    for (let i =  jojo.length - 1; i >= 0; i--) {
        console.log([i], jojo[i]);
    }

    
    console.log('--- LOOPS INSIDE OF LOOPS ---')
    // 5 repitions for 3 different excercise, for 15 repititions in total
    for (let excercise = 1; excercise < 4; excercise++) {
        console.log(`EXCERCISE ${excercise}`);

        for (let rep = 1; rep < 6; rep++) {
            console.log(`HUAH! THATS ${rep}!`)
        }
    }

    console.log('--- WHILE LOOP ---')
    let rep = 1;
    while (rep <= 10) {
        console.log(`EXCERCISE ${rep}`);
        rep++;
    }
        */
/*
    const jojo = {
        firstname: 'Joseph',
        lastname: 'Maddox',
        age: 19,
        friends: ['Chris', 'Elvedin', 'Joshua'],
        job: 'Web Developer',
        instagram: '@Lavertsss',
        ethinicity: 'African-American',
        hasDriversLicense: false,
        birthYear: 2003,
        };
    */

/*
    calcAge: function() {
        console.log(this)
        //return 2023 - this.birthYear;
        this.age = 2023 - this.birthYear;
        return this.age;
    },

    getsummary: function() {
        return `${this.firstname} is a ${this.calcAge()}-year old teacher, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};

console.log(jojo.calcAge())
console.log(jojo.getsummary())
//console.log(jojo['calcAge'](2003))

//jojo.instagram = '@Lavertsss'
    */
/*
const interest = prompt('What do you want to know about me? My firstname, lastname, age, friends, job, or instagram?').toLowerCase()

if (jojo[interest]) {
    console.log(jojo[interest])
} else {
    console.log("I'm sorry, please try to input the information correctly and try again.")
}

console.log(jojo)

console.log(`Jojo has ${jojo.friends.length} friends, and his best friend is called ${jojo.friends[0]}`)
    */

//BMI = mass / (height * height)
/*
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69, 

    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95, 

    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi;
    }
}

if (john.bmi > mark.bmi) {
    console.log(`"${john.fullName}'s BMI(${john.bmi}) is higher than ${mark.fullName}'s BMI(${mark.bmi})!"`)
} else if (mark.calcBMI() > john.calcBMI()) {
    console.log(`"${mark.fullName}'s BMI(${mark.bmi}) is higher than ${john.fullName}'s BMI(${john.bmi})!"`)
} else {
    console.error('Some informatin was entered wrong. Please take the time to re-enter the information. Thanks!')
}
    */

/*console.error("STARTING FOR LOOPS")
for(let rep = 1; rep <= 14; rep++) {
    console.log(`JULIAN IS ${rep} BIG FAT SCHMELLY BUNGHOLES!!!`) 
}
    */

/*

const gumgum = prompt('What kind of milk carton are you looking for, or is it just milk') .toLowerCase()

for(let i = gumgum; i == 'milk';) {
    console.log('CORRECT???')
}   if(gumgum == 'stop') {
    console.log('HAHA! YOU MIGHT BE A GENIUS!')
}   else {
    console.log('You are a bot.')
};
    */
/*
    let dice = Math.trunc(Math.random() * 6) + 1;

    while(dice !== 6) {
        console.log(`You rolled a ${dice}.`);
        dice = Math.trunc(Math.random() * 6) + 1;
        if (dice === 6) {console.log(`YOU FINALLY ROLLED A ${dice}!`)}
    }
    */
/*
console.log("--- CHALLENGE LOOPS ---");

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  //let totals = [bills + tip]
  //console.log('Bill: ' + bills[i],'; Tip: ' + tip);
  //console.log(`Your totals for each bill are as follows:` + Number(bills[i]) + Number(tip))
  //console.log(tip)
  tips.push(tip);
  //console.log(tips[i]);
  totals.push(tips[i] + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  return sum / arr.length;
};

console.log(calcAverage(totals));
console.log();
    */

console.log("--- DOM MANIPULATION ---");
console.log(document.querySelector(".wordswords").textContent);
