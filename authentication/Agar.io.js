class Algorithm {
    // Agar.io algorithm, 3/5th's of it here.
    constructor() {
        this.protocolVersion = 23;
        this.protocolKey = this.solveProtoKey();
    }

    solveProtoKey() {
        // Wasm solves it through ints, but you can still do it this way.
        var versionString = "3.11.22";
        var versionInt = parseInt(versionString.split(".")[0]) * 10000 + parseInt(versionString.split(".")[1]) * 100 + parseInt(versionString.split(".")[2]);
        return versionInt;
    }

    Buffer(buf = 1) {
        return new DataView(new ArrayBuffer(buf));
    }

    sendProtocolVersion() {
        const protocolversionVal = 254;
        const protoBuffer = this.Buffer(5);
        protoBuffer.setUint8(0, protocolversionVal);
        protoBuffer.setUint32(1, this.protocolVersion, true);
        return protoBuffer;
    }

    sendProtocolKeys() {
        const protocolKeyVal = 255;
        const xorKey = protocolKeyVal | ((this.protocolKey) << 8)
        const protocolKeyBuffer = this.Buffer(9);
        protocolKeyBuffer.setUint32(0, xorKey, true);
        return protocolKeyBuffer;
    }

    ROT(key) {
        key = key | 0;
        key = Math_imul(key | 0, 1540483477);
        key = Math_imul((key >>> 24 | 0) ^ key | 0, 1540483477) ^ 114296087 | 0;
        key = Math_imul((key >>> 13 | 0) ^ key | 0, 1540483477);
        key = (key >>> 15 | 0) ^ key | 0;
        return key;
    }
}
