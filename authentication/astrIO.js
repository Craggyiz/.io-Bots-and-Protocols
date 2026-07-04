class Codec {
  constructor() {
    this.ready = true;
    this._seeded = false;

    this.s0 = new Uint32Array(4);
    this.s1 = new Uint32Array(4);
    this.k = new Uint32Array(8);

    this.dataOffset = 256;
    this.version = 3;
  }

  load() {
    if (!this._readyPromise) {
      this._readyPromise = Promise.resolve();
      this.ready = true;
    }
    return this._readyPromise;
  }

  _u32(x) {
    return x >>> 0;
  }

  _mul(a, b) {
    return Math.imul(a, b) >>> 0;
  }

  _rotl(x, r) {
    r &= 31;
    if (r === 0) return x >>> 0;
    return (((x << r) | (x >>> (32 - r))) >>> 0);
  }

  _xorshr(x, n) {
    return ((x ^ (x >>> n)) >>> 0);
  }

  _xorshift128(state) {
    let t = (state[3] << 11) ^ state[3];
    t = (t ^ (t >>> 8)) >>> 0;
    const s0 = state[0];
    state[3] = state[2];
    state[2] = state[1];
    state[1] = s0;
    const newS0 = (s0 ^ (s0 >>> 19) ^ t) >>> 0;
    state[0] = newS0;
    return newS0;
  }

  k7(p0, p1, p2, p3, p4, p5, p6, p7) {
    this.k[0] = p0 >>> 0;
    this.k[1] = p1 >>> 0;
    this.k[2] = p2 >>> 0;
    this.k[3] = p3 >>> 0;
    this.k[4] = p4 >>> 0;
    this.k[5] = p5 >>> 0;
    this.k[6] = p6 >>> 0;
    this.k[7] = p7 >>> 0;
  }

  q1(p0, p1, p2, p3) {
    this.s0[0] = (p0 ^ 2779096485) >>> 0;
    this.s0[1] = (p1 ^ 1515870810) >>> 0;
    this.s0[2] = (p2 ^ 4042322160) >>> 0;
    this.s0[3] = (p3 ^ 252645135) >>> 0;
    for (let i = 0; i < 16; i++) this._xorshift128(this.s0);
  }

  q2(p0, p1, p2, p3) {
    this.s1[0] = (p0 ^ 305419896) >>> 0;
    this.s1[1] = (p1 ^ 2596069104) >>> 0;
    this.s1[2] = (p2 ^ 3735928559) >>> 0;
    this.s1[3] = (p3 ^ 3405691582) >>> 0;
    for (let i = 0; i < 16; i++) this._xorshift128(this.s1);
  }

  initFromSeed(view) {
    const f = view.getUint32(0, true);
    const g = view.getUint32(4, true);
    const h = view.getUint32(8, true);
    const i = view.getUint32(12, true);
    const j = view.getUint32(16, true);
    const k = view.getUint32(20, true);
    const l = view.getUint32(24, true);
    const m = view.getUint32(28, true);
    this.k7(f, g, h, i, j, k, l, m);
    this.q1(f, g, h, i);
    this.q2(j, k, l, m);
    this._seeded = true;
  }

  encode(bufOrArrayBuffer) {
    const bytes = bufOrArrayBuffer instanceof Uint8Array
      ? bufOrArrayBuffer
      : new Uint8Array(bufOrArrayBuffer);
    const out = new Uint8Array(bytes);
    const len = out.length;
    let i = 0;
    for (; i + 3 < len; i += 4) {
      const word = this._xorshift128(this.s0);
      const l3 = this._mul(word, 1540483477);
      out[i] ^= l3 & 0xff;
      out[i + 1] ^= (l3 >>> 8) & 0xff;
      out[i + 2] ^= (l3 >>> 16) & 0xff;
      out[i + 3] ^= (l3 >>> 24) & 0xff;
    }
    if (len > i) {
      const word = this._xorshift128(this.s0);
      const l3 = this._mul(word, 1540483477);
      let shift = 0;
      for (; i < len; i++) {
        out[i] ^= (l3 >>> shift) & 0xff;
        shift += 8;
      }
    }
    return out.buffer;
  }

  decode(bufOrArrayBuffer) {
    const bytes = bufOrArrayBuffer instanceof Uint8Array
      ? bufOrArrayBuffer
      : new Uint8Array(bufOrArrayBuffer);
    const len = bytes.length;
    let i = 0;
    for (; i + 3 < len; i += 4) {
      const word = this._xorshift128(this.s1);
      const l3 = this._mul(word, 1540483477);
      bytes[i] ^= l3 & 0xff;
      bytes[i + 1] ^= (l3 >>> 8) & 0xff;
      bytes[i + 2] ^= (l3 >>> 16) & 0xff;
      bytes[i + 3] ^= (l3 >>> 24) & 0xff;
    }
    if (len > i) {
      const word = this._xorshift128(this.s1);
      const l3 = this._mul(word, 1540483477);
      let shift = 0;
      for (; i < len; i++) {
        bytes[i] ^= (l3 >>> shift) & 0xff;
        shift += 8;
      }
    }
    return bytes.buffer;
  }

  reset() {
    this._seeded = false;
  }

  _sel(idx) {
    return this.k[idx & 7];
  }

  challenge(a, b) {
    a = a >>> 0;
    b = b >>> 0;
    const sel = (idx) => this._sel(idx);
    const rotl = this._rotl;
    const xorshr = this._xorshr;
    const mul = this._mul;

    const l4 = (a + 3) & 7;
    const l5 = (a + 5) & 7;

    let h = (b ^ rotl(sel(a & 7), a & 15)) >>> 0;
    h = (sel(l4) ^ h) >>> 0;
    h = (h + (sel(l5) ^ (h >>> 11))) >>> 0;
    h = xorshr(h, 16);
    h = mul(h, 73244475);
    h = xorshr(h, 13);

    switch (a) {
      case 0: {
        let m = mul(h ^ 1597463007, 2246822507);
        m = xorshr(m, 13);
        const g = sel((a ^ 2) & 7);
        const r = mul((g + m) >>> 0, 3266489909);
        return xorshr(r, 16);
      }
      case 1: {
        let x = xorshr(h, 16);
        x = mul(x, 73244475);
        x = xorshr(x, 16);
        x = mul(x, 73244475);
        const g = sel((a ^ 5) & 7);
        const f = (g ^ x) >>> 0;
        return xorshr(f, 16);
      }
      case 2: {
        const g = sel((a ^ 1) & 7);
        const val = (g ^ h) >>> 0;
        const r0 = rotl(val, 7);
        const s = mul(r0 ^ 0xdeadbeef, 1540483477);
        const t = xorshr(s, 15);
        return (t + (h >>> 3)) >>> 0;
      }
      case 3: {
        const hi = h >>> 16;
        const lo = h & 0xffff;
        const x = ((hi * 40503 + lo) >>> 0) & 0xffff;
        const y = (((x * 24375) ^ hi) >>> 0) & 0xffff;
        const z = ((y * 45742 + x) >>> 0) & 0xffff;
        const result = (z | (y << 16)) >>> 0;
        const g = sel((a ^ 3) & 7);
        return (g ^ result) >>> 0;
      }
      case 4: {
        let hh = h;
        for (let l3 = 0; l3 < 3; l3++) {
          const g = sel((a + l3) & 7);
          let t = mul(g ^ hh, 461845907);
          t = rotl(t, 13);
          t = mul(t, 5);
          hh = (t - 430675100) >>> 0;
        }
        return hh;
      }
      case 5: {
        const A = (h ^ 0xcafebabe) >>> 0;
        const B = ((A << 13) ^ A) >>> 0;
        const C = ((B >>> 17) ^ B) >>> 0;
        const D = ((C << 5) ^ C) >>> 0;
        const g = sel((a ^ 6) & 7);
        return (g + D) >>> 0;
      }
      case 6: {
        let f = (h & 0xff) ^ 2166136261;
        f = mul(f, 16777619);
        f = (f ^ ((h >>> 8) & 0xff)) >>> 0;
        f = mul(f, 16777619);
        f = (f ^ ((h >>> 16) & 0xff)) >>> 0;
        f = mul(f, 16777619);
        f = (f ^ (h >>> 24)) >>> 0;
        f = mul(f, 16777619);
        const g = sel((a ^ 4) & 7);
        return (g ^ f) >>> 0;
      }
      case 7: {
        const A = (h >>> 1) & 0x55555555;
        const B = (h & 0x55555555) << 1;
        const C = (A | B) >>> 0;
        const D = (C >>> 2) & 0x33333333;
        const E = (C & 0x33333333) << 2;
        const F = (D | E) >>> 0;
        const g = sel((a ^ 7) & 7);
        const r = mul(g ^ F, 73244475);
        return xorshr(r, 16);
      }
      case 8: {
        const A = (h - 1515870811) >>> 0;
        const B = rotl(A, 11);
        const g = sel((a ^ 2) & 7);
        const C = (g + B) >>> 0;
        const D = xorshr(C, 8);
        const E = mul(D, 1812433253);
        const F = ((E << 3) ^ (E >>> 15)) >>> 0;
        return (F ^ E) >>> 0;
      }
      case 9: {
        let hh = (h ^ 0x12345678) >>> 0;
        for (let l3 = 0; l3 < 4; l3++) {
          const g = sel(l3 & 7);
          const t = (g + hh) >>> 0;
          const shiftAmt = (l3 + 7) & 31;
          const u = ((t << shiftAmt) ^ t) >>> 0;
          const v = mul(u, 2654435769);
          hh = xorshr(v, 11);
        }
        return hh;
      }
      case 10: {
        const A = (h - 1640531527) >>> 0;
        const B = xorshr(A, 15);
        const C = mul(B, 3210233709);
        const D = xorshr(C, 13);
        const E = mul(D, 2496678331);
        const F = xorshr(E, 16);
        const g = sel((a ^ 1) & 7);
        return (g + F) >>> 0;
      }
      case 11: {
        const g = sel((a ^ 3) & 7);
        const g2 = (g - 17958194) >>> 0;
        const A = (h ^ g2) >>> 0;
        const B = mul(A, 2246822507);
        const C = xorshr(B, 13);
        const D = mul(C, 3266489909);
        return xorshr(D, 16);
      }
      case 12: {
        const A = rotl(h, 9);
        const g = sel((a ^ 5) & 7);
        const B = (g ^ A) >>> 0;
        const C = (B + 2127912214) >>> 0;
        const D = mul(C, 461845907);
        const E = xorshr(D, 12);
        return mul(E, 3266489909);
      }
      case 13: {
        let p1 = (~h) >>> 0;
        const g = sel((a ^ 6) & 7);
        for (let l3 = 0; l3 < 3; l3++) {
          const byte = (g >>> ((l3 * 8) & 31)) & 0xff;
          let t = (p1 ^ byte) >>> 0;
          t = mul(t, 517762881);
          p1 = xorshr(t, 7);
        }
        return (~p1) >>> 0;
      }
      case 14: {
        const g = sel(a & 7);
        const A = mul((g + h) >>> 0, 73244475);
        const g2 = sel((a + 4) & 7);
        const B = (g2 ^ A) >>> 0;
        const C = rotl(B, 17);
        const D = mul(C, 461845907);
        return xorshr(D, 13);
      }
      case 15: {
        const step = (hash) => {
          hash = (hash + (hash << 10)) >>> 0;
          hash = (hash ^ (hash >>> 6)) >>> 0;
          return hash;
        };
        const bB = (h >>> 16) & 0xff;
        const bC = (h >>> 8) & 0xff;
        const bD = h & 0xff;
        const g = sel((a ^ 2) & 7);
        let hash = (g + bD) >>> 0;
        hash = step(hash);
        hash = (bC + hash) >>> 0;
        hash = step(hash);
        hash = (bB + hash) >>> 0;
        hash = step(hash);
        const byte3 = h >>> 24;
        hash = (byte3 + hash) >>> 0;
        hash = step(hash);
        hash = (hash + (hash << 3)) >>> 0;
        hash = (hash ^ (hash >>> 11)) >>> 0;
        hash = (hash + (hash << 15)) >>> 0;
        return hash >>> 0;
      }
      case 16: {
        const g = sel((a ^ 7) & 7);
        const A = mul((g ^ h) >>> 0, 3432918353);
        const B = rotl(A, 15);
        const C = mul(B, 461845907);
        const D = (C ^ h) >>> 0;
        const E = rotl(D, 13);
        return (mul(E, 5) - 430675100) >>> 0;
      }
      case 17: {
        const g = sel((a ^ 3) & 7);
        let p0_ = h, p1_ = g;
        for (let l3 = 0; l3 < 3; l3++) {
          const A = (p0_ + p1_) >>> 0;
          const B = mul(A, 2654435769);
          p0_ = p1_;
          p1_ = (B ^ (B >>> 11)) >>> 0;
        }
        return p1_;
      }
      case 18: {
        const A = rotl(h, 16);
        const B = mul(A, 73244475);
        const g = sel((a ^ 4) & 7);
        const C = (g ^ B) >>> 0;
        const D = xorshr(C, 13);
        const E = mul(D, 2246822507);
        return xorshr(E, 16);
      }
      case 19: {
        const A = (h ^ (this.k[0] ^ 3131961357)) >>> 0;
        const B = mul(A, 1540483477);
        const C = (this.k[3] ^ B) >>> 0;
        const D = xorshr(C, 15);
        const E = (this.k[6] + D) >>> 0;
        const F = mul(E, 3266489909);
        return xorshr(F, 13);
      }
      case 20: {
        const A = (h ^ 322420958) >>> 0;
        const B = rotl(A, 5);
        const g = sel((a ^ 1) & 7);
        const X = (g + B) >>> 0;
        const Y = mul(X, 668265263);
        const Z = rotl(Y, 11);
        const W = (Z ^ (h >>> 7)) >>> 0;
        return mul(W, 1540483477);
      }
      case 21: {
        let p1 = h;
        for (let l3 = 0; l3 < 2; l3++) {
          const idx = (a + l3 * 3) & 7;
          const g = sel(idx);
          const shiftAmt = (g & 15) + 1;
          const X = (g ^ p1) >>> 0;
          const Y = rotl(X, shiftAmt);
          p1 = mul(Y, 2246822507);
        }
        return xorshr(p1, 16);
      }
      case 22: {
        const g = sel((a ^ 2) & 7);
        const A = (h - g) >>> 0;
        const B = mul(A, 3432918353);
        const C = xorshr(B, 15);
        const D = (C + 559038737) >>> 0;
        const E = mul(D, 461845907);
        return xorshr(E, 13);
      }
      case 23: {
        const A = mul(h, 73244475);
        const g = sel((a ^ 5) & 7);
        const B = (g ^ A) >>> 0;
        const C = mul(B, 2246822507);
        const g2 = sel((a ^ 2) & 7);
        const D = (g2 ^ C) >>> 0;
        const E = mul(D, 3266489909);
        return xorshr(E, 16);
      }
      case 24: {
        const g = sel((a ^ 6) & 7);
        let A = (g + h) >>> 0;
        for (let l3 = 0; l3 < 3; l3++) {
          const X = (A ^ (A << 7)) >>> 0;
          const Y = mul(X, 556226971);
          A = xorshr(Y, 9);
        }
        const g2 = sel((a ^ 1) & 7);
        return (g2 ^ A) >>> 0;
      }
      case 25: {
        const A = (this.k[2] + this.k[3]) >>> 0;
        const B = (h ^ ((this.k[0] + this.k[1]) >>> 0)) >>> 0;
        const C = mul(B, 2654435769);
        const D = (A ^ C) >>> 0;
        const E = xorshr(D, 11);
        const F = mul(E, 73244475);
        return xorshr(F, 16);
      }
      case 26: {
        const A = (((h >>> 4) & 0x0f0f0f0f) | ((h & 0x0f0f0f0f) << 4)) >>> 0;
        const g = sel((a ^ 3) & 7);
        const B = (g ^ A) >>> 0;
        const C = mul(B, 3210233709);
        const D = xorshr(C, 13);
        return mul(D, 2496678331);
      }
      case 27: {
        const g = sel((a ^ 4) & 7);
        const A = (g ^ h) >>> 0;
        const B = mul(A, 2246822507);
        const C = mul(h, 73244475);
        const g2 = sel((a ^ 1) & 7);
        const D = mul(g2, 461845907);
        const E = (C + D) >>> 0;
        const F = xorshr(E, 16);
        const G = (B + F) >>> 0;
        return xorshr(G, 13);
      }
      case 28: {
        const g = sel((a ^ 7) & 7);
        let A = (g ^ h) >>> 0;
        for (let l3 = 0; l3 < 2; l3++) {
          const X = mul(A ^ 1597463007, 3432918353);
          const Y = rotl(X, 15);
          const g2 = sel((a + l3 + 1) & 7);
          A = (g2 ^ Y) >>> 0;
        }
        return xorshr(mul(A, 461845907), 16);
      }
      case 29: {
        const g = sel((a ^ 3) & 7);
        const A = (g + h) >>> 0;
        const B = xorshr(A, 12);
        const C = mul(B, 1812433253);
        const D = xorshr(C, 14);
        const E = mul(D, 1540483477);
        const g2 = sel((a ^ 6) & 7);
        const F = (g2 ^ E) >>> 0;
        return xorshr(F, 16);
      }
      default:
        return 0;
    }
  }
}
