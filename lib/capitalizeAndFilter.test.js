const { capitalizeAndFilter } = require('./capitalizeAndFilter.js');

describe('capitalizeAndFilter function', () => {
  it('takes an array of strings capitalize all strings and filter out any string that starts with the letter f', () => {
    const arrayOfStrings = ['one', 'plus', 'four', 'equals', 'five'];

    const result = capitalizeAndFilter(arrayOfStrings);

    expect(result).toEqual(['One', 'Plus', 'Equals']);
  });
});
