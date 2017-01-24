const
	bitcore = require('bitcore-lib'),
	{PublicKey} = bitcore,
	{BufferWriter} = bitcore.encoding,
	{Signature, ECDSA, Hash} = bitcore.crypto,
	{sha256sha256, sha256} = Hash;

module.exports = function verify(hiddenChallenge, visualChallenge, pubKey, signature, version) {
	if (!(hiddenChallenge instanceof Buffer))
		hiddenChallenge = Buffer.from(hiddenChallenge, 'hex');
	if (!(visualChallenge instanceof Buffer))
		visualChallenge = Buffer.from(visualChallenge);
	if (!(pubKey instanceof Buffer))
		pubKey = Buffer.from(pubKey, 'hex');
	if (!(signature instanceof Buffer))
		signature = Buffer.from(signature, 'hex');

	pubKey = new PublicKey(pubKey);
	signature = Signature.fromCompact(signature);

	let message;

	if (version === 1) {
		message = Buffer.concat([hiddenChallenge, visualChallenge]);
	} else if (version === 2) {
		message = Buffer.concat([sha256(hiddenChallenge), sha256(visualChallenge)]);
	} else {
		throw new Error('Unknown version');
	}

	const
		magicBytes = Buffer.from('Bitcoin Signed Message:\n'),
		prefix1 = BufferWriter.varintBufNum(magicBytes.length),
		prefix2 = BufferWriter.varintBufNum(message.length),
		buf = Buffer.concat([prefix1, magicBytes, prefix2, message]),
		hash = sha256sha256(buf);

	return ECDSA.verify(hash, signature, pubKey);
};
