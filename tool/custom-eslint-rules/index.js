// tool/custom-eslint-rules/index.js
const checkNamingConvention = require('./check-naming-convention');
// Import other custom rules here

module.exports = {
  rules: {
    'check-naming-convention': checkNamingConvention,
    // Add other custom rules here
  },
};
