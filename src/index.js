import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const GOOGLE_CLIENT_ID = "580376701478-fqtrcf825toormqapfvrcl8nprq1fmbg.apps.googleusercontent.com"
root.render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId = {GOOGLE_CLIENT_ID}>
            <App />
        </GoogleOAuthProvider>
    </React.StrictMode>
);