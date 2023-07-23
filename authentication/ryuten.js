/**
 * @note
 * 
 * Ryuten's protection named Albion, fully documented as of (7/22/23).
 * Game url: https://ryuten.io/play/
 * Protection directory (Wasm File): https://ryuten.io/play/Albion.wasm?r=22759726
 * 
 * The following code has been translated from WASM to JS.
 *
 * Ryuten.io's servers' communicate between client to server over encrypted packets.
 *
 * The server first sends the encryption keys to the client (First packet received). These keys are then stored in a WebAssembly 
 * (wasm) file via a embind function "store_keys". From there, all communication from the client to the server uses packets encrypted with these keys.
 *
 * The 'store_keys' method is used to store the encryption keys, which should be a 64-byte long Uint8Array.
 *
 * The 'encrypt' method takes a packet (a Uint8Array), encrypts it using the stored keys and returns the 
 * encrypted packet. It also modifies the stored encryption keys as part of its process (Done in Wasm).
 * 
 */

class RyutenWasmInstance {
    constructor() { }

    /**
     * Takes an 8-bit integer and swaps its high 4 bits and low 4 bits.
     * 
     * @param {number} param1 - The 8-bit integer whose bits are to be flipped.
     * @return {number} - The resulting integer after flipping the bits.
     */
    flipLowAndHigh(param1) {
        return (param1 << 4 | param1 >> 4) & 0xff;
    }

    /**
     * Encrypts a packet using the stored keys.
     * 
     * @param {Uint8Array} packet - The packet to be encrypted.
     * @return {Uint8Array} - The encrypted packet.
     */
    encrypt(packet) {
        let packetLength = packet.length;

        // Loop through each byte in the packet
        for (let i = 0; i != packetLength; i++) {
            // Encrypt the byte using the XOR operation with the corresponding key, 
            // and then flipping the high and low 4 bits
            let temp = this.flipLowAndHigh(packet[i] ^ this.keys[i & 0x3f]);
            packet[i] = temp;
        }

        // Loop through each byte in the keys
        for (let ii = 0; ii != 0x40; ii++) {
            // Modify the keys by multiplying by -0x11, taking the result modulo 256, 
            // and then flipping the high and low 4 bits
            let temp = this.flipLowAndHigh(this.keys[ii] * -0x11 & 0xff);
            this.keys[ii] = temp;
        }

        return packet;
    }

    /**
     * Stores the provided encryption keys in this instance for later use.
     * 
     * @param {Uint8Array} keys - The 64-byte encryption keys.
     * @throws {Error} - Throws an error if keys are not 64 bytes long.
     */
    store_keys(keys) {
        if (keys.length !== 64) {
            throw new Error("Encryption keys must be 64 bytes long");
        }

        this.keys = new Uint8Array(keys);
    }
}
