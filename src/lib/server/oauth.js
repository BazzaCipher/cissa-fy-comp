import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
const auth = getAuth();

async function signIn() {
    let token = "";
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            if (!credential) return "";
            token = credential.accessToken || "";
            // The signed-in user info.
            const user = result.user;
        })
        .catch(err => {
            // Handle error
            const errorCode = err.code;
            const errorMessage = err.message;
            console.log(`Auth error: ${errorCode}: ${errorMessage}`);
        });
    
    token
}