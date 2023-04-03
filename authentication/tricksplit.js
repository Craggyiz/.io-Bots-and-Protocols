
// Game: https://tricksplit.io/
// Protection (dir): https://tricksplit.io/bundle.wasm

class Tricksplit {
  constructor() {}

  // Method to generate a buffer of three 32-bit unsigned integers
  $first() {
    // WASM
    // Get the current time in seconds and generate a seeded value
    var currentSeconds = Date.now() / 1.0e3;
    var seededValue = Math.abs(currentSeconds) < 2147483648 ? Math.trunc(currentSeconds) : -2147483648;

    // Generate the three unsigned integers using a custom encryption scheme
    return new Uint32Array([
      seededValue ^ 267506326,
      (this.$generateCryptoKey() ^ ((seededValue ^ 267501985) / 2)) ^ 420, // Nice :V
      (this.$generateCryptoKey() ^ ((seededValue ^ 267501985) / 4)) ^ 69 // Nice :V
    ])['buffer'];
  }

  // Method to generate a random 32-bit unsigned integer using the Web Crypto API
  $generateCryptoKey(length = 1) {
    // WASM
    const secureKey = crypto.getRandomValues(new Uint32Array(length))[0];
    // Ensure that the generated value is within the range of 0 to 4294967295
    return (secureKey < 4294967296 && secureKey >= 0) ? Math.trunc(secureKey) >>> 0 : 0;
  }

  // Method to decrypt data using the Advanced Encryption Standard (AES) algorithm
  $vm(AES_256_SECRET) {
    // WASM
    // I misplaced where I put this code, but, secret key is sent in a large buffer via a message sent from the server, the CryptoJS library is used to perform the decryption.
    // Use both CryptoJS.AES.decrypt & CryptoJS.enc.Utf8 to extract both eval'd elementChildFactory functions, run the key through both, then send it back.
  }
}
