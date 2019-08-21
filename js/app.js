'use strict';

var container = document.getElementById('image-container');
var previousSet = {};
var thisSet = {};
var allProducts = [];
var pageViews = 0;


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
  this.id = Math.random();
  this.name = name;
  this.src = url;
  this.numClicks = 0;
  this.numViews = 0;
  allProducts.push(this);
}

Product.prototype.updateViews = function (){
  this.numViews++;
};

Product.prototype.updateClicks = function (){
  this.numClicks++;
};

//create a function to load the images
function loadProducts(){
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


//create a random function
function randomImage(){
  return Math.floor(Math.random() * allProducts.length);
}
randomImage();

function setUpImageContainer(){
  for (var i = 1; i <= 3; i++){
    var figure = document.createElement('figure');
    var caption = document.createElement('figcaption');
    var img = document.createElement('img');

    caption.id = `caption-${i}`;
    caption.textContent = '';
    img.id = `image-${i}`;
    img.src = allProducts[(randomImage())].src;
    figure.appendChild(img);
    figure.appendChild(caption);
    container.appendChild(figure);
  }
}


function setUpListener(){
  container.addEventListener('click', clickHandler);
}

function clickHandler(e){
  var imageName = e.target.alt;
  for (var i = 0; i < allProducts.length; i++){
    if (allProducts[i].name === imageName){
      allProducts[i].updateClicks();
    }
  }
  showRandomImages();
}


function showRandomImages(){
  thisSet = {};
  for (var i = 1; i <= 3; i++){
    var id = `image-${i}`;
    var img = document.getElementById(id);
    var imgCaption = document.getElementById(`caption-${i}`);

    var imageObject = getRandomUniqueImage();

    img.src = imageObject.src;
    img.alt = imageObject.name;
    imgCaption.textContent = imageObject.name;


  }

  previousSet = thisSet;
  pageViews++;
  if(pageViews > 24){
    container.removeEventListener('click',clickHandler);
    makeChart();
  }
  console.log(pageViews);
}


function getRandomUniqueImage(){
  var found = false;
  while (!found){
    var n = Math.floor(Math.random()*allProducts.length);
    if ((!thisSet[n]) && !previousSet[n]){
      found = allProducts[n];
      allProducts[n].updateViews();
      thisSet[n] = true;
    }
  }
  return found;
}

//function to render chart
var ctx = document.getElementById('chart').getContext('2d');


var labels = [];
var data = [];
var colors = ['red','green','blue','yellow'];

for (var i = 0; i < allProducts.length; i++){
  labels.push(allProducts[i].name);
  data.push(allProducts[i].numClicks,allProducts[i].numViews);
}

makeChart(data,labels);

function makeChart(){

  var chart = new Chart (ctx, {
    type: 'bar',
    data: {
      labels: [labels],
      datasets: [{
        label: 'Your Bus-Mall Interests',
        backgroundColor: colors,
        borderColor: 'green',
        data: [data],
      }],
    }
  });
}







loadProducts();
setUpImageContainer();
setUpListener();
showRandomImages();

