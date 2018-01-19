/*main.js
this is a comment block, enclosed in a slash+ asterisk
and ending with an asterisk + slash */

// Demo of callign a function - console is the javascript editor environment in the browser
// console.log(message)
    
console.log('main.js is loaded');

//The updateInnerHTML function has two parameters 
// - selector - is a string that identifies which DOM element to get or selector
// -newValue is a string that will be the new value for the selectors .innerhtml
function updateInnerHTML(newValue) {
  document.querySelector(selector).innerHTML = newValue;
}




function strong(value) {
    //combining strings to produce a new strinf is called concatenation
  return '<strong>' + value + '</strong>';
}

var tag = document.querySelector('span.note');

function italic(value)
{
  return '<i>' + value + '<i>';
}

tag.innerHTML = italic(tag.innerHTML);