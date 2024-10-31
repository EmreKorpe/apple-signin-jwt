const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const filePath = "YOUR_FILE_PATH" | __dirname;
const fileName = "AuthKey_?.p8";

const privateKey = fs.readFileSync(path.join(filePath, fileName));

// Apple Info
const teamId = 'TEAM_ID'; // Apple Developer Team ID
const clientId = 'SERVICE_ID'; // Apple Service ID (for example: com.example.app)
const keyId = 'KEY_ID'; // .p8 file Key ID (ex. AuthKey_555555.p8 > Key Id : "555555")

// JWT function
function generateJWT() {
    const token = jwt.sign(
        {
            iss: teamId,
            iat: Math.floor(Date.now() / 1000),
            exp: Math.floor(Date.now() / 1000) + 3600,
            aud: 'https://appleid.apple.com',
            sub: clientId,
        },
        privateKey,
        {
            algorithm: 'ES256', // Apple default algorithm
            header: {
                kid: keyId,
                alg: 'ES256' // Apple default algorithm
            }
        }
    );
    return token;
}

// JWT generator
const token = generateJWT();
console.log('JWT:', token);
