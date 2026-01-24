const SERVICE_NAME: &str = "ai.nabilnet.typevoice";

/// Try to get an API key from the OS keyring.
/// Returns Ok(Some(key)) if found, Ok(None) if not found, Err if keyring unavailable.
pub fn get_api_key(provider_id: &str) -> Result<Option<String>, String> {
    let entry = keyring::Entry::new(SERVICE_NAME, provider_id)
        .map_err(|e| format!("Keyring error: {}", e))?;
    match entry.get_password() {
        Ok(key) if !key.is_empty() => Ok(Some(key)),
        Ok(_) => Ok(None),
        Err(keyring::Error::NoEntry) => Ok(None),
        Err(e) => Err(format!("Keyring read error: {}", e)),
    }
}

/// Try to set an API key in the OS keyring.
pub fn set_api_key(provider_id: &str, api_key: &str) -> Result<(), String> {
    let entry = keyring::Entry::new(SERVICE_NAME, provider_id)
        .map_err(|e| format!("Keyring error: {}", e))?;
    if api_key.is_empty() {
        match entry.delete_credential() {
            Ok(()) | Err(keyring::Error::NoEntry) => Ok(()),
            Err(e) => Err(format!("Keyring delete error: {}", e)),
        }
    } else {
        entry
            .set_password(api_key)
            .map_err(|e| format!("Keyring write error: {}", e))
    }
}

/// Check if keyring is available on this system.
pub fn is_available() -> bool {
    let entry = match keyring::Entry::new(SERVICE_NAME, "__probe__") {
        Ok(e) => e,
        Err(_) => return false,
    };
    // Try a no-op read to verify the backend works
    match entry.get_password() {
        Err(keyring::Error::NoEntry) => true, // Backend works, just no entry
        Ok(_) => true,
        Err(_) => false,
    }
}
