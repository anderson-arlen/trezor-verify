const
	{randomBytes} = require('crypto');

module.exports = function challenge() {
	return {
		hidden: randomBytes(32).toString('hex'),
		visual: (new Date(Date.now())).toISOString()
	};
};
