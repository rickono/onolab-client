const parseNames = (str) => {
  const names = str.split(' ');
  names[names.lastIndexOf('and')] = ', and';
  const noAnds = names.map((name) => {
    if (name === 'and') {
      return ',';
    }
    return name;
  });
  return noAnds.join(' ').replace(/ , /g, ', ');
};

export default parseNames;
