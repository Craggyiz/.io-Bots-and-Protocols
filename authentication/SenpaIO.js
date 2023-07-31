/**
 * @note
 * ---
 * The following code and comments below this note is not made by me. 
 * But, they are made by a person who decided it would be good, for conservation purposes, to open source most of the Senpa.io bot protection.
 * It took him around 10 minutes to bypass it...
 * ---
 */

/**
 * @author (Bot) systemrobot on Discord
 * 
 * @license MIT
 * 
 * @note
 * Senpa.io's Bot Protection.
 * Documented and open sourced (partially) as of (7/30/2023).
 * Implemented in the game (URL: https://senpa.io/web/) using a WebAssembly (WASM) file, which can be found at: https://senpa.io/web/build/bundle.wasm
 * 
 * Precisely translated from WASM to JS.
 * 
 * The authentication process involves multiple layers of protection:
 * 
 * Layer 1: Generate Random Authentication Packet
 * Senpa.io's authentication is sent via their WebSocket hook and embind function 'create', which binds a new WebSocket and its events to the WASM.
 * Upon socket open, the WASM auto-sends the first layer of protection - an authentication packet of length 20, aptly named 'generateRandomAuthenticationPacket'.
 * This packet is generated using a random 64-bit double-precision floating-point number as the seed, along with 4 random unsigned 32-bit integers.
 * The WASM stores all 4 generated random values in memory before sending the packet as a .buffer for later use.
 * 
 * Layer 2: Generate Authentication Packet Two
 * After successfully bypassing Layer One, the server sends the client two packets. Layer Two's packet has a length of 16.
 * The WASM reads the packet length of 16, processes it into a Uint32Array, and uses it to create packet two.
 * Packet two is generated using xor of previously generated random values one and two as a seed, along with the 4 values from the new Uint32Array conversion.
 * This packet is also auto-sent by the WASM via the binded WebSocket.
 * 
 * Layer 3: Solve Server Message
 * The final layer involves solving an onmessage buffer received from the server and sending the value back of that solved message to the server for validation. 
 * However, this part of the code is not open-sourced for security reasons.
 * 
 */

class SenpaioWasmInstance {
  constructor() {
    this.storage = {
      keyPairOne: NaN,
      keyPairTwo: NaN,
      keyPairThree: NaN,
      keyPairFour: NaN,
    };
    this.secretOut = NaN;
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
   * Utility function to convert an unsigned 32-bit integer to a signed 32-bit integer.
   * @private
   * @param {number} int - The unsigned 32-bit integer to convert.
   * @returns {number} The converted signed 32-bit integer.
   */
  #toSignedInt32(int) {
    return int | 0;
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
   * Generates a random seed value used for authentication (64-bit Double precision floating point number), then converts it to 32-bit unsigned integer if within range.
   * @private
   * @returns {number} The generated random seed value.
   * @note This function generates a random seed using cryptographic randomness.
   */
  #generateRandomSeed() {
    const generateSeedKey = Math.floor(this.#toUnsignedInt32(this.#getRandomValue()) / 0x2bad) * 11181.0;

    let tempIntCheck;

    if (generateSeedKey < 4294967296.0 && 0.0 <= generateSeedKey) {
      tempIntCheck = Math.floor(generateSeedKey);
    } else {
      tempIntCheck = 0;
    }

    return tempIntCheck;
  }

  /**
   * Generates four random secure keys for authentication.
   * @private
   * @returns {Array<number>} An array containing four random secure keys.
   * @note This function generates four random secure keys using cryptographic randomness.
   */
  #generateRandomSecureKeys() {
    const keyPairOne = this.#toUnsignedInt32(this.#getRandomValue());
    const keyPairTwo = this.#toUnsignedInt32(this.#getRandomValue());
    const keyPairThree = this.#toUnsignedInt32(this.#getRandomValue());
    const keyPairFour = this.#toUnsignedInt32(this.#getRandomValue());

    return [keyPairOne, keyPairTwo, keyPairThree, keyPairFour];
  }

