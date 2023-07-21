// Game: https://tricksplit.io/
// Protection (dir): https://tricksplit.io/bundle.wasm?v2/


class Tricksplit {
  constructor() {}

  $first() {
    // This function creates an encryption key for the Tricksplit authentication packet.
    // This is the first layer of protection in Tricksplit.
    const dateNow = Date.now();
    let uVar2 = (dateNow / 0x3E8) < 0x80000000 ? Math.floor(dateNow / 0x3E8) : 0x80000000;

    const getRandomValue = () => crypto.getRandomValues(new Uint32Array(1))[0];
    let xorKeyPairOne = getRandomValue();
    let xorKeyPairTwo = getRandomValue();

    // XOR operation is used to combine two random values to produce an encryption key.
    // This ensures a unique and unpredictable key for each session.
    this.encryptionKey = xorKeyPairTwo ^ xorKeyPairOne;

    return new Uint32Array([
      uVar2 ^ 0xff1d296,
      xorKeyPairOne ^ ((uVar2 ^ 0xff1d296) / 0x2) ^ 0x1a4, // 0x1a4 = 420, a humorously chosen value.
      xorKeyPairTwo ^ ((uVar2 ^ 0xff1d296) / 0x4) ^ 0x45 // 0x45 = 69, another humorously chosen value.
    ]).buffer;
  }

  $vm(buffer) {
    // In the second layer of protection, the server sends the client a long onmessage buffer.
    // This function then extracts the AES message from it, and decrypts the data.
	// Extract both functions "elementChildFactory" from the cipherText after decryption,
	// run the encryption key through both, and send it back to the server.

    var key;
    var cipherText = this.extractMessage(buffer);
    // Decrypting the ciphertext with the previously generated encryption key.
    var decryptedData = CryptoJS.AES.decrypt(cipherText, this.encryptionKey);

	// Do the rest, it's pretty straight forward.
    // After sending the key, you can then spawn.

    return key;
  }

  extractMessage(buffer) {
    // This function extracts the encrypted message from the server's buffer.
    // It does this by iterating over the buffer until it finds a specific marker (0x55),
    // then returns everything after this marker as the encrypted message.

    const offset = 4;
    let markerIndex = offset;
    while (buffer[markerIndex] !== 0x55) {
      markerIndex++;
    }
    const message = buffer.slice(markerIndex);
    return message;
  }
}
