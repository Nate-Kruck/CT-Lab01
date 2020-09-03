const { getName } = require('./findByName');

describe('getName function', () => {
  it('finds object name', () => {
    const player = {
      name: 'Nathan',
      age: 29
    };

    const name = getName(player);
    console.log(name);

    expect(name)
      .toEqual('Nathan');
  });
});
