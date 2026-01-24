#include <stdint.h>
#include <string.h>

/*
 * Stub implementations of MSVC 14.43+ vectorized STL algorithm intrinsics.
 * These provide naive (non-vectorized) fallbacks for the symbols required by
 * pre-built ONNX Runtime binaries compiled with newer MSVC.
 */

/* __std_search_N: Find first occurrence of pattern in range (N = element size in bytes) */
const void* __std_search_1(const void* first, const void* last,
                           const void* pat_first, size_t pat_count) {
    const uint8_t* f = (const uint8_t*)first;
    const uint8_t* l = (const uint8_t*)last;
    const uint8_t* p = (const uint8_t*)pat_first;
    size_t hay_len = (size_t)(l - f);
    if (pat_count == 0) return first;
    if (pat_count > hay_len) return last;
    for (size_t i = 0; i <= hay_len - pat_count; i++) {
        if (memcmp(f + i, p, pat_count) == 0) return f + i;
    }
    return last;
}

const void* __std_search_2(const void* first, const void* last,
                           const void* pat_first, size_t pat_count) {
    const uint16_t* f = (const uint16_t*)first;
    const uint16_t* l = (const uint16_t*)last;
    const uint16_t* p = (const uint16_t*)pat_first;
    size_t hay_len = (size_t)(l - f);
    if (pat_count == 0) return first;
    if (pat_count > hay_len) return last;
    for (size_t i = 0; i <= hay_len - pat_count; i++) {
        if (memcmp(f + i, p, pat_count * 2) == 0) return f + i;
    }
    return last;
}

/* __std_find_end_N: Find last occurrence of pattern in range */
const void* __std_find_end_1(const void* first, const void* last,
                             const void* pat_first, size_t pat_count) {
    const uint8_t* f = (const uint8_t*)first;
    const uint8_t* l = (const uint8_t*)last;
    const uint8_t* p = (const uint8_t*)pat_first;
    size_t hay_len = (size_t)(l - f);
    if (pat_count == 0) return last;
    if (pat_count > hay_len) return last;
    const void* result = last;
    for (size_t i = 0; i <= hay_len - pat_count; i++) {
        if (memcmp(f + i, p, pat_count) == 0) result = f + i;
    }
    return result;
}

const void* __std_find_end_2(const void* first, const void* last,
                             const void* pat_first, size_t pat_count) {
    const uint16_t* f = (const uint16_t*)first;
    const uint16_t* l = (const uint16_t*)last;
    const uint16_t* p = (const uint16_t*)pat_first;
    size_t hay_len = (size_t)(l - f);
    if (pat_count == 0) return last;
    if (pat_count > hay_len) return last;
    const void* result = last;
    for (size_t i = 0; i <= hay_len - pat_count; i++) {
        if (memcmp(f + i, p, pat_count * 2) == 0) result = f + i;
    }
    return result;
}

/* __std_remove_N: Remove elements equal to value, return new end pointer */
void* __std_remove_1(void* first, void* last, uint8_t val) {
    uint8_t* f = (uint8_t*)first;
    uint8_t* l = (uint8_t*)last;
    uint8_t* write = f;
    for (uint8_t* read = f; read != l; read++) {
        if (*read != val) {
            *write++ = *read;
        }
    }
    return write;
}

void* __std_remove_2(void* first, void* last, uint16_t val) {
    uint16_t* f = (uint16_t*)first;
    uint16_t* l = (uint16_t*)last;
    uint16_t* write = f;
    for (uint16_t* read = f; read != l; read++) {
        if (*read != val) {
            *write++ = *read;
        }
    }
    return write;
}

void* __std_remove_8(void* first, void* last, uint64_t val) {
    uint64_t* f = (uint64_t*)first;
    uint64_t* l = (uint64_t*)last;
    uint64_t* write = f;
    for (uint64_t* read = f; read != l; read++) {
        if (*read != val) {
            *write++ = *read;
        }
    }
    return write;
}

/* __std_find_last_of_trivial_pos_N: Find position of last element matching any in needle set */
size_t __std_find_last_of_trivial_pos_1(const void* haystack, size_t hay_len,
                                         const void* needle, size_t needle_len) {
    const uint8_t* h = (const uint8_t*)haystack;
    const uint8_t* n = (const uint8_t*)needle;
    size_t result = (size_t)-1;
    for (size_t i = 0; i < hay_len; i++) {
        for (size_t j = 0; j < needle_len; j++) {
            if (h[i] == n[j]) {
                result = i;
                break;
            }
        }
    }
    return result;
}

size_t __std_find_last_of_trivial_pos_2(const void* haystack, size_t hay_len,
                                         const void* needle, size_t needle_len) {
    const uint16_t* h = (const uint16_t*)haystack;
    const uint16_t* n = (const uint16_t*)needle;
    size_t result = (size_t)-1;  /* Not found sentinel */
    for (size_t i = 0; i < hay_len; i++) {
        for (size_t j = 0; j < needle_len; j++) {
            if (h[i] == n[j]) {
                result = i;
                break;
            }
        }
    }
    return result;
}
