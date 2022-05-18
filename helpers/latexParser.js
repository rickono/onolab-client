import { command } from 'latex-parser';

const commands = {
  '\\"': { requiresArg: true },
  "\\'": { requiresArg: true },
  '\\c': { requiresArg: true },
  '\\u': { requiresArg: true },
  '\\^': { requiresArg: true },
  '\\o': { requiresArg: false, html: '&oslash;' },
  "\\'e": { requiresArg: false, html: '&eacute;' },
  "\\'o": { requiresArg: false, html: '&oacute;' },
  "\\'a": { requiresArg: false, html: '&aacute;' },
  "\\'i": { requiresArg: false, html: '&iacute;' },
  "\\'u": { requiresArg: false, html: '&uacute;' },
  "\\'y": { requiresArg: false, html: '&yacute;' },
  "\\'E": { requiresArg: false, html: '&Eacute;' },
  "\\'O": { requiresArg: false, html: '&Oacute;' },
  "\\'A": { requiresArg: false, html: '&Aacute;' },
  "\\'I": { requiresArg: false, html: '&Iacute;' },
  "\\'U": { requiresArg: false, html: '&Uacute;' },
  '\\"o': { requiresArg: false, html: '&ouml;' },
  '\\"u': { requiresArg: false, html: '&uuml;' },
  '\\"a': { requiresArg: false, html: '&auml;' },
  '\\"e': { requiresArg: false, html: '&euml;' },
  '\\"i': { requiresArg: false, html: '&iuml;' },
  '\\^o': { requiresArg: false, html: '&ocirc;' },
  '\\^u': { requiresArg: false, html: '&ucirc;' },
  '\\^a': { requiresArg: false, html: '&acirc;' },
  '\\^e': { requiresArg: false, html: '&ecirc;' },
  '\\^i': { requiresArg: false, html: '&icirc;' },
  '\\cc': { requiresArg: false, html: '&ccedil;' },
  '\\ug': { requiresArg: false, html: '&#287;' },
  '\\dh': { requiresArg: false, html: '&eth;' },
  '\\ae': { requiresArg: false, html: '&aelig;' },
  '\\textless': { requiresArg: false, html: '<' },
  '\\textgreater': { requiresArg: false, html: '>' },
  default: { requiresArg: false, html: '' },
};

const latexParser = (str) => {
  const tokenize = (latex) => {
    let newStr = latex;
    const arr = newStr.split(/[{}]/);

    const discard = [];

    const processed = arr.map((token, index, elems) => {
      let toProcess = token;
      if (token === '') {
        discard.push(index);
      }
      if (token[0] === '\\') {
        try {
          const command = commands[token];
          if (command.requiresArg) {
            toProcess = toProcess + elems[index + 1];
            discard.push(index + 1);
          }
        } catch (error) {
          console.log(error);
        }
      }
      return toProcess;
    });

    for (let i = discard.length - 1; i >= 0; i--) {
      processed.splice(discard[i], 1);
    }
    return processed;
  };

  const tokens = tokenize(str);

  const processedTokens = tokens.map((token) => {
    if (token[0] === '\\') {
      try {
        return commands[token].html;
      } catch (error) {
        return token;
      }
    }
    return token;
  });

  return processedTokens.join('');
};

export default latexParser;
