You need a p8 extension private key file to use Apple’s "Sign in with Apple" authentication service for several reasons:

Security: The p8 file contains a private key used to generate JWT (JSON Web Token). This key is used to securely authenticate and authorize user information during the authentication process.

Authorization: Apple uses this private key to securely verify user credentials. This is essential for establishing a secure connection when users log in with their Apple accounts, ensuring the privacy of user information.

Token Generation: The p8 file is used to produce the JWTs required for verifying user credentials. JWT is important for validating the user’s identity and ensuring secure communication between the application and the user.

So, This is why you need to download the repository and fill in your private fields in the generateToken function. 
Don’t forget to run 
"node generateToken.js"

Search for JWT: in the console and copy the generated token.
