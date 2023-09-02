/**
 * @author (Bot) systemrobot on Discord
 * @license MIT
 * 
 * @summary Tricksplit.io's Bot Protection - Precisely translated in JS from WASM.
 * 
 * - Initial Authentication:
 *    - Auto-generates a 3-element Uint32Array packet on socket open.
 *    - Index 0 is seeded with the current date for packet validity.
 *    - Indices 1 & 2 contain crypto-random values.
 *    - These random values are XOR'd in the order (Index 2 ^ Index 1) to form the encryption key, referred to as 'first' in the game's embind.
 * 
 * - Bytecode Layer:
 *    - Server sends an AES-salted bytecode to the client.
 *    - Use CryptoJS to decrypt this message using the encryption key.
 *    - The decrypted output appears as random characters. Convert these to charcodes to obtain the VM bytecode.
 * 
 * - VM Processing:
 *    - The bytecode is processed to solve a token and do checks (NodeJS, etc...).
 *    - The solved token is stored in CanvasCaptureMediaStreamTrack.contextBufferFactory.
 *    - This layer is called 'vm' in the game's embind.
 * 
 * - Final Authentication:
 *    - To interact in-game, send the solved token XOR'd with the encryption key, along with a random seed, to the server.
 *    - This step is named 'final' in the game's embind.
 */

class TricksplitioWasmInstance {
  constructor() {
    this.encryptionKey = NaN;
    this.CanvasCaptureMediaStreamTrack = {
      contextBufferFactory: 0
    };
  }

