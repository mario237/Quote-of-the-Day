var listOfQuotes = [
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "So many books, so little time.",
        author: "Frank Zappa"
    },
    {
        quote: "A room without books is like a body without a soul.",
        author: "Marcus Tullius Cicero"
    },
    {
        quote: "Always forgive your enemies; nothing annoys them so much.",
        author: "Oscar Wilde"
    },
    {
        quote: "Without music, life would be a mistake.",
        author: "Friedrich Nietzsche"
    },
]

var getNewQuoteBtn = document.getElementById('getNewQuoteBtn');



getNewQuoteBtn.addEventListener('click', getRandomQuote)


function getRandomQuote() {
    var quoteIndex = Math.floor(Math.random() * listOfQuotes.length);


    document.getElementById('quoteText').innerHTML = `&ldquo; ${listOfQuotes[quoteIndex].quote} &rdquo;`;
    document.getElementById('quoteAuthor').innerHTML = `&minus; ${listOfQuotes[quoteIndex].author}`;
   

}