const crypto = require('crypto');
console.log('PAYLOAD_SECRET=' + crypto.randomBytes(32).toString('hex'));
