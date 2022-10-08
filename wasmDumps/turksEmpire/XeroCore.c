#include <math.h>
#include <string.h>

#include "XeroCore.h"
#define UNLIKELY(x) __builtin_expect(!!(x), 0)
#define LIKELY(x) __builtin_expect(!!(x), 1)

#define TRAP(x) (wasm_rt_trap(WASM_RT_TRAP_##x), 0)

#define FUNC_PROLOGUE                                            \
  if (++wasm_rt_call_stack_depth > WASM_RT_MAX_CALL_STACK_DEPTH) \
    TRAP(EXHAUSTION)

#define FUNC_EPILOGUE --wasm_rt_call_stack_depth

#define UNREACHABLE TRAP(UNREACHABLE)

#define CALL_INDIRECT(table, t, ft, x, ...)          \
  (LIKELY((x) < table.size && table.data[x].func &&  \
          table.data[x].func_type == func_types[ft]) \
       ? ((t)table.data[x].func)(__VA_ARGS__)        \
       : TRAP(CALL_INDIRECT))

#define MEMCHECK(mem, a, t)  \
  if (UNLIKELY((a) + sizeof(t) > mem->size)) TRAP(OOB)

#define DEFINE_LOAD(name, t1, t2, t3)              \
  static inline t3 name(wasm_rt_memory_t* mem, u64 addr) {   \
    MEMCHECK(mem, addr, t1);                       \
    t1 result;                                     \
    memcpy(&result, &mem->data[addr], sizeof(t1)); \
    return (t3)(t2)result;                         \
  }

#define DEFINE_STORE(name, t1, t2)                           \
  static inline void name(wasm_rt_memory_t* mem, u64 addr, t2 value) { \
    MEMCHECK(mem, addr, t1);                                 \
    t1 wrapped = (t1)value;                                  \
    memcpy(&mem->data[addr], &wrapped, sizeof(t1));          \
  }

DEFINE_LOAD(i32_load, u32, u32, u32);
DEFINE_LOAD(i64_load, u64, u64, u64);
DEFINE_LOAD(f32_load, f32, f32, f32);
DEFINE_LOAD(f64_load, f64, f64, f64);
DEFINE_LOAD(i32_load8_s, s8, s32, u32);
DEFINE_LOAD(i64_load8_s, s8, s64, u64);
DEFINE_LOAD(i32_load8_u, u8, u32, u32);
DEFINE_LOAD(i64_load8_u, u8, u64, u64);
DEFINE_LOAD(i32_load16_s, s16, s32, u32);
DEFINE_LOAD(i64_load16_s, s16, s64, u64);
DEFINE_LOAD(i32_load16_u, u16, u32, u32);
DEFINE_LOAD(i64_load16_u, u16, u64, u64);
DEFINE_LOAD(i64_load32_s, s32, s64, u64);
DEFINE_LOAD(i64_load32_u, u32, u64, u64);
DEFINE_STORE(i32_store, u32, u32);
DEFINE_STORE(i64_store, u64, u64);
DEFINE_STORE(f32_store, f32, f32);
DEFINE_STORE(f64_store, f64, f64);
DEFINE_STORE(i32_store8, u8, u32);
DEFINE_STORE(i32_store16, u16, u32);
DEFINE_STORE(i64_store8, u8, u64);
DEFINE_STORE(i64_store16, u16, u64);
DEFINE_STORE(i64_store32, u32, u64);

#define I32_CLZ(x) ((x) ? __builtin_clz(x) : 32)
#define I64_CLZ(x) ((x) ? __builtin_clzll(x) : 64)
#define I32_CTZ(x) ((x) ? __builtin_ctz(x) : 32)
#define I64_CTZ(x) ((x) ? __builtin_ctzll(x) : 64)
#define I32_POPCNT(x) (__builtin_popcount(x))
#define I64_POPCNT(x) (__builtin_popcountll(x))

#define DIV_S(ut, min, x, y)                                 \
   ((UNLIKELY((y) == 0)) ?                TRAP(DIV_BY_ZERO)  \
  : (UNLIKELY((x) == min && (y) == -1)) ? TRAP(INT_OVERFLOW) \
  : (ut)((x) / (y)))

