// Create a function called wrapInBlockQuote that will take in a single value and return a string that wraps the text in a HTML block Quote tag

//function wrapInBlockQuote(selector)
//{
    //var value;
  //  document.querySelector(selector).innerHTML = value;
  // return '<blockquote>' + document.querySelector(selector).innerHTML + '</blockquote>';
//}


function wrapInBlockQuote(text)
{
    return '<blockquote>' + text + '</blockqoute>';
}


//2) write the Javascript code to get the element with the id of "leadQuote" and, using the function in step 1, wrap the contents of that element in a block qoute

//function updateInnerHTML(selector,) {
  //  document.querySelector(selector).innerHTML = newValue;
//}


var tag = document.getElementById('leadQuote');

tag.innerHTML = wrapInBlockQuote(tag.innerHTML);