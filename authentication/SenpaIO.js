/**
 * @note
 * ---
 * The following code and comments below this note is not made by me. 
 * But, they are made by a person who decided it would be good, for conservation purposes, to open source most of the Senpa.io bot protection.
 * It took him around 10 minutes to bypass it...
 * ---
 */

/**
 * Update 08/25/23
 * I was cleaning some files, and finally decided to release basically all of the rest of the code.
 * I removed some important parts of the final layer, and shifted some thing around as well as removed some checks.
 * So people can't just bot the game to death, but it'll take anyone who knows what they're doing less than 5 minutes
 * to fix the code and get it fully working again as I didn't remove too much. 
 * But, I doubt the game will get botted even after this.
 * 
 * This will most likely be the only open-sourced code of this, as no one else, besides me, has been able to fully bypass
 * both Tricksplit's and Senpa.io's Anti-Bot.
 * 
 * Tricksplit's solve is basically the same as senpa's even arithmetic wise, so this will also apply to Tricksplit.
 */

/**
 * @author (Bot) systemrobot on Discord
 * 
 * @license MIT
 * 
 * @note
 * Senpa.io's Bot Protection.
 * Documented and open sourced (Mostly) as of (7/30/2023).
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
 * Layer 3: Solve Server Message (processInstructions)
 * The final layer involves solving an onmessage buffer received from the server and sending the value back of that solved message to the server for validation. 
 * This layer is known as the "Vm" layer due to the fact that it's using a virtual machine like structure to interpret
 * a custom set of bytecode instuctions. It uses two stacks to perform various operations based on the instruction set provided.
 * These include arithmetic calculations, bitwise operations, stack manipulations, and string transformations. The function iterates through the instructions array and performs actions based on the value of each instruction, modifying the stacks as it goes along. 
 * 
 * Through this the game generates a token, which is a token the user must send to the server to spawn in.
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
   * Main virtual machine solve code.
   * @private
   * @param {Array} instructions - The byteCode to solve.
   */
  #processInstructions(instructions) {
    var mainStackPusher = [];
    var backupStack = [];

    for (var index = 0; index < instructions.length;) {
      var instructionSet = instructions[index++];

      switch (instructionSet) {
        case 0:
          break;

        case 2:
          var popValue = mainStackPusher.pop();
          var indexValue = backupStack[popValue];
          mainStackPusher.push(indexValue);
          break;

        case 3:
          var indexValue = mainStackPusher.pop();
          var newValue = mainStackPusher.pop();
          backupStack[indexValue] = newValue;
          break;

        case 4:
          var lastElementIndex = mainStackPusher.length - 1;
          var lastElement = mainStackPusher[lastElementIndex];
          mainStackPusher.push(lastElement);
          break;

        case 5:
          var popOne = mainStackPusher.pop();
          var popTwo = mainStackPusher.pop();
          mainStackPusher.push(popOne);
          mainStackPusher.push(popTwo);
          break;

        case 0x10:
          var popOne = mainStackPusher.pop();
          var popTwo = mainStackPusher.pop();
          if (popOne === 0) {
            mainStackPusher.push(popOne + popTwo);
          } else {
            mainStackPusher.push(0);
          }
          break;

        case 0x11:
          var popOne = mainStackPusher.pop();
          var popTwo = mainStackPusher.pop();
          if (popOne === 0) {
            mainStackPusher.push(popOne - popTwo);
          } else {
            mainStackPusher.push(0);
          }
          break;

        case 0x12:
          var popOne = mainStackPusher.pop();
          var popTwo = mainStackPusher.pop();
          var result = Math.imul(popTwo, popOne);
          mainStackPusher.push(result);
          break;

        case 0x13:
          var popOne = mainStackPusher.pop();
          var popTwo = mainStackPusher.pop();
          if (popOne === 0) {
            mainStackPusher.push(0);
          } else {
            mainStackPusher.push(popTwo / popOne);
          }
          break;

        case 0x14:
          var popOne = mainStackPusher.pop();
          var popTwo = mainStackPusher.pop();
          mainStackPusher.push(popOne ^ popTwo);
          break;

        case 0x15:
          var popOne = mainStackPusher.pop();
          var popTwo = mainStackPusher.pop();

          mainStackPusher.push(popTwo << (popOne & 0x1f));
          break;

        case 0x16:
          var popOne = mainStackPusher.pop();
          var popTwo = mainStackPusher.pop();

          mainStackPusher.push(popTwo >> (popOne & 0x1f));
          break;

        case 0x17:
          var popOne = mainStackPusher.pop();
          var popTwo = mainStackPusher.pop();
          mainStackPusher.push(popOne & popTwo);
          break;

        case 0x20:
          var popOne = mainStackPusher.pop();
          mainStackPusher.push(popOne ^ 0xFFFFFFFF);
          break;

        case 0x40:
          var str = mainStackPusher.pop();
          var strLength = str.length;
          var newArray = [];

          for (var i = strLength - 1; i >= 0; i--) {
            var charCode = str.charCodeAt(i);
            var transformedCode = charCode ^ 0xb2;
            var newChar = String.fromCharCode(transformedCode);
            newArray.push(newChar);
          }

          newArray.push(strLength);

          var newString = newArray.join('');

          mainStackPusher.push(newString);
          break;

        case 0x41:
          var loopCount = mainStackPusher.pop();
          if (loopCount < 1) {
            loopCount = 0;
          }

          var newArray = [];

          for (var i = 0; i < loopCount; i++) {
            var nextInstruction = mainStackPusher.pop();
            nextInstruction = nextInstruction ^ 0xb2;
            var newChar = String.fromCharCode(nextInstruction);
            newArray.push(newChar);
          }

          var newString = newArray.join('');

          mainStackPusher.push(newString);
          break;

        case 0x42:
          var loopCount = instructions[index++];
          if (loopCount < 1) {
            loopCount = 0;
          }

          var newArray = [];

          for (var i = 0; i < loopCount; i++) {
            var nextInstruction = instructions[index++];
            nextInstruction = nextInstruction ^ 0xb2;
            var newChar = String.fromCharCode(nextInstruction);
            newArray.push(newChar);
          }

          var newString = newArray.join('');

          mainStackPusher.push(newString);
          break;

        case 0x43:
          var index = mainStackPusher.pop();
          var array = mainStackPusher.pop();
          var result = array[index];
          mainStackPusher.push(result);
          break;

        case 0x44:
          var index = mainStackPusher.pop();
          var array = mainStackPusher.pop();
          var value = mainStackPusher.pop();
          array[index] = value;
          break;

        case 0x30:
          var getIndex = mainStackPusher.pop();
          index = getIndex;
          break;

        case 0x31:
          var popOne = mainStackPusher.pop() | 0;
          var popTwo = mainStackPusher.pop();
          if (popTwo == 0) {
            index = popOne;
          }
          break;

        case 0x84:
          var index1 = instructions[index++];
          var index2 = instructions[index++];
          var index3 = instructions[index++];
          var index4 = instructions[index++];

          mainStackPusher.push(index1 | index2 << 8 | index3 << 0x10 | index4 << 0x18);
          break;

        case 0x85:
          // Removed
          break;

        case 0x60:
          mainStackPusher.push(window || Window)
          break;

        default:
          break;
      }
    }
  }

  /**
   * Solves the secret data using the virtual machine.
   * @public
   * @param {Uint8Array} data - The secret data to be solved.
   * @note This function solves the secret data using the virtual machine instructions.
   */
  solveSecret(data) {
    data = Array.from(data);
    this.secretOut = this.#processInstructions(data);
    // Rest of secretOut code has been redacted still.
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