  /**
   * Solves the array based on the pattern.
   * @private
   * @note This function contains the logic for solving the array based on the pattern. This part is not open-sourced.
   */
  #handleSolve(patternedValue, bytes, results) {
    // Code for solving the array based on the pattern (not open-sourced).
  }

  /**
   * Processes the input array and performs certain operations based on the pattern.
   * @private
   * @param {Uint8Array} array - The input array to process.
   * @returns {Array} An array of results after processing.
   * @note This function processes the input array and applies certain operations based on the pattern. The logic for solving the array is not open-sourced.
   */
  #processArray(array) {
    if (!(array instanceof Uint8Array)) {
      throw new Error("Input must be a Uint8Array.");
    }

    array = Array.from(array);

    let findCaseSwitch = 0;
    let bytes = [];
    const results = [];

    for (let i = 0; i < array.length; i++) {
      if (i % 5 === 0) {
        if (bytes.length > 0) {
          this.#handleSolve(findCaseSwitch, bytes, results);
          bytes = [];
        }
        findCaseSwitch = array[i];
      } else {
        bytes.push(array[i]);
      }
    }

    if (bytes.length > 0) {
      this.#handleSolve(findCaseSwitch, bytes, results);
    }

    return results;
  }

  /**
   * Solves the secret data using a certain algorithm.
   * @public
   * @param {Uint8Array} data - The secret data to be solved.
   * @note This function solves the secret data using a certain algorithm. The details of the algorithm are not open-sourced for security reasons.
   */
  solveSecret(data) {
    this.secretOut = this.#processArray(data);
    // Code for solving the secret data using a certain algorithm (not open-sourced).
  }

  /**
   * Generates the first layer of authentication packet with random values.
   * @public
   * @returns {ArrayBuffer} The generated authentication packet as an ArrayBuffer.
   * @note This function generates the first layer of authentication packet using cryptographic randomness and certain calculations.
   */
  generateRandomAuthenticationPacket() {
    const authenticationPacket = new Uint32Array(5);

    const generatedmakeSeededConstant = this.#generateRandomSeed();
    const [keyPairOne, keyPairTwo, keyPairThree, keyPairFour] = this.#generateRandomSecureKeys();

    authenticationPacket[0] = this.#toUnsignedInt32(generatedmakeSeededConstant ^ 0x1337); // Funny value :V - LEET
    authenticationPacket[1] = this.#toUnsignedInt32(generatedmakeSeededConstant >> 1 ^ keyPairOne ^ 0x1a4); // Funny value :V - 420
    authenticationPacket[2] = this.#toUnsignedInt32(generatedmakeSeededConstant >> 2 ^ keyPairTwo ^ 0x45); // Funny value :V - 69
    authenticationPacket[3] = this.#toUnsignedInt32(generatedmakeSeededConstant >> 3 ^ keyPairThree ^ 0x1a4); // Funny value :V - 420
    authenticationPacket[4] = this.#toUnsignedInt32(keyPairFour ^ generatedmakeSeededConstant >> 4 ^ 0x45); // Funny value :V - 69

    this.storage = {
      keyPairOne: keyPairOne,
      keyPairTwo: keyPairTwo,
      keyPairThree: keyPairThree,
      keyPairFour: keyPairFour,
    };

    return authenticationPacket.buffer;
  }

  /**
   * Generates the second layer of authentication packet using previously generated keys.
   * @public
   * @param {ArrayBuffer} authenticationKeys - The authentication keys for generating the packet.
   * @returns {ArrayBuffer} The generated authentication packet as an ArrayBuffer.
   * @note This function generates the second layer of authentication packet using the previously generated keys and cryptographic operations.
   */
  generateAuthenticationPacketViaSeeded(authenticationKeys) {
    if (authenticationKeys.byteLength !== 16) {
      throw new Error('Invalid authentication Keys length. Expected length: 16.');
    }

    const authenticationPacket = new Uint32Array(4);

    const [keyPairOne, keyPairTwo] = [this.storage.keyPairOne, this.storage.keyPairTwo];

    const makeSeededConstant = this.#toUnsignedInt32(keyPairOne) ^ this.#toUnsignedInt32(keyPairTwo);

    const signedAuthenticationKeys = new Uint32Array(authenticationKeys).map(this.#toSignedInt32);

    authenticationPacket[0] = this.#toUnsignedInt32(signedAuthenticationKeys[0] ^ (makeSeededConstant >>> 1) ^ 0x1a4); // Funny value :V - 420
    authenticationPacket[1] = this.#toUnsignedInt32(signedAuthenticationKeys[1] ^ (makeSeededConstant >>> 2) ^ 0x45); // Funny value :V - 69
    authenticationPacket[2] = this.#toUnsignedInt32(signedAuthenticationKeys[2] ^ (makeSeededConstant >>> 3) ^ 0x1a4); // Funny value :V - 420
    authenticationPacket[3] = this.#toUnsignedInt32(signedAuthenticationKeys[3] ^ (makeSeededConstant >>> 4) ^ 0x45); // Funny value :V - 69

    return authenticationPacket.buffer;
  }
}

