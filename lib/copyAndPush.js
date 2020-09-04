const copyAndPush = (items, item) => {

  const copy = [...items];
  copy.push(item);
  return copy;
};

module.exports = {
  copyAndPush
};

