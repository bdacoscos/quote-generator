console.log("JS linked up!");

// Array to contain quotes
var quotes = [
  'Success is not final; failure is not fatal: It is the courage to continue that counts. - Winston S. Churchill',
  'It is better to fail in originality than to succeed in imitation. - Herman Melville',
  'The road to success and the road to failure are almost exactly the same. - Colin R. Davis',
  'Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau',
  'Opportunities don\'t happen. You create them. - Chris Grosser',
  'Don\'t be afraid to give up the good to go for the great. - John D. Rockefeller',
  'I find that the harder I work, the more luck I seem to have. - Thomas Jefferson',
  'There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed. - Ray Goforth',
  'Successful people do what unsuccessful people are not willing to do. Don\'t wish it were easier; wish you were better. - Jim Rohn',
  'Try not to become a man of success. Rather become a man of value. - Albert Einstein'
];

// Function to generate random whole number between 0-9
function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  console.log(randomNumber); //testing
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
