"use strict";

let currencies = {};

document.body.onload = addCategory("money");

function addCategory(categoryName) {
	var div = document.createElement("div");
	var button = document.createElement("button");
  var span = document.createElement("span");
  var text = document.createTextNode("0");
  
  currencies[categoryName] = 0;
  
  button.className = "button";
  button.innerHTML = "click";
  button.id = categoryName;
  
  span.className = "currency";
  span.id = categoryName + "_text";
 
  div.appendChild(button);
  span.appendChild(text);
  div.appendChild(span);

  document.body.appendChild(div);
}

document.addEventListener("click", event => {
	if (event.target.matches(".button")) {
  document.getElementById(event.target.id + "_text").innerHTML = ++currencies[event.target.id];
  }
})
