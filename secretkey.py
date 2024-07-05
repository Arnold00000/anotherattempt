import secrets

secret_key = secrets.token_hex(
    8
)  # Generate a 16-character (8 bytes) hexadecimal string
print(secret_key)  # Example output: '39a8472e8fa391fc'
