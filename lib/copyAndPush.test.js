const { copyAndPush } = require('./copyAndPush');

describe('copyAndPush function', () => {
  it('push added item to array and return array', () => {
    const colors = ['red', 'green', 'blue'];

    const addColor = copyAndPush(colors, 'yellow');
    
    expect(addColor).toEqual(['red', 'green', 'blue', 'yellow']);
  });
});


describe('copyAndPush function', () => {
  it('makes sure the orginal array is unchanged', () => {
    const colors = ['red', 'green', 'blue', 'yellow'];

    expect(colors).toEqual(['red', 'green', 'blue', 'yellow']);
  });
});
