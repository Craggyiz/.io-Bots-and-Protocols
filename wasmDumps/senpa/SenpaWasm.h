#ifndef SENPAWASM_H_GENERATED_
#define SENPAWASM_H_GENERATED_
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
extern u32 (*Z_aZ_aZ_iii)(u32, u32);
/* import: 'a' 'b' */
extern f64 (*Z_aZ_bZ_diiiii)(u32, u32, u32, u32, u32);
/* import: 'a' 'c' */
extern void (*Z_aZ_cZ_viii)(u32, u32, u32);
/* import: 'a' 'd' */
extern void (*Z_aZ_dZ_viiiii)(u32, u32, u32, u32, u32);
/* import: 'a' 'e' */
extern void (*Z_aZ_eZ_viii)(u32, u32, u32);
/* import: 'a' 'f' */
extern void (*Z_aZ_fZ_viiii)(u32, u32, u32, u32);
/* import: 'a' 'g' */
extern f64 (*Z_aZ_gZ_diii)(u32, u32, u32);
/* import: 'a' 'h' */
extern void (*Z_aZ_hZ_vi)(u32);
/* import: 'a' 'i' */
extern u32 (*Z_aZ_iZ_iii)(u32, u32);
/* import: 'a' 'j' */
extern void (*Z_aZ_jZ_viii)(u32, u32, u32);
/* import: 'a' 'k' */
extern u32 (*Z_aZ_kZ_iii)(u32, u32);
/* import: 'a' 'l' */
extern void (*Z_aZ_lZ_viiiiii)(u32, u32, u32, u32, u32, u32);
/* import: 'a' 'm' */
extern void (*Z_aZ_mZ_vi)(u32);
/* import: 'a' 'n' */
extern void (*Z_aZ_nZ_vv)(void);
/* import: 'a' 'o' */
extern void (*Z_aZ_oZ_viii)(u32, u32, u32);
/* import: 'a' 'p' */
extern void (*Z_aZ_pZ_vii)(u32, u32);
/* import: 'a' 'q' */
extern u32 (*Z_aZ_qZ_iii)(u32, u32);
/* import: 'a' 'r' */
extern u32 (*Z_aZ_rZ_ii)(u32);
/* import: 'a' 's' */
extern u32 (*Z_aZ_sZ_iiiii)(u32, u32, u32, u32);
/* import: 'a' 't' */
extern void (*Z_aZ_tZ_viiiiiii)(u32, u32, u32, u32, u32, u32, u32);
/* import: 'a' 'u' */
extern u32 (*Z_aZ_uZ_ii)(u32);
/* import: 'a' 'v' */
extern void (*Z_aZ_vZ_vii)(u32, u32);
/* import: 'a' 'w' */
extern void (*Z_aZ_wZ_viiiii)(u32, u32, u32, u32, u32);
/* import: 'a' 'x' */
extern void (*Z_aZ_xZ_vii)(u32, u32);
/* import: 'a' 'y' */
extern u32 (*Z_aZ_yZ_ii)(u32);
/* import: 'a' 'z' */
extern u32 (*Z_aZ_zZ_ii)(u32);
/* import: 'a' 'A' */
extern void (*Z_aZ_AZ_vi)(u32);
/* import: 'a' 'B' */
extern u32 (*Z_aZ_BZ_ii)(u32);
/* import: 'a' 'C' */
extern u32 (*Z_aZ_CZ_iv)(void);
/* import: 'a' 'D' */
extern u32 (*Z_aZ_DZ_iiiii)(u32, u32, u32, u32);
/* import: 'a' 'E' */
extern u32 (*Z_aZ_EZ_iv)(void);

/* export: 'F' */
extern wasm_rt_memory_t (*WASM_RT_ADD_PREFIX(Z_F));
/* export: 'G' */
extern void (*WASM_RT_ADD_PREFIX(Z_GZ_vv))(void);
/* export: 'H' */
extern u32 (*WASM_RT_ADD_PREFIX(Z_HZ_ii))(u32);
/* export: 'I' */
extern u32 (*WASM_RT_ADD_PREFIX(Z_IZ_iii))(u32, u32);
/* export: 'J' */
extern wasm_rt_table_t (*WASM_RT_ADD_PREFIX(Z_J));
/* export: 'K' */
extern u32 (*WASM_RT_ADD_PREFIX(Z_KZ_ii))(u32);
/* export: 'L' */
extern void (*WASM_RT_ADD_PREFIX(Z_LZ_vv))(void);
/* export: 'M' */
extern void (*WASM_RT_ADD_PREFIX(Z_MZ_vi))(u32);
#ifdef __cplusplus
}
#endif

#endif  /* SENPAWASM_H_GENERATED_ */
