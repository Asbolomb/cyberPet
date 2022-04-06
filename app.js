
//universal pet class
// DOM links
const foodButton = document.getElementById("foodButton");
const drinkButton = document.getElementById("drinkButton");
const playButton = document.getElementById("playButton");
class Animal{
    constructor(name){
    this._name = name;
    this._hunger=50;
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
get play(){
    return this._happy;
}

eat(){
    this._hunger+=10;
    this._thirst-=5;
    this._happy-=5
}
drink (){
    this._thirst+=10;
    this._hunger-=5;
    this._happy-=5;
}
play (){
    this._happy+=10;
    this._hungry-=5;
    this._thirst-+5;
}
}

const newDog = new Dog ("Layla");

// button id listeners
foodButton.addEventListener("click", (event) => {

});

drinkButton.addEventListener("click", (event) => {

});

playButton.addEventListener("click", (event) => {

});