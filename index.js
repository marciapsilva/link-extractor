const getLinksFromMd = string => {
  if (typeof string === 'number') {
    throw new Error('argument is not a string');
  } else if (string === undefined) {
    throw new Error('missing argument');
  } else { 
    return searchLinks(string);
  }
};

const searchLinks = string => {
  let results = [];
  const regex = /\[(.*?)\]\((.*?)\)/gm;
  let linkGroup;

  while ((linkGroup = regex.exec(string)) !== null) {
    results.push({
      'href': linkGroup[2], 
      'text': linkGroup[1]
    });
  }
  return results;
};

module.exports.getLinksFromMd = getLinksFromMd;