  #toUnsignedInt32(int) {
    return int >>> 0;
  }

  #checkAndFloorUnsignedInt32(int) {
    return int >= 4294967296.0 || int < 0.0 ? 0 : Math.floor(int);
  }

  #getRandomValue() {
    return this.#checkAndFloorUnsignedInt32(crypto.getRandomValues(new Uint32Array(1))[0]);
  }

  #generateRandomSeed() {
    const generateSeedKey = Date.now() / 1000.0;

    let tempIntCheck = 0;

    if (Math.abs(generateSeedKey) < 2147483648.0) {
      tempIntCheck = Math.floor(generateSeedKey);
    } else {
      tempIntCheck = -2147483648;
    }

    return tempIntCheck;
  }

  #generateRandomSecureKeys() {
    const keyPairOne = this.#toUnsignedInt32(this.#getRandomValue());
    const keyPairTwo = this.#toUnsignedInt32(this.#getRandomValue());

    return [keyPairOne, keyPairTwo];
  }

  #extractAES(charByteCode) {
    return String.fromCharCode.apply(null, charByteCode);
  }

  processVMBytecode(byteCode) {
    // No skids! (Muzza)
    /**
     * ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡴⢶⡖⠒⠂⠒⠒⠶⢦⣀⠀⠀⠀⠀⠀⠀⣠⣤⠴⠤⠶⢤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣴⡿⠙⠋⠉⠀⠀⠀⠀⠀⠈⠀⠪⣵⣤⣤⠖⡺⠿⠋⠀⠀⠀⠀⠀⠺⣝⠲⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⢿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⡝⣦⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣴⣯⠟⠁⠀⠀⠀⠀⠀⡀⠄⠀⠀⠀⠀⠢⠤⣤⡀⠘⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⠹⣠⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣰⣻⠏⠀⠀⠀⠀⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠓⢾⡦⠐⠂⠀⠀⠀⠀⠀⠀⠐⠂⠀⠆⢻⣛⠦⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⣰⢿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⡤⠤⠄⠀⠐⠲⠀⠹⢦⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⢼⠷⣄⠀⠀
⠀⠀⠀⢠⣴⣿⢧⡞⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⡴⢞⡯⠕⠒⠂⠉⠁⠀⠀⠒⠒⠢⢿⣷⣶⡮⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⢾⠳⡄
⠀⠀⢰⣟⠞⠁⠘⠁⠀⠀⠀⠀⠀⢀⣀⠚⠋⠁⠚⠋⢁⣀⣠⣤⣤⣤⣤⣤⣤⣀⣀⠀⠈⠙⠀⠀⢀⣠⣤⣤⡤⠤⠤⠤⣤⠀⠤⢬⣦⢳
⠀⣴⠿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣆⠰⢀⣤⠶⠛⠋⠉⠉⣠⣤⣤⣼⣷⣤⣬⣽⠷⠂⠀⠛⠛⠛⠓⠒⠒⠲⠒⠒⠚⠛⠛⢣⡀⠈⣿
⣼⣷⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⡃⠀⠠⠐⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⢠⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡽⣳⣿
⠋⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⢳⡶⣤⣀⠀⠀⠀⠀⠀⠀⢀⣀⣤⡴⠛⠉⠀⠀⠀⠀⠀⠀⢀⠠⠄⠂⠀⣰⢾⣿⠙⠒
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢆⡀⠀⠀⠀⠀⠾⠛⠁⣾⡟⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣮⣿⡛⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡠⠴⠞⠉⠐⠋⠁⠀⠀⠀⠉⠙⠯⢲⠖⠂⠉⠉⠉⠙⣮⢿⣿⣧⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣠⣤⣾⠤⠤⠤⠤⡶⠶⣶⣶⣶⣖⣒⣒⣛⠛⡛⣛⣲⣶⣶⣦⣬⠿⣼⣻⣦⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣶⠀⠀⣾⠛⣩⣵⠿⣶⠶⠿⢾⠛⠛⢻⡟⠛⠻⣏⠙⠻⣿⡟⠛⡻⣿⠉⠙⣿⢿⠀⠀⣿⢾⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣆⠀⣿⡀⢻⡄⠀⢸⡆⠀⠸⡆⣤⣘⣷⣆⣀⣿⣀⣀⣁⣿⣒⣁⣸⡄⠀⣿⠞⠀⣠⣿⡾⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣆⡙⢷⣄⡙⢦⣼⣿⠃⠀⣿⡟⠁⢿⡍⠉⠉⡏⠉⠉⣾⠁⠉⢹⢇⣴⠃⠀⣤⣯⡿⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⣦⠉⠻⣦⡉⠙⣦⣤⡟⠀⠀⢸⠀⠀⣼⠃⠀⢀⣟⣀⣴⣿⠟⢁⣠⣾⣷⠟⠁⠀⠀⠀
⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢳⣄⠀⠀⠀⠀⠀⠈⠙⠆⠀⠉⠻⠷⢯⣭⣭⣭⣼⣿⣯⣽⣶⣿⣿⣿⣿⣿⠿⢛⣿⢿⡿⠋⠀⠀⠀⠀⠀
⣻⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣟⡿⠋⠀⠀⠀⠀⠀⠀⠀
⠋⠙⠿⣯⣟⣶⣤⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣠⣶⣯⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀
⡇⠀⠀⠀⠙⠻⠷⢦⣌⣉⣉⠙⠓⠒⠶⠦⠤⠤⠤⠀⠀⠀⠀⠀⢀⢀⣀⣀⣀⣀⢠⣤⣤⣞⣻⣿⡿⠏⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⡇⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⠛⠿⠷⠶⠶⠶⠤⠤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⠶⠟⠛⠉⠛⢷⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⡇⠀⠀⠀⢀⣀⣀⠀⠀⠀⠀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⢀⡀⠀⠀⣀⠀⠀⠀⠀⠙⠳⣼⠳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
     */
  }

  first() {
    const authenticationPacket = new Uint32Array(3);

    const generatedmakeSeededConstant = this.#generateRandomSeed();
    const [keyPairOne, keyPairTwo] = this.#generateRandomSecureKeys();

    authenticationPacket[0] = this.#toUnsignedInt32(generatedmakeSeededConstant ^ 0xff1d296);
    authenticationPacket[1] = this.#toUnsignedInt32(keyPairOne ^ (generatedmakeSeededConstant ^ 0xff1c1a1) / 2 ^ 0x1a4);
    authenticationPacket[2] = this.#toUnsignedInt32(keyPairTwo ^ (generatedmakeSeededConstant ^ 0xff1c1a1) / 4 ^ 0x45);

    this.encryptionKey = (keyPairTwo ^ keyPairOne);

    return authenticationPacket.buffer;
  }

  decrypt(encryptedData) {
    encryptedData = this.#extractAES(encryptedData);

    var vmByteCode = [];

    var decrypt = CryptoJS.AES.decrypt(encryptedData, this.encryptionKey + "");
    var str = decrypt.toString(CryptoJS.enc.Utf8);

    for (let i = 0; i < str.length; i++) {
      vmByteCode.push(str.charCodeAt(i));
    }

    return vmByteCode;
  }

  final() {
    return this.encryptionKey ^ this.CanvasCaptureMediaStreamTrack.contextBufferFactory;
  }

  randomSeed() {
    return 100000000 * Math.random() + 20000000;
  }
}