#define REM_S(ut, min, x, y)                                \
   ((UNLIKELY((y) == 0)) ?                TRAP(DIV_BY_ZERO) \
  : (UNLIKELY((x) == min && (y) == -1)) ? 0                 \
  : (ut)((x) % (y)))

#define I32_DIV_S(x, y) DIV_S(u32, INT32_MIN, (s32)x, (s32)y)
#define I64_DIV_S(x, y) DIV_S(u64, INT64_MIN, (s64)x, (s64)y)
#define I32_REM_S(x, y) REM_S(u32, INT32_MIN, (s32)x, (s32)y)
#define I64_REM_S(x, y) REM_S(u64, INT64_MIN, (s64)x, (s64)y)

#define DIVREM_U(op, x, y) \
  ((UNLIKELY((y) == 0)) ? TRAP(DIV_BY_ZERO) : ((x) op (y)))

#define DIV_U(x, y) DIVREM_U(/, x, y)
#define REM_U(x, y) DIVREM_U(%, x, y)

#define ROTL(x, y, mask) \
  (((x) << ((y) & (mask))) | ((x) >> (((mask) - (y) + 1) & (mask))))
#define ROTR(x, y, mask) \
  (((x) >> ((y) & (mask))) | ((x) << (((mask) - (y) + 1) & (mask))))

#define I32_ROTL(x, y) ROTL(x, y, 31)
#define I64_ROTL(x, y) ROTL(x, y, 63)
#define I32_ROTR(x, y) ROTR(x, y, 31)
#define I64_ROTR(x, y) ROTR(x, y, 63)

#define FMIN(x, y)                                          \
   ((UNLIKELY((x) != (x))) ? NAN                            \
  : (UNLIKELY((y) != (y))) ? NAN                            \
  : (UNLIKELY((x) == 0 && (y) == 0)) ? (signbit(x) ? x : y) \
  : (x < y) ? x : y)

#define FMAX(x, y)                                          \
   ((UNLIKELY((x) != (x))) ? NAN                            \
  : (UNLIKELY((y) != (y))) ? NAN                            \
  : (UNLIKELY((x) == 0 && (y) == 0)) ? (signbit(x) ? y : x) \
  : (x > y) ? x : y)

#define TRUNC_S(ut, st, ft, min, max, maxop, x)                             \
   ((UNLIKELY((x) != (x))) ? TRAP(INVALID_CONVERSION)                       \
  : (UNLIKELY((x) < (ft)(min) || (x) maxop (ft)(max))) ? TRAP(INT_OVERFLOW) \
  : (ut)(st)(x))

#define I32_TRUNC_S_F32(x) TRUNC_S(u32, s32, f32, INT32_MIN, INT32_MAX, >=, x)
#define I64_TRUNC_S_F32(x) TRUNC_S(u64, s64, f32, INT64_MIN, INT64_MAX, >=, x)
#define I32_TRUNC_S_F64(x) TRUNC_S(u32, s32, f64, INT32_MIN, INT32_MAX, >,  x)
#define I64_TRUNC_S_F64(x) TRUNC_S(u64, s64, f64, INT64_MIN, INT64_MAX, >=, x)

#define TRUNC_U(ut, ft, max, maxop, x)                                    \
   ((UNLIKELY((x) != (x))) ? TRAP(INVALID_CONVERSION)                     \
  : (UNLIKELY((x) <= (ft)-1 || (x) maxop (ft)(max))) ? TRAP(INT_OVERFLOW) \
  : (ut)(x))

#define I32_TRUNC_U_F32(x) TRUNC_U(u32, f32, UINT32_MAX, >=, x)
#define I64_TRUNC_U_F32(x) TRUNC_U(u64, f32, UINT64_MAX, >=, x)
#define I32_TRUNC_U_F64(x) TRUNC_U(u32, f64, UINT32_MAX, >,  x)
#define I64_TRUNC_U_F64(x) TRUNC_U(u64, f64, UINT64_MAX, >=, x)

#define DEFINE_REINTERPRET(name, t1, t2)  \
  static inline t2 name(t1 x) {           \
    t2 result;                            \
    memcpy(&result, &x, sizeof(result));  \
    return result;                        \
  }

DEFINE_REINTERPRET(f32_reinterpret_i32, u32, f32)
DEFINE_REINTERPRET(i32_reinterpret_f32, f32, u32)
DEFINE_REINTERPRET(f64_reinterpret_i64, u64, f64)
DEFINE_REINTERPRET(i64_reinterpret_f64, f64, u64)


