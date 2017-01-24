const
	should = require('should'),
	challenge = require('../lib/challenge');


describe('Challenge', () => {
	it('should return a challenge object', () => {
		const obj = challenge();

		should.exist(obj);
		should(obj).be.an.Object();

		const hidden = Buffer.from(obj.hidden, 'hex');
		should.exist(hidden);
		should(hidden.length).equal(32);
	});
});
