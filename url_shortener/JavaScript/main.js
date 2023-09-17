import '../Css/styles.css'



// Select DOM elements
const makeShortBtn = document.getElementById('shortener-btn');
const copyBtn = document.getElementById('copy-btn');
const newUrl = document.getElementById('short-url');
const longUrlInput = document.getElementById('long-url');

// Event listeners
makeShortBtn.addEventListener('click', handleShortenClick);
copyBtn.addEventListener('click', handleCopyClick);

// Event handlers
async function handleShortenClick() {
  const longUrl = longUrlInput.value;
  
  try {
    const shortUrl = await shortenUrl(longUrl);
    newUrl.value = shortUrl;
  } catch (error) {
    console.error('An error occurred while shortening the URL:', error);
  }
}

async function handleCopyClick() {
  newUrl.select();
  try {
    await window.navigator.clipboard.writeText(newUrl.value);
  } catch (error) {
    console.error('An error occurred while copying the URL:', error);
  }
}

// API call to shorten URL
async function shortenUrl(longUrl) {
  const apiUrl = `https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(longUrl)}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data.result.short_link2;
}