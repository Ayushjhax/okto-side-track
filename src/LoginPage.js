import React, { useState } from "react";
import { useOkto } from "okto-sdk-react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const { authenticate } = useOkto();
    const [authToken, setAuthToken] = useState(null);
    const navigate = useNavigate();

    const handleGoogleLogin = async (credentialResponse) => {
        const idToken = credentialResponse.credential;
        authenticate(idToken, (authResponse, error) => {
            if (authResponse) {
                setAuthToken(authResponse.auth_token);
                console.log("Authenticated successfully, auth token:", authResponse.auth_token);
                window.location.href = "https://solana-helius-blog-master-next.vercel.app/";
            } else if (error) {
                console.error("Authentication error:", error);
            }
        });
    };

    return (
        <div className="App">
            <h1>Quantum Access</h1>
            <div className="login-container">
                {!authToken ? (
                    <div className="google-login-button">
                        <GoogleLogin
                            onSuccess={handleGoogleLogin}
                            onError={(error) => console.error("Login Failed", error)}
                        />
                    </div>
                ) : (
                    <p className="authenticated-message">Access Granted</p>
                )}
            </div>
        </div>
    );
}

export default LoginPage;