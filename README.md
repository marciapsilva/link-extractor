#Link Extractor v1.0.0

**A função desta biblioteca é extrair todos os links contidos em uma string no formato _mardown_.** 

Retorna uma array de objetos contendo o endereço do link e o texto que recebeu o link.

##Instalação

Após instalar o npm em seu computador (mais informações [aqui][https://www.npmjs.com/get-npm]), digite o seguinte código em seu terminal:

```
$npm install link-extractor
```

##Exemplo de uso

No Node.js, digitar:

```
const extractLinksFromMd = require('link-extractor');
const str = `# Lorem ipsum

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et [dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

[foo](http://foo.com)

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

extractLinksFromMd(str);

[
  { href: 'https://en.wiktionary.org/wiki/labore', text: 'labore' },
  { href: 'https://en.wiktionary.org/wiki/dolore', text: 'dolore' },
  { href: 'http://foo.com', text: 'foo' },
]
```

##Roadmap

####Versão 2.0.0 (sem previsão)
- Ignora um link já inserido anteriormente na array, se estiver ligado a uma mesma palavra.
- README em inglês.

####Versão 1.0.0 (wip)

- Retorna uma array de objetos contendo o endereço do link e o texto que recebeu o link.

##Keywords

laboratoria, link extractor

##Project Github

[Link Extractor][https://github.com/marciapsilva/link-extractor]