export const log = (...args) =>
  __DEBUG__ ? console.log(...args) : undefined;

export const logError = (...args) =>
  __DEBUG__ ? console.error(...args) : undefined;

export const renderIf = (test, component) => test ? component : undefined;

export const classToggler = (options) =>
  Object.keys(options).filter(key => !!options[key]).join(' ');

export const map = (user, ...args) =>
  Array.prototype.map.apply(user, args);

export const filter = (user, ...args) =>
  Array.prototype.filter.apply(user, args);

export const reduce = (user, ...args) =>
  Array.prototype.reduce.apply(user, args);
