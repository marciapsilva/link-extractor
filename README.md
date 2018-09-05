# Link Sniffer v2.0.0

**This library function is to extract all links within a string written in _markdown_ format.** 

It returns an array of objects containing each URL and the text that received the URL. 

## Installation 

After installing npm in the computer (more info about that [here](https://www.npmjs.com/get-npm)), enter the following code in the Terminal: 

```
$npm install link-sniffer
```

## Usage example

In Node.js, enter:

```
const lib = require('link-sniffer');
const str = `# Lorem ipsum

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et [dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

[foo](http://foo.com)

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

lib.getLinksFromMd(str);

//[
//  { href: 'https://en.wiktionary.org/wiki/labore', text: 'labore' },
//  { href: 'https://en.wiktionary.org/wiki/dolore', text: 'dolore' },
//  { href: 'http://foo.com', text: 'foo' },
//]
```

## Roadmap

#### Version 3.0.0 (tba)
- It ignores a repeated URL already pushed into the result's array, as long as linked to the same word. 

#### Version 2.0.0 (published)
- Errors's messages and README translated into English.

#### Version 1.0.0 (published)

- It returns an array of objects containing each URL and the text that received the URL. 

## Project on Github

[Link Sniffer](https://github.com/marciapsilva/link-sniffer)