// Get client mouse pos in ryuten.
// Could just do it a more easy way, but that's just lame.

window.WebSocket = new Proxy(window.WebSocket, {
  construct: function (target, args) {
    const ws = new target(...args);

    const RCrypt = {

      gotEncryptionKeys: false,

      encryptionKeys: [],

      set_keys(keys) {
        this.encryptionKeys = keys || [];
      },

      bitShift(var0) {
        return ((var0 << 4) | (var0 >> 4)) & 255;
      },

      encrypt(packet) {
        var HEAPU8subarray = [];

        for (var i = 0; i < packet.length; i++) {
          var xorResult = packet[i] ^ this.encryptionKeys[(i & 63)];
          var transformedByte = this.bitShift(xorResult);
          HEAPU8subarray[i] = transformedByte;
        }

        for (i = 0; i < 64; i++) {
          this.encryptionKeys[i] = this.bitShift((this.encryptionKeys[i] * -17) & 255);
        }

        return new Uint8Array(HEAPU8subarray) instanceof Uint8Array ? HEAPU8subarray : new Uint8Array(HEAPU8subarray);
      },

      inverseBitShift(var0) {
        return ((var0 >> 4) | (var0 << 4)) & 255;
      },

      decrypt(encryptedPacket) {
        var HEAPU8subarray = [];

        for (var i = 0; i < encryptedPacket.length; i++) {
          var transformedByte = this.inverseBitShift(encryptedPacket[i]);
          var xorResult = transformedByte ^ this.encryptionKeys[(i & 63)];
          HEAPU8subarray[i] = xorResult;
        }

        for (i = 0; i < 64; i++) {
          this.encryptionKeys[i] = this.inverseBitShift((this.encryptionKeys[i] * -17) & 255);
        }

        return new Uint8Array(HEAPU8subarray) instanceof Uint8Array ? HEAPU8subarray : new Uint8Array(HEAPU8subarray);
      }

    }

    ws.send = new Proxy(ws.send, {
      apply: (target, thisArg, args) => {

        var decrypt = RCrypt.decrypt(args[0]);

        //console.log('Data sent:', args[0], decrypt);

        if (decrypt[0] === 30) {
            var data = new Uint8Array(decrypt);
            var normalize = new DataView(data.buffer);

            var x = normalize.getUint16(2, true);
            var y = normalize.getUint16(4, true);

            console.log('Client mouse has been decrypted.', 'x: '+ x, 'y: ' + y);
        }

        return target.apply(thisArg, args);
      }
    });

    const openHandler = (event) => {

      console.log('Socket Open');
      RCrypt.gotEncryptionKeys = false;

    };

    const messageHandler = (event) => {

      if (!RCrypt.gotEncryptionKeys) {
        RCrypt.gotEncryptionKeys = true;
        RCrypt.encryptionKeys = new Uint8Array(event.data);
        console.log('Grabbed client encryption keys.', RCrypt.encryptionKeys, ws)
        return;
      }

    };

    const closeHandler = (event) => {

      RCrypt.gotEncryptionKeys = false;
      console.log('Close', event);

      ws.removeEventListener('open', openHandler);
      ws.removeEventListener('message', messageHandler);
      ws.removeEventListener('close', closeHandler);

    };

    ws.addEventListener('open', openHandler);
    ws.addEventListener('message', messageHandler);
    ws.addEventListener('close', closeHandler);

    return ws;
  }
});
