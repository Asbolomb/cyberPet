
// const foodButton = document.querySelector("#foodButton");
// const drinkButton = document.querySelector("#drinkButton");
// const playButton = document.querySelector("#playButton");

// const petUpdate = document.querySelector(".petUpdate");
// // button id listeners
// foodButton.addEventListener("click", () => {
//   newDog.eat();
  
// });

// drinkButton.addEventListener("click", () => {
//   newDog.drink();
  
// });

// playButton.addEventListener("click", () => {
//   newDog.play();
  
// });


// //universal pet class
// class Animal {
//   constructor(name){
//   this._name = name;
//   this._hunger=100;
//   this._thirst=50;
//   this._happy=50;
// }
// get name(){
//   return this._name;
// }
// get hunger(){
//   return this._hunger;
// }
// get thirst(){
//   return this._thirst;
// }
// get happy(){
//   return this._happy;
// }

// eat(){
//     this._hunger-=10;
//     this._thirst+=5;
//     this._happy+=5
//   if (this._hunger >= 90) {
//     // Link to DOM element ID here
//     petUpdate.textContent = `${this._name} wants scooby snacks... FEED ME!`;
//   } else if(this._hunger <= 10) {
//     // Link to DOM element ID here
//     petUpdate.textContent = `${this._name} is going to burst! No more food`;
//   } else {
//     // Link to DOM element ID here - maybe swap dog image
//     petUpdate.textContent = `${this._hunger} hunger level` ;
//   };
// };

// drink(){
//     this._thirst-=10;
//     this._hunger+=5;
//     this._happy+=5;
//   if (this._thirst >= 90) {
//     // Link to DOM element ID here
//     petUpdate.textContent = `${this._name} is SO thirsty, drinkies please!`;
//   } else if(this._thirst <= 10) {
//     // Link to DOM element ID here
//     petUpdate.textContent = `${this._name} is not thirsty anymore`;
//   } else {
//     // Link to DOM element ID here - maybe swap dog image
//     petUpdate.textContent = `${this._thirst} thirst level` ;
//   };
// };

// play(){
//     this._happy-=10;
//     this._hunger+=5;
//     this._thirst=+5;
//   if (this._happy >= 90) {
//     // Link to DOM element ID here
//     petUpdate.textContent = `${this._name} is bored. I need to play!`;
//   } else if(this._happy <= 10) {
//     // Link to DOM element ID here
//     petUpdate.textContent = `${this._name} is tired out. I need to rest`;
//   } else {
//     // Link to DOM element ID here - maybe swap dog image
//     petUpdate.textContent = `${this._happy} play level` ;
//   };
// };

// };

// const newDog = new Animal ("layla")
const petUpdate = document.getElementById('petUpdate');

const foodButton = document.getElementById("feedButton");
const drinkButton = document.getElementById("drinkButton");
const playButton = document.getElementById("playButton");


// button id listeners
foodButton.addEventListener("click", (event) => {
  petUpdate.innerHTML = ` wants scooby snacks... FEED ME!`;
  newDog.eat();
  
});

drinkButton.addEventListener("click", (event) => {
  newDog.drink();
  
});

playButton.addEventListener("click", (event) => {
  newDog.play();
  
});


//universal pet class
class Animal {
  constructor(name){
  this._name = name;
  this._hunger=100;
  this._thirst=50;
  this._happy=50;
}
get name(){
  return this._name;
}
get hunger(){
  return this._hunger;
}
get thirst(){
  return this._thirst;
}
get happy(){
  return this._happy;
}

eat(){
    this._hunger-=10;
    this._thirst+=5;
    this._happy+=5
  if (this._hunger >= 90) {
    // Link to DOM element ID here
    petUpdate.textContent = `${this._name} wants scooby snacks... FEED ME!`;
    // console.log(`${this._name} wants scooby snacks... FEED ME!`);
  } else if(this._hunger <= 10) {
    // Link to DOM element ID here
    petUpdate.textContent = (`${this._name} is going to burst! No more food`);
  } else {
    // Link to DOM element ID here - maybe swap dog image
    petUpdate.textContent = (`${this._hunger} hunger level`) ;
  };
};
drink(){
    this._thirst-=10;
    this._hunger+=5;
    this._happy+=5;
  if (this._thirst >= 90) {
    // Link to DOM element ID here
    petUpdate.textContent = (`${this._name} is SO thirsty, drinkies please!`);
  } else if(this._thirst <= 10) {
    // Link to DOM element ID here
    petUpdate.textContent = (`${this._name} is not thirsty anymore`);
  } else {
    // Link to DOM element ID here - maybe swap dog image
    petUpdate.textContent = (`${this._thirst} thirst level`) ;
  };
};
play(){
  this._happy-=10;
  this._hunger+=5;
  this._thirst=+5;
  if (this._happy >= 90) {
    // Link to DOM element ID here
    petUpdate.textContent = (`${this._name} is bored. I need to play!`);
  } else if(this._happy <= 10) {
    // Link to DOM element ID here
    petUpdate.textContent = (`${this._name} is tired out. I need to rest`);
  } else {
    // Link to DOM element ID here - maybe swap dog image
    petUpdate.textContent = (`${this._happy} play level`) ;
  };
};
};
const newDog = new Animal("Layla");