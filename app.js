const api_url = 'https://api.kanye.rest'
async function getQuote() {
    const response = await fetch(api_url);
    const data = await response.json();
    const quote = data.quote
}

getQuote();