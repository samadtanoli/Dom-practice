// console.log(document.childNodes[1].childNodes[2]);

// var First = document.getElementById("firstson");
// console.log(First.parentNode);

// var tag = document.getElementsByTagName("p");
// console.log(tag.length);

// var parent = document.getElementById("main");
// console.log(parent.getAttribute("class"));

// console.log(parent.setAttribute("class", "div"));

var parent = document.getElementById("main");

var heading = document.createElement("h1");

var headingText = document.createTextNode('Hello World');

heading.appendChild(headingText);

heading.setAttribute('class', 'h1')

parent.appendChild(heading);

console.log(heading);

var list = document.getElementById("list");

var listElement = document.createElement("li");

var listText = document.createTextNode("mangoes");
 
listElement.appendChild(listText);

list.appendChild(listElement);


