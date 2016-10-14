// Loop through the two arrays provided (`bands` and `vegetables`) and output each element in the arrays into their corresponding HTML `<div>` element. Ensure that each item is in a block element (e.g. li, div, p. etc...)

// Setup arrays
var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var veggies = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// Create variables for div elements on page
var bandElement = document.getElementById("boy-bands");
var veggieElement = document.getElementById("vegetables");

// Push html before Bands and Veggies
bandElement.innerHTML += "<h1>My Page</h1><h2>Bands</h2><ul id='band-list'></ul>";
veggieElement.innerHTML += "<h2>Veggies</h2><ul id='veggies-list'></ul>";

// Create variables for injecting within ul's
var bandListElement = document.getElementById("band-list");
var veggiesListElement = document.getElementById("veggies-list");

// Loop through Bands
for (var i = 0; i < bands.length; i += 1) {
  bandListElement.innerHTML += ("<li>" + bands[i] + "</li>");
}

// Loop through Veggies
for (var j = 0; j < veggies.length; j += 1) {
  veggiesListElement.innerHTML += ("<li>" + veggies[j] + "</li>");
}