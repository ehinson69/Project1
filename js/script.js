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
  source: 'Michelle Obama',
  category: 'Urban'
  },

  {
  quote: 'The world is your oyster. Its up to you to find the pearls.',
  source: 'Pursuit of Happiness Quotes', 
  citation: 'www.elitecolumn.com', 
  year: 2006
  }
];

console.log(quotes);


/*****created a getRandomQuote function to test the random results of each quote to display on the screen. */
  function getRandomQuote() {
  var quoteIndex = Math.floor(Math.random() * quotes.length);
  for (var i = 0; i < quotes.length; i++) {
    var randomQuote = quotes[quoteIndex];
  }
  return randomQuote;
  } 
  var result = getRandomQuote(quotes);

  console.log(result);

 /****created a printQuote function to be able to run each quote evey 25 seconds and changes background color. */
  function printQuote() {
    random_bg_color();
    var htmlString = ' ';
    var actualQuote = getRandomQuote(); 
    htmlString  = "<p class ='quote'>" + actualQuote.quote + "</p>";
    htmlString += "<p class ='source'>" + actualQuote.source + "</p>";
  if(actualQuote.citation) {
    htmlString += "<span class = 'citation'>" + actualQuote.citation + "</span>";
    }
    {
  if(actualQuote.category) {
    htmlString += "<span class = 'category'>" + actualQuote.category + "</span>";
    }
    }
  if(actualQuote.year) {
    htmlString += "<span class = 'year'>" + actualQuote.year + "</span>";
    }
    htmlString += "</p>";
    document.getElementById('quote-box').innerHTML = htmlString;
  }
  
  function random_bg_color() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + red + "," + green + "," + blue + ")";

  console.log(bgColor);
  document.body.style.background = bgColor;
  }
  
  setInterval(function(){ printQuote(); }, 25000); 

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", random_bg_color, false);
