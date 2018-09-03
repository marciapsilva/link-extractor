/* global describe, it */

const chai = require('chai');
const index = require('../index.js');
const getLinksFromMd = index.getLinksFromMd;
const expect = chai.expect;

describe('getLinksFromMd()', () => {
  it('Deveria retornar array com os links para uma string com UM ÚNICO link', () => {
    let message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut [labore](https://en.wiktionary.org/wiki/labore) magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    expect(getLinksFromMd(message)).to.deep.equal([{ 
      href: 'https://en.wiktionary.org/wiki/labore', 
      text: 'labore'
    }]);
  });
  it('Deveria retornar array com os links para uma string com MAIS DE UM link', () => {
    let message = `[labore](https://en.wiktionary.org/wiki/labore) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut et [dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim veniam, 
    
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. [foo](http://foo.com) `;
    expect(getLinksFromMd(message)).to.deep.equal([
      { href: 'https://en.wiktionary.org/wiki/labore', 
        text: 'labore' },
      { href: 'https://en.wiktionary.org/wiki/dolore', 
        text: 'dolore' },
      { href: 'http://foo.com', 
        text: 'foo' },
    ]);
  });
  it('Deveria retornar array vazia para uma string SEM links', () => {
    let message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut et magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    expect(getLinksFromMd(message)).to.deep.equal([]);
  });
  it('Deveria retornar "Erro: parâmetro não informado"', () => {
    expect(() => getLinksFromMd()).to.throw('parâmetro não informado');
  });
  it('Deveria retornar "Erro: parâmetro não é uma string" para parâmetro que for número', () => {
    expect(() => getLinksFromMd(436437)).to.throw('parâmetro não é uma string');
  });
});