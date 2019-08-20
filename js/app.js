'use strict';

var lastShown = [];
var totalClicks = 0;

var imgOne = document.getElementById('img-one');
var imgTwo = document.getElementById('img-two');
var imgThree = document.getElementById('img-three');


// var imgOne = document.createElement('img');
// // imgOne.textContent = 
// var captionOne = document.createElement('figcaption');
// imgOne.appendChild(captionOne);

//create an array to hold all the images
var imagesToBeLoaded = [
  'bag',
  'banana',
  'bathroom',
  'boots',
  'breakfast',
  'bubblegum',
  'chair',
  'cthulhu',
  'dog-duck',
  'dragon',
  'pen',
  'pet-sweep',
  'scissors',
  'shark',
  'sweep',
  'tauntaun',
  'unicorn',
  'usb',
  'water-can',
  'wine-glass'
];

//create a constructor function
function Product (name,url){
  this.name = name;
  this.src = url;
  Product.list.push(this);
}
Product.list = [];

//create a function to load the images
function loadImages(){
  new Product('bag','img/assets/bag.jpg');
  new Product('banana','img/assets/banana.jpg');
  new Product('bathrom','img/assets/bathroom.jpg');
  new Product('boots','img/assets/boots.jpg');
  new Product('breakfast','img/assets/breakfast.jpg');
  new Product('bubblegum','img/assets/bubblegum.jpg');
  new Product('chair','img/assets/chair.jpg');
  new Product('cthulhu','img/assets/cthulhu.jpg');
  new Product('dog-duck','img/assets/dog-duck.jpg');
  new Product('dragon','img/assets/dragon.jpg');
  new Product('pen','img/assets/pen.jpg');
  new Product('pet-sweep','img/assets/pet-sweep.jpg');
  new Product('scissors','img/assets/scissors.jpg');
  new Product('shark','img/assets/shark.jpg');
  new Product('sweep','img/assets/sweep.png');
  new Product('tauntaun','img/assets/tauntaun.jpg');
  new Product('unicorn','img/assets/unicorn.jpg');
  new Product('usb','img/assets/usb.gif');
  new Product('water-can','img/assets/water-can.jpg');
  new Product('wine-glass','img/assets/wine-glass.jpg');
}
loadImages();

//create a random function to display 3 images at once
function randomImage(){
  var randomNumber = Math.floor(Math.random() * Product.list.length);

  imgOne.src = Product.list[randomNumber].src;
  imgTwo.src = Product.list[randomNumber].src;
  imgThree.src = Product.list[randomNumber].src;

  captionOne.textContent = Product.list[randomNumber].name;
}
randomImage();

//change what's being shown after a click

//update how many times it got shown

//update how many times it got clicked

