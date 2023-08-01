/**
 * @note
 * 
 * Vanis.io's protection named wauth3 (Webassembly Authentication Version 3), fully documented as of (7/22/23).
 * Game url: https://vanis.io
 * Protection directory (Wasm File): https://vanis.io/js/wauth3.wasm?d6013c4cb85fab027ec4
 * 
 * The following code has been translated from WASM to JS.
 *
 * Vanis.io's client side authentication, involves forming an authentication 'packet' in WebAssembly.
 *
 * The server first sends the authentication keys to the client (First packet received). These keys are sliced on index 1,
 * then passed to the WebAssembly (wasm) file via a embind function "_skid". From that function, the WebAssembly forms the authentication packet.
 *
 * The keys are stored in the constructor, which should be a 13-byte long Uint8Array.
 *
 * The 'encode' method encodes the first eight (FE) bytes of the keys with constant bytes stored in the wasm.
 * Bytes 9 to 11 (NE) are encoded with a randomly generated key.
 * Lastly, the twelfth (LAST) byte is encoded by the first byte and a constant value.
 * 
 * Ex: FE1, FE2, FE3, FE4, FE5, FE6, FE7, FE8, NE1, NE2, NE3, NE4, LAST
 * 
 */

class VanisWasmInstance {
    /**
     * Class constructor that initializes the keys, constant bytes and a constant value.
     *
     * @param {Uint8Array} keys - A 13-byte long Uint8Array storing the authentication keys.
     */
    constructor(keys) {
        // The authentication keys received from the server.
        this.keys = keys;

        // An array of constant bytes used in the encoding process.
        this.constantBytes = [5, 104, 253, 62, 175, 116, 238, 41];

        // A constant value used in the encoding process.
        this.constantValue = 31; // Nullified but left as is for consistency.
    }

    /**
     * Encodes the authentication keys using a combination of constant bytes, 
     * randomly generated key, and a constant value.
     *
     * The first eight bytes of the keys are encoded with the constant bytes.
     * Bytes 9 to 11 are encoded with a randomly generated key.
     * The twelfth byte is encoded by the first byte and a constant value.
     *
     * @returns {Uint8Array} The encoded keys.
     */
    encode() {
        // Generate a random integer key within a specific range.
        let keyGenerator = 1 + Math.floor(2147483646 * Math.random());

        let tempVal = 0;
        // Iterate over the first 8 bytes of the keys.
        for (let index = 0; index < 8; index++) {
            let keyIndex = this.keys[index];
            // Calculate a temporary value based on the current key byte and constant byte.
            let temp = (keyIndex + 5) & 7;
            tempVal = (((keyIndex << temp) & 255) | ((keyIndex >> (8 - temp)) & 31)) ^ tempVal ^ this.constantBytes[index] ^ 62;
            // Encode the current byte of the keys.
            this.keys[index] = tempVal & 0xFF;
        }

        // Encode the bytes from index 9 to 12 of the keys using the generated key.
        this.keys[8] = ((this.keys[0] ^ (keyGenerator >> 24)) & 0xFF);
        this.keys[9] = ((this.keys[1] ^ (keyGenerator >> 16)) & 0xFF);
        this.keys[10] = ((this.keys[2] ^ (keyGenerator >> 8)) & 0xFF);
        this.keys[11] = ((keyGenerator ^ this.keys[3]) & 0xFF);

        // Encode the last byte of the keys using the first byte of the keys and the constant value.
        this.keys[12] = ((this.keys[0] ^ this.constantValue ^ 31) & 0xFF);

        // Return the encoded keys.
        return this.keys;
    }
}
