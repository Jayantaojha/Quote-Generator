const body = document.querySelector('body');
const quote = document.querySelector('#quote');
const author = document.querySelector('#author');
const newQuoteBtn = document.querySelector('#new-quote-btn');

// data index for accessing data elements from array
let dataIndex = 0;


let quotesData = [];

const URL = 'https://type.fit/api/quotes';

async function fetchQuote(){
    try {
        let response = await fetch(URL);
        quotesData = await response.json();

        // console.log(data);
        // console.log(data[0].text);
        // console.log(data[0].author);

        displayQuote();

    } catch (error) {
        console.log("The error is: ", error);
    }
}

fetchQuote();


function displayQuote(){
    // Ensure dataIndex stays within bounds
    dataIndex = (dataIndex + quotesData.length) % quotesData.length;

    let authorArr = quotesData[dataIndex].author.split(',');

    // Display the current quote and author
    quote.innerText = `"${quotesData[dataIndex].text}"`;
    author.innerHTML = `<i>- ${authorArr[0]}</i>`;
}


newQuoteBtn.addEventListener('click', () => {
    dataIndex +=1;
    displayQuote();
})
