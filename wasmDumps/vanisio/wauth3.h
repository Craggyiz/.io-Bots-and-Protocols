#ifndef WAUTH3_H_GENERATED_
#define WAUTH3_H_GENERATED_
#ifdef __cplusplus
extern "C" {
#endif

#include <stdint.h>

#include "wasm-rt.h"

#ifndef WASM_RT_MODULE_PREFIX
#define WASM_RT_MODULE_PREFIX
#endif

#define WASM_RT_PASTE_(x, y) x ## y
#define WASM_RT_PASTE(x, y) WASM_RT_PASTE_(x, y)
#define WASM_RT_ADD_PREFIX(x) WASM_RT_PASTE(WASM_RT_MODULE_PREFIX, x)

/* TODO(binji): only use stdint.h types in header */
typedef uint8_t u8;
typedef int8_t s8;
typedef uint16_t u16;
typedef int16_t s16;
typedef uint32_t u32;
typedef int32_t s32;
typedef uint64_t u64;
typedef int64_t s64;
typedef float f32;
typedef double f64;

extern void WASM_RT_ADD_PREFIX(init)(void);

/* import: 'a' 'a' */
extern void (*Z_aZ_aZ_vi)(u32);
/* import: 'a' 'b' */
extern void (*Z_aZ_bZ_viii)(u32, u32, u32);
/* import: 'a' 'c' */
extern u32 (*Z_aZ_cZ_ii)(u32);
/* import: 'a' 'd' */
extern void (*Z_aZ_dZ_vi)(u32);
/* import: 'a' 'e' */
extern f64 (*Z_aZ_eZ_diii)(u32, u32, u32);
/* import: 'a' 'f' */
extern void (*Z_aZ_fZ_viiiii)(u32, u32, u32, u32, u32);
/* import: 'a' 'g' */
extern void (*Z_aZ_gZ_viii)(u32, u32, u32);
/* import: 'a' 'h' */
extern void (*Z_aZ_hZ_viii)(u32, u32, u32);
/* import: 'a' 'i' */
extern u32 (*Z_aZ_iZ_iii)(u32, u32);
/* import: 'a' 'j' */
extern u32 (*Z_aZ_jZ_ii)(u32);
/* import: 'a' 'k' */
extern void (*Z_aZ_kZ_vv)(void);
/* import: 'a' 'l' */
extern void (*Z_aZ_lZ_viii)(u32, u32, u32);
/* import: 'a' 'm' */
extern void (*Z_aZ_mZ_vii)(u32, u32);
/* import: 'a' 'n' */
extern void (*Z_aZ_nZ_viiiiiiii)(u32, u32, u32, u32, u32, u32, u32, u32);
/* import: 'a' 'o' */
extern u32 (*Z_aZ_oZ_ii)(u32);
/* import: 'a' 'p' */
extern u32 (*Z_aZ_pZ_iiii)(u32, u32, u32);
/* import: 'a' 'q' */
extern u32 (*Z_aZ_qZ_ii)(u32);
/* import: 'a' 'r' */
extern void (*Z_aZ_rZ_viiiiiii)(u32, u32, u32, u32, u32, u32, u32);
/* import: 'a' 's' */
extern u32 (*Z_aZ_sZ_iiii)(u32, u32, u32);
/* import: 'a' 't' */
extern u32 (*Z_aZ_tZ_ii)(u32);
/* import: 'a' 'u' */
extern u32 (*Z_aZ_uZ_iv)(void);
/* import: 'a' 'v' */
extern void (*Z_aZ_vZ_vii)(u32, u32);
/* import: 'a' 'w' */
extern void (*Z_aZ_wZ_viiiii)(u32, u32, u32, u32, u32);
/* import: 'a' 'x' */
extern void (*Z_aZ_xZ_vii)(u32, u32);

/* export: 'y' */
extern wasm_rt_memory_t (*WASM_RT_ADD_PREFIX(Z_y));
/* export: 'z' */
extern void (*WASM_RT_ADD_PREFIX(Z_zZ_vv))(void);
/* export: 'A' */
extern void (*WASM_RT_ADD_PREFIX(Z_AZ_vi))(u32);
/* export: 'B' */
extern void (*WASM_RT_ADD_PREFIX(Z_BZ_vi))(u32);
/* export: 'C' */
extern u32 (*WASM_RT_ADD_PREFIX(Z_CZ_iii))(u32, u32);
/* export: 'D' */
extern u32 (*WASM_RT_ADD_PREFIX(Z_DZ_iii))(u32, u32);
/* export: 'E' */
extern u32 (*WASM_RT_ADD_PREFIX(Z_EZ_ii))(u32);
/* export: 'F' */
extern void (*WASM_RT_ADD_PREFIX(Z_FZ_vv))(void);
/* export: 'G' */
extern wasm_rt_table_t (*WASM_RT_ADD_PREFIX(Z_G));
/* export: 'H' */
extern u32 (*WASM_RT_ADD_PREFIX(Z_HZ_ii))(u32);
#ifdef __cplusplus
}
#endif

#endif  /* WAUTH3_H_GENERATED_ */
