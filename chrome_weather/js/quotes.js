const quotes = [
    {
        quote: "test",
        author: "test"
    },
    {
        quote: "test",
        author: "test"
    },
    {
        quote: "æ»≥Átest«œººø‰3",
        author: "test"
    },
    {
        quote: "test",
        author: "test"
    },
    {
        quote: "test",
        author: "test"
    },
    {
        quote: "test",
        author: "test"
    },
    {
        quote: "test",
        author: "test"
    },
    {
        quote: "test",
        author: "test"
    },
    {
        quote: "test",
        author: "test"
    },
    {
        quote: "test",
        author: "test"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todatysQuote = quotes[Math.floor(Math.random() * quotes.length)];
console.log(todatysQuote.quote);

quote.innerText = todatysQuote.quote;
author.innerText = todatysQuote.author;