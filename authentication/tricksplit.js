
// Game: https://tricksplit.io/
// Protection (dir): https://tricksplit.io/bundle.wasm?v2/

class TricksplitIO {
  constructor() {}

  // Layer 1:
  // Sent after 255 and 254 packet
  $first() {
    // Tricksplit.io checks the validity of the auth packet by checking the time it was created.
    // I assume the time tolerance is -5 seconds, although this is sent instantly, so I never checked.
    const result = new Uint32Array(3);
    const nowTime = Date.now() / 1000.0;
    let timeVal = 0;

    // Ensure that the time value is within a valid range
    // Basic WASM function
    if (Math.abs(nowTime) < 2147483648.0) {
      timeVal = Math.trunc(nowTime);
    } else {
      timeVal = -2147483648;
    }

    // Generate the authentication packet by performing bitwise operations on the
    // time value and using the result to generate a sequence of random numbers.
    result[0] = timeVal ^ 267506326;
    result[1] = (crypto.getRandomValues(new Uint32Array(1))[0] ^ 267501985) ^ (result[0] >> 2) ^ 420; // Funny number :V
    result[2] = (crypto.getRandomValues(new Uint32Array(1))[0] ^ ((timeVal / 4) | 0)) ^ (result[1] >> 4) ^ 69; // Funny number :V

    // Return the authentication packet as a Uint32Array buffer as done in the WASM file
    return result.buffer;
  }

  // Layer 2:
  // Method to decrypt data using the Advanced Encryption Standard (AES) algorithm
  $vm(AES_256_SECRET) {
    // WASM
    // I misplaced where I put this code, but, secret key is sent in a large buffer via a message sent from the server, the CryptoJS library is used to perform the decryption.
    // Use both CryptoJS.AES.decrypt & CryptoJS.enc.Utf8 to extract both eval'd elementChildFactory functions, run the key through both, then send it back.
  }
}
