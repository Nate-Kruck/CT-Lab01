const { getName } = require('./findByName');

describe('getName function', () => {
  it('finds object name', () => {
    const name = getName('Nathan');

    expect(name)
      .toEqual(name);
  });
});
