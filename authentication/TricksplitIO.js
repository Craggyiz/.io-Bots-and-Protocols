/**
 * @author (Tatsuya) secureserver on Discord
 * 
 * @license MIT
 * 
 * @note
 * Tricksplit.io's Bot Protection.
 * Documented and open sourced (partially) as of (7/30/2023).
 * Implemented in the game (URL: https://tricksplit.io/) using a WebAssembly (WASM) file, which can be found at: https://tricksplit.io/bundle.wasm?v2/
 * 
 * Translated from WASM to JS.
 * 
 * Senpa.io's anti-bot was based of this one's read senpa.io's anti-bot (also open sourced partially), to get more info.
 * 
 * The auth packet here in this case is the current date at index 0 which is whats checked for validity. And the two random values are used to form the encryption key, which is the xor-ed: (randval2 ^ randval1). 
 * 
 * That same encryption key is used for the solve function. Decrypt the onmessage's AES.
 * Then do the solve, basically the same as senpa's, extract the token and functions, then send back the token to the server to spawn. 
 * 
 **/

class TricksplitWasmInstance {
  constructor() {
    this.storage = {
      keyPairOne: NaN,
      keyPairTwo: NaN
    }
    this.encryptionKey = NaN;
  }

  /**
   * Utility function to convert a signed 32-bit integer to an unsigned 32-bit integer.
   * @private
   * @param {number} int - The signed 32-bit integer to convert.
   * @returns {number} The converted unsigned 32-bit integer.
   */
  #toUnsignedInt32(int) {
    return int >>> 0;
  }

  /**
   * Utility function to ensure the given value is a valid unsigned 32-bit integer or zero if not valid.
   * @private
   * @param {number} int - The int to check.
   * @returns {number} Valid unsigned 32-bit integer or zero if not valid.
   */
  #checkAndFloorUnsignedInt32(int) {
    return int >= 4294967296.0 || int < 0.0 ? 0 : Math.floor(int);
  }

  /**
   * Utility function to generate a random unsigned 32-bit integer.
   * @private
   * @returns {number} Returns valid unsigned 32-bit integer or zero if not valid.
   */
  #getRandomValue() {
    return this.#checkAndFloorUnsignedInt32(crypto.getRandomValues(new Uint32Array(1))[0]);
  }

  /**
   * Generates a random seed value used for authentication (Current date), and checks if it can be safely represented as a 32-bit singed int. If it can then it returns it, otherwise it's set to the lowest possible value for a 32-bit signed integer. 
   * @private
   * @returns {number} The generated seed value.
   * @note This function generates a seed using the current date.
   */
  #generateSeededDateValue() {
    const currentDate = Date.now();

    let tempIntCheck;

    if (Math.abs(currentDate / 1000.0) < 2147483648.0) {
      tempIntCheck = (currentDate / 1000.0);
    } else {
      tempIntCheck = 0x80000000;
    }

    return tempIntCheck;
  }

  /**
   * Generates two random secure keys for authentication.
   * @private
   * @returns {Array<number>} An array containing two random secure keys.
   * @note This function generates two random secure keys using cryptographic randomness.
   */
  #generateRandomSecureKeys() {
    const keyPairOne = this.#toUnsignedInt32(this.#getRandomValue());
    const keyPairTwo = this.#toUnsignedInt32(this.#getRandomValue());

    return [keyPairOne, keyPairTwo];
  }

  /**
   * Solves the secret data using a certain algorithm.
   * @public
   * @param {Uint8Array} data - The secret data to be solved.
   * @note This function solves the secret data using a certain algorithm. The details of the algorithm are not open-sourced.
   */
  solveSecret(data) {
    this.encryptionKey = this.storage.keyPairTwo ^ this.storage.keyPairOne;
    // Code for solving the secret data using a certain algorithm (not open-sourced).
    // Utilize CryptoJS decrypt, and the algorithm is basically the same as senpa's, the actual solve for this ported to JS is ~150 lines, again, basically the same as senpa's solve length.
  }

  /**
   * Generates the first layer of authentication packet with two random values, and a seeded date.
   * @public
   * @returns {ArrayBuffer} The generated authentication packet as an ArrayBuffer.
   * @note This function generates the first layer of authentication packet using cryptographic randomness and the current date.
   */
  first() {
    const authenticationPacket = new Uint32Array(3);

    const generatedSeededDate = this.#generateSeededDateValue();
    const [keyPairOne, keyPairTwo] = this.#generateRandomSecureKeys();

    authenticationPacket[0] = this.#toUnsignedInt32(generatedSeededDate ^ 0xff1d296);
    authenticationPacket[1] = this.#toUnsignedInt32(keyPairOne ^ (generatedSeededDate ^ 0xff1c1a1) / 2 ^ 0x1a4); // Funny value :V - 420
    authenticationPacket[2] = this.#toUnsignedInt32(keyPairTwo ^ (generatedSeededDate ^ 0xff1c1a1) / 4 ^ 0x45); // Funny value :V - 69

    this.storage = {
      keyPairOne: keyPairOne,
      keyPairTwo: keyPairTwo,
    };

    return authenticationPacket.buffer;
  }
}
