class Senpa {
  constructor() {
    // Same guy who did tricksplit's anti-bot probably did senpa's as well, based off similar auths.
  }

  // Method to check if a number is a valid 32-bit unsigned integer using WebAssembly
  $wasm32IntCheck($num) {
    // WASM
    // Basic integer check.
    $num = +$num;
    if ($num >= 0.0 && $num < 4294967296.0) {
      return Math.floor($num) >>> 0;
    }
    return 0;
  }

  // Method to generate a random 32-bit unsigned integer using the Web Crypto API
  $generateCryptoKey() {
    // WASM
    return this.$wasm32IntCheck((crypto.getRandomValues(new Uint32Array(1))[0]));
  }

  // Method to generate the first authentication token for a client
  getfirstAuth() {
    // WASM
    // Generate a random number and use it to derive five unsigned integers using a custom encryption scheme
    var hashFactor = (this.$generateCryptoKey() >>> 0) / (11181 >>> 0);
    var hashValue = Math.floor(hashFactor * 11181) >>> 0;

    return new Uint32Array([
      hashValue ^ 4919,
      ((hashValue >>> 1) ^ (this.$generateCryptoKey()) ^ 420), // Nice :V
      ((hashValue >>> 2) ^ (this.$generateCryptoKey()) ^ 69), // Nice :V
      ((hashValue >>> 3) ^ (this.$generateCryptoKey()) ^ 420), // Nice :V
      (this.$generateCryptoKey()) ^ (hashValue >>> 4) ^ 69 // Nice :V
    ])['buffer'];
  }

  // Method to generate the second authentication token for a client
  getSecondAuth() {
    // WASM
    // Generate two random numbers and use them to derive four unsigned integers using a custom encryption scheme
    var firstKey = this.$generateCryptoKey();
    var secondKey = this.$generateCryptoKey();

    var hashFactor = firstKey ^ secondKey;
    return new Uint32Array([
      this.$generateCryptoKey() ^ (hashFactor >>> 1) ^ 420, // Nice :V
      (secondKey) ^ (hashFactor >>> 2) ^ 69, // Nice :V
      this.$generateCryptoKey() ^ (hashFactor >>> 3) ^ 420, // Nice :V
      this.$generateCryptoKey() ^ (hashFactor >>> 4) ^ 69 // Nice :V
    ])['buffer'];
  }

  // Method for extracting the encryption key from a large buffer sent by the server
  _alloc(onmessageheap) {
    // Same thing as tricksplit, extract the encryption key, decrypt the payload, extract both elementChildFactory functions then run the key through both and send it back.
  }
}
