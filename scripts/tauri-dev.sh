#!/bin/bash
export VULKAN_SDK="C:\\VulkanSDK\\1.4.341.1"
export LIBCLANG_PATH="C:\\Program Files\\LLVM\\bin"
export BINDGEN_EXTRA_CLANG_ARGS="\"-IC:/Program Files/LLVM/lib/clang/21/include\" \"-IC:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.42.34433/include\" \"-IC:/Program Files (x86)/Windows Kits/10/Include/10.0.26100.0/ucrt\""
export PATH="/c/Users/saeee/.cargo/bin:/c/Program Files/CMake/bin:$PATH"
cd "$(dirname "$0")/.."
exec bun run tauri dev
