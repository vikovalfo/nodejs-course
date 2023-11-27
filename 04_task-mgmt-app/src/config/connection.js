const { connectionData } = require('./db');

const connectionURL = `${connectionData.protocol}${connectionData.user}${connectionData.password}${connectionData.hostname}${connectionData.domain}${connectionData.database}`;

module.exports = connectionURL;