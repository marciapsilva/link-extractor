const getLinksFromMd = string => {
  if (typeof string === 'number') {
    return 'Erro: parâmetro não é uma string';
  } else if (string === undefined) {
    return 'Erro: parâmetro não informado';
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