/******************************************
Treehouse FSJS Techdegree:
Project 1 - A Random Quote Generator
by Elizabeth Hinson
******************************************/


/***** created my quotes function and added five random famous quotes and included the console.log to be sure it prints out in the console for review. */
var quotes = [
    
  {
  quote: 'The way to get started is to quit talking and begin doing',
  source: 'Walt Disney', 
  citation: 'BrianTracy.com'
  },
  
  {   
  quote: 'Build your own dream or someone will hire you to build theirs.',
  source: 'Farrah Gray'
  },

  {
  quote: 'You may write down in history with your bitter, twisted lies, you may trod me in the very dirt but still, like dust, I rise.',
  source:  'Maya Angelou',
  citation: 'Still I Rise From And Still I Rise: A Book of Poems',
  year: 'Copyrighted (1978)'
  },

  {
  quote: 'The only limit to the height of your achievements is the reach of your dreams and your willingness to work hard for the.', 
  source: 'Michelle Obama'
  },

  {
  quote: 'The world is your oyster. Its up to you to find the pearls.',
  source: 'Pursuit of Happiness Quotes', 
  citation: 'www.elitecolumn.com', 
  year: 2006
  }
];

console.log(quotes);


/*****created a getRandomQuote function to test the random results of each quote to display on the screen, once the quote box is pressed. */
  function getRandomQuote() {
  var quoteIndex = Math.floor(Math.random() * quotes.length);
  for (var i = 0; i < quotes.length; i++) {
    var randomQuote = quotes[quoteIndex];
  }
  return randomQuote;
  } 
  var result = getRandomQuote(quotes);

  console.log(result);

/****created a printQuote function to be able to print each quote after the quote box is pressed. */
  function printQuote() {
    var htmlString = ' ';
    var actualQuote = getRandomQuote(); 
    htmlString  = "<p class ='quote'>" + actualQuote.quote + "</p>";
    htmlString += "<p class ='source'>" + actualQuote.source + "</p>";
    if(response = citation){
      htmlString += "<span class = 'citation'>" + actualQuote.citation + "</span>";
    }
   if(response = year){
    htmlString += "<span class = 'year'>" + actualQuote.year + "</span>";
    }
    htmlString += '</p>';
    document.getElementById('quote-box').innerHTML = htmlString;
  }

 
/***
When the "Show another quote" button is clicked, the event listener 
below will be triggered, and it will call, or "invoke", the `printQuote` 
function. So do not make any changes to the line of code below this 
comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


