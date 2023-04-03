// Game: https://ryuten.io/play/
// Protection (dir): https://ryuten.io/play/Albion.wasm?r=84176507

class RCrypt {
  constructor() {}

  // Set the encryption keys
  // keys: array of 64 bytes representing the encryption keys
  set_keys(keys) {
    this.encryptionKeys = keys || [];
  }

  // Private method to perform bitwise shift and AND operations
  // var0: value to be transformed
  $func165(var0) {
    // Perform bitwise shift and logical AND operations
    return ((var0 << 4) | (var0 >> 4)) & 255;
  }

  // Private method to encrypt or decrypt data
  // packet: array of bytes representing the data to be encrypted or decrypted
  $func212(packet) {
    // Create a new array to hold the transformed bytes
    var HEAPU8subarray = [];

    // Loop through each byte in the packet array
    for (var i = 0; i < packet.length; i++) {
      // Perform a bitwise XOR operation between the byte and the corresponding key byte
      var xorResult = packet[i] ^ this.encryptionKeys[(i & 63)];
      // Pass the result of the XOR operation to the $func165 method
      var transformedByte = this.$func165(xorResult);
      // Add the transformed byte to the new array
      HEAPU8subarray[i] = transformedByte;
    }

    // Update the encryption keys
    for (var i = 0; i < 64; i++) {
      // Perform bitwise and mathematical operations on each byte of the key
      this.encryptionKeys[i] = this.$func165((this.encryptionKeys[i] * -17) & 255);
    }

    // Return the transformed byte array
    return new Uint8Array(HEAPU8subarray) instanceof Uint8Array ? HEAPU8subarray : new Uint8Array(HEAPU8subarray);
  }
}
