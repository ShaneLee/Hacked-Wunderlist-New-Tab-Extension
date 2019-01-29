loadJSon();

function loadJSon() {
  var request = new XMLHttpRequest();
  var requestURL = '../quotes.json';
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    var quotes = request.response;
    getQuote(quotes);
  }
}

function getQuote(json) {
  var quotes = json.quotes;

  var quoteObj = quotes[Math.floor(Math.random() * quotes.length -1) + 0];
  var quoteAuthor = quoteObj.author;
  var quote = quoteObj.quote;
  printQuote(quoteAuthor, quote)
}

function printQuote(quoteAuthor, quote) {
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = quoteAuthor;
}
