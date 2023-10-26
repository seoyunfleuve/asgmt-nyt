const whitespacePattern = /^\s*$/;
const isWhitespace = (text: string) => {
  return whitespacePattern.test(text);
};

export default isWhitespace;
