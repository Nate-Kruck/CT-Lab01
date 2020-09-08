const fetch = require('node-fetch');

const fetchQuote = async() => {
  const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes');
  const data = await res.json();
  const mathRandom = Math.floor(Math.random() * Math.floor(data.length));
  const result = {
    name: data[mathRandom].character,
    text: data[mathRandom].quote,
    image: data[mathRandom].image
  };
  console.log(result);
  return result;
};

module.exports = { fetchQuote };