static u32 func_types[3];

static void init_func_types(void) {
  func_types[0] = wasm_rt_register_func_type(1, 1, WASM_RT_I32, WASM_RT_I32);
  func_types[1] = wasm_rt_register_func_type(4, 1, WASM_RT_I32, WASM_RT_I32, WASM_RT_I32, WASM_RT_I32, WASM_RT_I32);
  func_types[2] = wasm_rt_register_func_type(5, 1, WASM_RT_I32, WASM_RT_I32, WASM_RT_I32, WASM_RT_I32, WASM_RT_I32, WASM_RT_I32);
}

static u32 run_1(u32);
static u32 run_0(u32);
static u32 _rotr(u32, u32, u32, u32);
static u32 rotate(u32, u32, u32, u32);
static u32 decrypt_key(u32, u32, u32, u32, u32);

static void init_globals(void) {
}

static wasm_rt_memory_t memory;

static wasm_rt_table_t T0;

static u32 run_1(u32 p0) {
  FUNC_PROLOGUE;
  u32 i0, i1, i2;
  i0 = p0;
  i1 = p0;
  i2 = 5u;
  i1 *= i2;
  i0 += i1;
  i1 = 18u;
  i0 += i1;
  FUNC_EPILOGUE;
  return i0;
}

static u32 run_0(u32 p0) {
  FUNC_PROLOGUE;
  u32 i0, i1;
  i0 = p0;
  i1 = 65538u;
  i0 *= i1;
  i1 = 4294967295u;
  i0 += i1;
  FUNC_EPILOGUE;
  return i0;
}

static u32 _rotr(u32 p0, u32 p1, u32 p2, u32 p3) {
  FUNC_PROLOGUE;
  u32 i0, i1, i2;
  i0 = p0;
  i1 = p3;
  i2 = 3u;
  i1 <<= (i2 & 31);
  i2 = p2;
  i1 -= i2;
  i0 <<= (i1 & 31);
  i1 = p0;
  i2 = p1;
  i1 = (u32)((s32)i1 >> (i2 & 31));
  i0 |= i1;
  FUNC_EPILOGUE;
  return i0;
}

static u32 rotate(u32 p0, u32 p1, u32 p2, u32 p3) {
  FUNC_PROLOGUE;
  u32 i0, i1, i2;
  i0 = p0;
  i1 = p3;
  i2 = 3u;
  i1 <<= (i2 & 31);
  i2 = p2;
  i1 -= i2;
  i0 <<= (i1 & 31);
  i1 = p0;
  i2 = p1;
  i1 = (u32)((s32)i1 >> (i2 & 31));
  i0 |= i1;
  p2 = i0;
  i1 = 0u;
  i0 = (u32)((s32)i0 > (s32)i1);
  if (i0) {goto B1;}
  i0 = p2;
  i1 = 65538u;
  i0 *= i1;
  i1 = 4294967295u;
  i0 += i1;
  p2 = i0;
  i1 = 0u;
  i0 = (u32)((s32)i0 <= (s32)i1);
  if (i0) {goto B0;}
  B1:;
  i0 = p2;
  goto Bfunc;
  B0:;
  i0 = p0;
  i1 = p0;
  i2 = 5u;
  i1 *= i2;
  i0 += i1;
  i1 = 18u;
  i0 += i1;
  Bfunc:;
  FUNC_EPILOGUE;
  return i0;
}

