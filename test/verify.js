const
	should = require('should'),
	verify = require('../lib/verify');

describe('Verify', () => {
	it('should return true when signature is valid', () => {
		const
			hidden = 'cd8552569d6e4509266ef137584d1e62c7579b5b8ed69bbafa4b864c6521e7c2',
			visual = '2015-03-23 17:39:22',
			pubKey = '023a472219ad3327b07c18273717bb3a40b39b743756bf287fbd5fa9d263237f45',
			signature = '20f2d1a42d08c3a362be49275c3ffeeaa415fc040971985548b9f910812237bb41770bf2c8d488428799fbb7e52c11f1a3404011375e4080e077e0e42ab7a5ba02';

		const result = verify(hidden, visual, pubKey, signature, 2);

		should.exist(result);
		should(result).equal(true);
	});

	it('should return false when signature is invalid', () => {
		const
			hidden = 'cd8552569d6e4509266ef137584d1e62c7579b5b8ed69bbafa4b864c6521e7c2',
			visual = '2015-03-23 17:39:21',
			pubKey = '023a472219ad3327b07c18273717bb3a40b39b743756bf287fbd5fa9d263237f45',
			signature = '20f2d1a42d08c3a362be49275c3ffeeaa415fc040971985548b9f910812237bb41770bf2c8d488428799fbb7e52c11f1a3404011375e4080e077e0e42ab7a5ba02';

		const result = verify(hidden, visual, pubKey, signature, 2);

		should.exist(result);
		should(result).equal(false);
	});
});