// Me after eyes do see the very epic 69, 420, leet numbers:

/**
 * ⣽⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠟⠛⠋⠁⠤⡀⠤⢠⢀⠉⠙⠻⠿⠛⠁⢠⠐⡄⢂⠤⡐⢠⢀⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠋⠉⢀⠀⡀⠐⠀⠢⠌⣀⠡⢊⠔⠨⠘⠐⠀⠀⠂⠉⠆⢡⠒⡨⠐⢌⠂⡌⠒⠤⡀⠙⢿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⡿⠋⠀⡀⣀⣤⣤⣤⣤⣤⣈⠐⠀⡀⠑⠀⠀⠐⣀⣈⣠⣠⣀⣁⡀⠀⠀⠁⠉⢆⡘⢠⠉⢆⠱⡀⠀⠹⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⠛⢀⡐⠚⠉⠙⠻⣿⣿⣿⣿⣿⣿⣦⠀⠀⠀⠀⠉⠙⠿⣿⣿⣿⣿⣿⣿⣦⡈⠠⠀⡘⠄⢣⠈⢆⠡⠌⡀⠹⣿⣿⣿⣿⣿
⣿⣿⣿⣿⡏⢠⡏⠀⢀⡄⠀⠄⠈⣿⣿⣿⣿⣿⡇⢀⠀⠀⣀⠀⢀⡀⠙⣿⣿⣿⣿⣿⣿⣿⣦⣤⣀⠉⢄⠣⠌⢒⠠⠐⡀⢹⣿⣿⣿⣿
⣿⣿⣿⣿⣇⠘⣷⡀⠈⠉⠀⠀⣰⣿⣿⣿⣿⣿⠀⣩⠀⠘⠻⠇⠈⠀⠀⣿⣿⣿⣿⣿⣿⣿⡿⠃⠉⣀⠰⡈⠜⡠⢂⠡⢀⠘⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣆⡈⠻⠶⣦⣶⣿⣿⣿⡿⠟⠋⡀⢄⠈⢷⣄⡀⠀⢀⣠⣾⣿⣿⣿⣿⣿⠟⠉⡀⠀⡱⢀⠃⡌⠢⠑⡄⢂⠡⠈⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣦⣀⠀⠀⠀⠀⠀⠀⠀⢀⠢⠑⡈⢆⠀⠈⠙⠛⠿⠿⠿⠿⠟⠛⠉⠁⠄⠂⡀⢆⠡⠊⡔⠨⣁⠣⢘⠀⣂⠐⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⠟⠉⡉⢄⠢⡑⢌⠢⡉⢆⠡⢃⠜⡠⢒⠠⡈⠀⠐⠀⡀⢀⡀⠠⢄⠢⡐⢡⠘⢄⠃⡱⢈⠥⠐⡌⢢⠁⠄⠂⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡇⠀⠐⠈⢀⠀⡀⢀⠀⡀⡀⢀⠁⡈⠀⠁⠂⠡⠉⠌⡱⢈⠆⡌⢡⠊⠤⠑⡂⠍⢢⠘⡐⢌⠰⢡⠘⠤⠈⠤⠁⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡅⠄⠐⠈⠄⢀⠀⡀⢀⠀⠁⠈⠀⠐⠁⠘⠀⠢⠐⢠⠀⡀⠈⠐⠁⠎⡰⢡⠘⠌⡄⢣⠘⡠⢃⠢⢉⠢⢁⠂⡁⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣦⡇⠈⠠⠀⢂⠐⠠⠈⠄⠡⠈⠄⠂⡀⠂⢀⠀⠀⠀⠁⠈⠂⠆⠠⠀⠁⡊⠔⡨⠄⡃⠔⡡⢊⠄⡃⠄⠒⡀⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡄⠠⢁⠀⠌⠠⠁⠌⠠⢁⠂⡐⠀⠌⠀⠠⠁⠐⠀⠠⠀⠀⠁⠌⠀⠜⡠⢑⠢⠑⡌⡐⢢⠘⠠⠌⡐⠠⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⡿⠟⠂⠐⡠⠀⠌⠡⠈⠄⡁⢂⠐⡀⠌⠀⠌⢀⠐⠈⠀⠄⠐⠀⢀⠀⡈⢆⠡⢂⠅⢣⠐⡡⠂⡍⠐⡠⠂⣸⣿⣿⣿⣿
⣿⣿⠟⠉⣉⣉⣀⢐⣁⣀⣀⣀⣈⠀⠑⠠⠐⡀⠂⠄⠠⠁⠂⠠⠀⠌⠀⠀⣀⠂⠂⢠⠑⡌⢢⠁⠎⠄⠣⡐⠡⠄⡑⠀⣴⣬⣥⣭⣬⠙
⣿⣿⡃⢾⣿⣭⡿⣿⣿⠌⠺⣿⣿⣿⣶⡄⠡⢀⠡⠈⣠⣶⣶⠖⣦⣦⣤⠀⠄⠀⡔⠡⠊⣠⣤⣶⣶⣶⡶⣤⡄⠐⠠⠀⣿⣿⣻⣟⡏⢸
⣿⣿⡅⣻⢷⣫⣟⡿⠞⠀⠀⣿⢷⣯⢿⣽⠀⠀⢠⣿⢿⣻⠾⠀⢲⣟⣯⢶⡄⠘⠠⢡⣾⡟⣿⡽⠯⠓⠛⠣⠁⠀⠠⠀⣟⣷⣛⡾⡇⢺
⣿⣿⡅⢺⣯⢗⣯⢿⡍⠀⢀⣯⣟⣮⣟⡞⠀⠀⡿⣭⢯⣟⡇⠀⢸⣟⡮⣿⡝⠀⠀⢾⣳⢻⢷⣛⠀⠀⢀⣀⣠⣄⠀⠐⢸⡷⢯⣻⢁⣻
⣿⣿⡃⢹⣮⢻⣜⡯⣟⡖⢮⡗⡯⠞⠜⠀⠀⠀⣿⡹⢧⡟⡄⠀⢸⣏⡗⣧⠟⠀⡄⢹⢧⡻⣏⢷⠀⠀⢸⣟⣳⡭⠀⠀⠠⠭⠥⠲⠾⣿
⣿⣿⡇⢸⢧⡻⣜⡳⣭⠀⡀⣀⣀⡀⠒⠌⠒⠄⠘⣽⢣⡟⣅⠀⣼⢣⡟⡼⠃⠐⣀⡈⠳⣝⠾⣭⢳⡞⠽⣎⢷⢣⠀⡀⢸⡻⣝⢯⡃⢹
⣿⣿⣧⠘⠃⠙⠊⠑⢉⢀⣰⣿⣿⣿⣿⣶⣦⣴⣦⣈⡃⠙⠚⠘⠃⠋⢘⣀⣼⣿⣿⣿⣄⣈⡙⣈⢃⡁⢀⣉⣈⣁⣰⣷⣈⣁⣉⣊⣁⣼
⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⡿⢿⠿⡿⢿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
 */
