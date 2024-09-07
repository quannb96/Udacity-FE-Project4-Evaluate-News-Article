const validUrl = require('valid-url');

const isValidURL = (url) => Boolean(validUrl.isWebUri(`${url}`));

export { isValidURL };