/**
 * @note
 * Made by secureserver on Discord. Ported from WASM to JS.
 * 
 * 1. Vanis.io protection forms an authentication 'packet' using a wasm file.
 * 2. First eight (FE) bytes of the packet are created by encoding keys with constant bytes in the wasm.
 * 3. Bytes 9 to 11 (NE) encode the first four bytes with a randomly generated key.
 * 4. The twelfth (LAST) byte encodes the first byte and a constant value, making each packet unique.
 * 
 * Ex: FE1, FE2, FE3, FE4, FE5, FE6, FE7, FE8, NE1, NE2, NE3, NE4, LAST
 */

class VanisWasmInstance {
  constructor(keys) {
    this.keys = keys;
    this.constantBytes = [5, 104, 253, 62, 175, 116, 238, 41];
    this.constantValue = 31; // Nullified but left as is for consistency.
  }

  encode() {
    let keyGenerator = 1 + Math.floor(2147483646 * Math.random());

    let tempVal = 0;
    for (let index = 0; index < 8; index++) {
      let keyIndex = this.keys[index];
      let uVar25 = (keyIndex + 5) & 7;
      tempVal = (((keyIndex << uVar25) & 255) | ((keyIndex >> (8 - uVar25)) & 31)) ^ tempVal ^ this.constantBytes[index] ^ 62;
      this.keys[index] = tempVal & 0xFF;
    }

    this.keys[8] = ((this.keys[0] ^ (keyGenerator >> 24)) & 0xFF);
    this.keys[9] = ((this.keys[1] ^ (keyGenerator >> 16)) & 0xFF);
    this.keys[10] = ((this.keys[2] ^ (keyGenerator >> 8)) & 0xFF);
    this.keys[11] = ((keyGenerator ^ this.keys[3]) & 0xFF);
    this.keys[12] = ((this.keys[0] ^ this.constantValue ^ 31) & 0xFF);

    return this.keys;
  }
}
