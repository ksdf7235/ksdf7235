const quotes = [

    { quto : "1" ,
    author : "1" 
    },
    {
        quto : "2" ,
    author : "2"
    },
    {
        quto : "3" ,
    author : "3"
    },
    {
        quto : "4" ,
    author : "4"
    },
    {
        quto : "5" ,
    author : "5"
    },
    {
        quto : "6" ,
    author : "6"
    },
    {
        quto : "7" ,
    author : "7"
    },
    {
        quto : "8" ,
    author : "8"
    },
    {
        quto : "9" ,
    author : "9"
    },
    {
        quto : "10" ,
    author : "10"
    },

];

const quto = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
//math round = 반올림, ceil 올림 floor = 버림 ;



const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quto.innerText = todayQuote.quto;
author.innerText = todayQuote.author;