let connection;

function startConnection() {
    connection = new WebSocket('wss://s3.cellcraft.io:2083/');
    connection.binaryType = "arraybuffer";
    connection.onopen = onWsOpen;
    connection.onmessage = onWsMessage;
    connection.onclose = onWsClose;
    connection.onerror = function () { };
}

let zn = 8730
let xor = -1

function onWsOpen() {
    const Init = build(13);
    Init.setUint8(0, 245);
    Init.setUint16(1, 22, true);
    Init.setUint16(3, 118, true);
    Init.setUint32(5, zn, true);
    Init.setUint32(9, vd(Init, 0, 9, 245), true);
    connection.send(Init.buffer);
}

function vd(d, b, x, _) {
    b + x > d.byteLength && (x = 0);
    for (var e = 12345678 + _, t = 0; x > t; t++) {
        e += d.getUint8(b + t) * (t + 1);
    }
    return e;
}

function build(d) {
    return new DataView(new ArrayBuffer(d));
}

function onWsMessage(data) {
    var view = new DataView(data.data);
    var offset = 0;
    switch (240 == view.getUint8(offset) && (offset = offset + 5), view.getUint8(offset++)) {
        case 64: {
            offset += 34;
            var thirtyFourKey = view.getUint32(offset, true);
            offset += 4;
            var fourKey = view.getUint32(offset, true);
            if (thirtyFourKey === fourKey) {
                if (70 > this.Tags.to) {
                    xor = thirtyFourKey;
                    shiftXor();
                }
            } else {
                this.ws.close();
                console.log("Err in 64!");
            }
        }
            break;
    }
}

function shiftXor() {
    var xorKey = build(13);
    xorKey.setUint8(0, 2 * (100 + 30) - (xor - 5) % 10 - 5);
    xorKey.setUint32(1, ~~(xor / 1.84 + 100 / 2 - 2 * (0 ? 0.5 : 1)) + ~~(~~(21.2 * (~~(xor + 4.42 * zn + 555) % --33000 + 36360)) / 4.2), true)
    xorKey.setUint32(5, gx() + 103, true);
    xorKey.setUint32(9, vd(xorKey, 0, 9, 255), true);
    connection.send(xorKey.buffer);
}

function gx() {
    for (var d = 0, b = 0; b < On.length; b++) {
        d += ~~(xor / On[b] - On[b] % 103);
    }
    return d;
}

function On() {
    var wrapper = "~9B\\x$";
    return [
        wrapper.charCodeAt(0),
        wrapper.charCodeAt(1),
        wrapper.charCodeAt(2) + 73,
        wrapper.charCodeAt(3),
        wrapper.charCodeAt(4) + 227,
        wrapper.charCodeAt(5)
    ];
}

function onWsClose() {
    console.log("WebSocket Closed!")
}

startConnection()
