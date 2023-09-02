// Senpa full auth, self explanatory.

class SenpaioWasmInstance {
    constructor() {
        this.storage = new Uint32Array(8);
        this.CanvasCaptureMediaStreamTrack = {
            contextBufferFactory: 0
        };
        this.xorKeys = {
            protoKeys: [],
            mainKeys: []
        };
    }

    #toUnsignedInt32(int) {
        return int >>> 0;
    }

    #toSignedInt32(int) {
        return int | 0;
    }

    #checkAndFloorUnsignedInt32(int) {
        return int >= 4294967296.0 || int < 0.0 ? 0 : Math.floor(int);
    }

    #getRandomValue() {
        return this.#checkAndFloorUnsignedInt32(crypto.getRandomValues(new Uint32Array(1))[0]);
    }

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

    #generateRandomSecureKeys() {
        const keyPairOne = this.#toUnsignedInt32(this.#getRandomValue());
        const keyPairTwo = this.#toUnsignedInt32(this.#getRandomValue());
        const keyPairThree = this.#toUnsignedInt32(this.#getRandomValue());
        const keyPairFour = this.#toUnsignedInt32(this.#getRandomValue());

        return [keyPairOne, keyPairTwo, keyPairThree, keyPairFour];
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

    generateRandomAuthenticationPacket() {
        const authenticationPacket = new Uint32Array(5);

        const generatedmakeSeededConstant = this.#generateRandomSeed();
        const [keyPairOne, keyPairTwo, keyPairThree, keyPairFour] = this.#generateRandomSecureKeys();

        authenticationPacket[0] = this.#toUnsignedInt32(generatedmakeSeededConstant ^ 0x1337);
        authenticationPacket[1] = this.#toUnsignedInt32(generatedmakeSeededConstant >> 1 ^ keyPairOne ^ 0x1a4);
        authenticationPacket[2] = this.#toUnsignedInt32(generatedmakeSeededConstant >> 2 ^ keyPairTwo ^ 0x45);
        authenticationPacket[3] = this.#toUnsignedInt32(generatedmakeSeededConstant >> 3 ^ keyPairThree ^ 0x1a4);
        authenticationPacket[4] = this.#toUnsignedInt32(keyPairFour ^ generatedmakeSeededConstant >> 4 ^ 0x45);

        this.storage[0] = keyPairOne;
        this.storage[1] = keyPairTwo;
        this.storage[2] = keyPairThree;
        this.storage[3] = keyPairFour;

        return authenticationPacket.buffer;
    }

    generateAuthenticationPacketViaSeeded(authenticationKeys) {
        if (authenticationKeys.byteLength !== 16) {
            throw new Error('Invalid authentication Keys length. Expected length: 16.');
        }

        const authenticationPacket = new Uint32Array(4);

        const [keyPairOne, keyPairTwo] = this.storage;

        const makeSeededConstant = this.#toUnsignedInt32(keyPairOne) ^ this.#toUnsignedInt32(keyPairTwo);

        const signedAuthenticationKeys = new Uint32Array(authenticationKeys).map(this.#toSignedInt32);

        authenticationPacket[0] = this.#toUnsignedInt32(signedAuthenticationKeys[0] ^ (makeSeededConstant >>> 1) ^ 0x1a4);
        authenticationPacket[1] = this.#toUnsignedInt32(signedAuthenticationKeys[1] ^ (makeSeededConstant >>> 2) ^ 0x45);
        authenticationPacket[2] = this.#toUnsignedInt32(signedAuthenticationKeys[2] ^ (makeSeededConstant >>> 3) ^ 0x1a4);
        authenticationPacket[3] = this.#toUnsignedInt32(signedAuthenticationKeys[3] ^ (makeSeededConstant >>> 4) ^ 0x45);

        this.storage[4] = authenticationKeys[0];
        this.storage[5] = authenticationKeys[1];
        this.storage[6] = authenticationKeys[2];
        this.storage[7] = authenticationKeys[3];

        return authenticationPacket.buffer;
    }

    proccessXorKeys(type, xorKeys) {
        if (xorKeys.byteLength !== 0x41) {
            throw new Error('Invalid xorKeys Keys length. Expected length: 65.');
        }

        switch (type) {
            case 'protoKeys':
                this.xorKeys.protoKeys = [];

                for (var i = 1; i < 0x41; i++) {
                    i = i + 1;
                    this.xorKeys.protoKeys.push(xorKeys.getUint8(i) ^ 0xb2);
                }
                break;
            case 'mainKeys':
                this.xorKeys.mainKeys = [];

                // No skids! (Hi muzza) ;D
                break;
        }
    }

    decryptOnmessage(onmessage) {
        // No skids! (Hi muzza) ;D

        onmessage = new Uint8Array(onmessage);

        var store = onmessage;
        var [firstByte, idexToXor] = onmessage;

        var xorVal = this.xorKeys.protoKeys[idexToXor] ^ idexToXor;

        store[1] = xorVal;

        return store.slice(1);
    }

    generateFinalAuth() {
        const authenticationPacket = new DataView(new ArrayBuffer(10));
        const mainPacket = new DataView(new ArrayBuffer(11));

        var randomSeedToken = Math.random() * 100000000.0 + 20000000.0;

        // No skids! (Hi muzza) ;D
        var xorVal;
        var xorKeys;
        var xorToken = this.CanvasCaptureMediaStreamTrack.contextBufferFactory ^ xorVal;

        authenticationPacket.setUint8(0, 1);
        authenticationPacket.setUint8(1, 20);
        authenticationPacket.setInt32(2, xorToken, true);
        authenticationPacket.setInt32(6, randomSeedToken, true);

        var parseAuth = new Uint8Array(authenticationPacket);

        return mainPacket.buffer
    }
}
