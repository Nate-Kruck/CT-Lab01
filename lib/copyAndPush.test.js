const { copyAndPush } = require('./copyAndPush');

describe('copyAndPush function', () => {
  it('returns copy of array with new item pushed to the end', () => {
    const colors = ['red', 'green', 'blue'];

    const addColor = copyAndPush(colors, 'yellow');
    
    expect(addColor).toEqual(['red', 'green', 'blue', 'yellow']);
  });
});


