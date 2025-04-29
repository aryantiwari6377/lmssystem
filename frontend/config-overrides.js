// config-overrides.js
const { override, addBabelPlugin } = require('customize-cra');

module.exports = override(
  addBabelPlugin('transform-remove-console')
);
