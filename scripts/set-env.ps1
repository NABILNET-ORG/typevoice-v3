[Environment]::SetEnvironmentVariable('VULKAN_SDK', 'C:\VulkanSDK\1.4.341.1', 'User')
[Environment]::SetEnvironmentVariable('LIBCLANG_PATH', 'C:\Program Files\LLVM\bin', 'User')
$bindgenArgs = '"-IC:/Program Files/LLVM/lib/clang/21/include" "-IC:/Program Files/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.42.34433/include" "-IC:/Program Files (x86)/Windows Kits/10/Include/10.0.26100.0/ucrt"'
[Environment]::SetEnvironmentVariable('BINDGEN_EXTRA_CLANG_ARGS', $bindgenArgs, 'User')
Write-Host "Environment variables set successfully"
