'use strict'
var productLeft = document.getElementById('imageLeft')
var productMid = document.getElementById('imageMid')
var productRight = document.getElementById('imageRight')

ProductImage.productImageArray = []
// As a Developer, I want to build my js around a constructor function for new Images, so that I can have a reference point to demo code and test functionality. I'm going to use the demo version for now, and then modify it during co-work on Tue.

function ProductImage (src, name, size) {
  this.src = src
  this.name = name
  this.size = size
  if (!size) {
    this.size = '300px'
  }
  this.likesCount = 0
  this.displayedCount = 0
  ProductImage.productImageArray.push(this)
}
console.log(ProductImage.productImageArray)
// Create a random number between 1 - array length, and test that it works
// put the randomNumber variable into a function that can be called to generate a random picture. need to invoke randomNumber variable on productImageArray using [] notation.

var randomPic = function () {
  var randomNumber = (Math.floor(Math.random() * ProductImage.productImageArray.length))
  document.getElementById('productLeft').src = ProductImage.productImageArray[randomNumber]
}

// The client desires a % of the number of times an item was clicked when displayed.

// Percentage of likes:

// number of times item clicked / number of times clicked, converted to a percentage. Percentages are an amount out of maximum, with maximum representing 100%. so, if number of times clicked *100 / number of times appeared...we might get it. Something like:
// var clicked = value of click increment
// var appeared = value of appearances (maybe this is done by ID? How do we keep track of how many times it's appeared?)
// clicked * 100 / appeared

// 25 Images Until Data appears:

// The client wants the data to appear after 25 selections have been made
// a do while loop seems appropriate. A for loop will work too, but for the sake of clarity:
// do (randomImageFunction ()) while (clicks <= 25)
