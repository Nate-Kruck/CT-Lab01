const { fetchQuote } = require('./fetchQuotes.js');

describe('fetchQuote Function', () => {
  it('should return a single quote from Futurama Quote API', async() => {
    const result = await fetchQuote();

    expect(result).toEqual({ name: expect.any(String), text: expect.any(String), image: expect.any(String)});
  });
});
