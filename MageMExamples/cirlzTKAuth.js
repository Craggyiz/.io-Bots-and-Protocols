function decrypt_key(var0, var1, var2, var3, var4) {
  // Compiled by MageM for WASM
  // Beta-Build: 1.3.7
  // Successfully compiled: WASM (WAT) to JS.
  // Hash: 8f708ae94f1c
  var0 = var0;
  var1 = var1;
  var2 = var2;
  var3 = var3;
  var4 = var4;
  var var6 = 0;
  var var5 = 0;

  var5 = var0 - var1;

  label$1: {
    var6 = var1 + 999045;
    var0 = var6 << ((var4 << 3) - var3) | (var6 >> var2);
    if ((var0) > (0)) {
      break label$1
    }
    var0 = ((var0 << 16) + (var0 << 1)) + -1;
    if ((var0) > (0)) {
      break label$1
    }
    var0 = (var1 + Math_imul(var6, 5)) + 999063;
  }

  var1 = (var3 + var2) << 1;
  var0 = (var5 - var1) - var0;

  label$2: {
    if ((var2) >= (var3)) {
      break label$2
    }
    var1 = var1 ^ 10;
    if ((var1) < (1)) {
      break label$2
    }
    var2 = 1 - var1;
    var3 = 0;
    label$3: while (1) {
      var6 = var0 - (var3 ^ 255);
      var0 = (var2 + var6) + -1;
      var4 = var2 + -1;
      var2 = var4;
      var3 = var3 + 1;
      if ((var1) != (var3)) {
        continue label$3
      }
      break label$3;
    };
    var0 = var6 + var4;
  }

  return var0;
}