static u32 decrypt_key(u32 p0, u32 p1, u32 p2, u32 p3, u32 p4) {
  u32 l5 = 0, l6 = 0;
  FUNC_PROLOGUE;
  u32 i0, i1, i2, i3;
  i0 = p0;
  i1 = p1;
  i0 -= i1;
  l5 = i0;
  i0 = p1;
  i1 = 999045u;
  i0 += i1;
  l6 = i0;
  i1 = p4;
  i2 = 3u;
  i1 <<= (i2 & 31);
  i2 = p3;
  i1 -= i2;
  i0 <<= (i1 & 31);
  i1 = l6;
  i2 = p2;
  i1 = (u32)((s32)i1 >> (i2 & 31));
  i0 |= i1;
  p0 = i0;
  i1 = 0u;
  i0 = (u32)((s32)i0 > (s32)i1);
  if (i0) {goto B0;}
  i0 = p0;
  i1 = 16u;
  i0 <<= (i1 & 31);
  i1 = p0;
  i2 = 1u;
  i1 <<= (i2 & 31);
  i0 += i1;
  i1 = 4294967295u;
  i0 += i1;
  p0 = i0;
  i1 = 0u;
  i0 = (u32)((s32)i0 > (s32)i1);
  if (i0) {goto B0;}
  i0 = p1;
  i1 = l6;
  i2 = 5u;
  i1 *= i2;
  i0 += i1;
  i1 = 999063u;
  i0 += i1;
  p0 = i0;
  B0:;
  i0 = l5;
  i1 = p3;
  i2 = p2;
  i1 += i2;
  i2 = 1u;
  i1 <<= (i2 & 31);
  p1 = i1;
  i0 -= i1;
  i1 = p0;
  i0 -= i1;
  p0 = i0;
  i0 = p2;
  i1 = p3;
  i0 = (u32)((s32)i0 >= (s32)i1);
  if (i0) {goto B1;}
  i0 = p1;
  i1 = 10u;
  i0 ^= i1;
  p1 = i0;
  i1 = 1u;
  i0 = (u32)((s32)i0 < (s32)i1);
  if (i0) {goto B1;}
  i0 = 1u;
  i1 = p1;
  i0 -= i1;
  p2 = i0;
  i0 = 0u;
  p3 = i0;
  L2: 
    i0 = p2;
    i1 = p0;
    i2 = p3;
    i3 = 255u;
    i2 ^= i3;
    i1 -= i2;
    l6 = i1;
    i0 += i1;
    i1 = 4294967295u;
    i0 += i1;
    p0 = i0;
    i0 = p2;
    i1 = 4294967295u;
    i0 += i1;
    p4 = i0;
    p2 = i0;
    i0 = p1;
    i1 = p3;
    i2 = 1u;
    i1 += i2;
    p3 = i1;
    i0 = i0 != i1;
    if (i0) {goto L2;}
  i0 = l6;
  i1 = p4;
  i0 += i1;
  p0 = i0;
  B1:;
  i0 = p0;
  FUNC_EPILOGUE;
  return i0;
}


static void init_memory(void) {
  wasm_rt_allocate_memory((&memory), 1, 65536);
}

static void init_table(void) {
  uint32_t offset;
  wasm_rt_allocate_table((&T0), 0, 4294967295);
}

/* export: 'memory' */
wasm_rt_memory_t (*WASM_RT_ADD_PREFIX(Z_memory));
/* export: 'run_1' */
u32 (*WASM_RT_ADD_PREFIX(Z_run_1Z_ii))(u32);
/* export: 'run_0' */
u32 (*WASM_RT_ADD_PREFIX(Z_run_0Z_ii))(u32);
/* export: '_rotr' */
u32 (*WASM_RT_ADD_PREFIX(Z__rotrZ_iiiii))(u32, u32, u32, u32);
/* export: 'rotate' */
u32 (*WASM_RT_ADD_PREFIX(Z_rotateZ_iiiii))(u32, u32, u32, u32);
/* export: 'decrypt_key' */
u32 (*WASM_RT_ADD_PREFIX(Z_decrypt_keyZ_iiiiii))(u32, u32, u32, u32, u32);

static void init_exports(void) {
  /* export: 'memory' */
  WASM_RT_ADD_PREFIX(Z_memory) = (&memory);
  /* export: 'run_1' */
  WASM_RT_ADD_PREFIX(Z_run_1Z_ii) = (&run_1);
  /* export: 'run_0' */
  WASM_RT_ADD_PREFIX(Z_run_0Z_ii) = (&run_0);
  /* export: '_rotr' */
  WASM_RT_ADD_PREFIX(Z__rotrZ_iiiii) = (&_rotr);
  /* export: 'rotate' */
  WASM_RT_ADD_PREFIX(Z_rotateZ_iiiii) = (&rotate);
  /* export: 'decrypt_key' */
  WASM_RT_ADD_PREFIX(Z_decrypt_keyZ_iiiiii) = (&decrypt_key);
}

void WASM_RT_ADD_PREFIX(init)(void) {
  init_func_types();
  init_globals();
  init_memory();
  init_table();
  init_exports();
}
