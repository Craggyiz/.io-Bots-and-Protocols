function func212(var0, var1) {
  // Compiled by MageM for WASM
  // Beta-Build: 1.3.6
  // Successfully compiled: WASM (WAT) to JS.
  // Hash: 9ek13ckeuv72
  let var2 = 0;
  let var3 = 0;
  let var4;
  while (true) {
    if (var1 === var2) {
      while (true) {
        if (var3 === 64) {
          break;
        }
        var0 = (var3 + 8032);
        var4 = var0;
        var4 = (var4.load8_u() * -17) & 255;
        var4 = func165(var4);
        var4.store8();
        var3 += 1;
      }
    } else {
      var4 = (var0 + var2);
      var4 = var4.load8_u() ^ (var2 & 63) + 8032).load8_u();
      var4 = func165(var4);
      var4.store8();
      var2 += 1;
    }
  }
}

function func165(var0) {
  // Compiled by MageM for WASM
  // Beta-Build: 1.3.6
  // Successfully compiled: WASM (WAT) to JS.
  // Hash: 9ek13ckeuv72
  return ((var0 << 4) | (var0 >> 4)) & 255;
}

var RCrypt = {
  declarations: {
    encryption_keys: [],
    HEAPU8subarray: []
  },

  set_keys: function (packet = []) {
    this.declarations.encryption_keys = packet;
  },

  encrypt: function (packet) {
    // From f212 ^ Above or $func212 in the WASM Module:
    // The + 8032 is not needed because it's a offset for memory addressing in wasm. Not needed in JS as it's not low-level.

    // Iterate and Encrypt:
    for (var i = 0; i < packet.length; i++) {
      this.declarations.HEAPU8subarray[i] = func165(packet[i] ^ this.declarations.encryption_keys[(i & 63)]);
    }

    // Then rotate:
    for (var i = 0; i < 64; i++) {
      this.declarations.encryption_keys[i] = func165((this.declarations.encryption_keys[i] * -17) & 255);
    }

    return new Uint8Array(this.declarations.HEAPU8subarray) instanceof Uint8Array ? this.declarations.HEAPU8subarray : new Uint8Array(this.declarations.HEAPU8subarray);
  }
}
