import React from 'react';
import { OktoProvider, BuildType } from 'okto-sdk-react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import './index.css';

const OKTO_CLIENT_API_KEY = "58050a26-ae52-44b0-a1a4-c6e4b22acf5f";

function App() {
    return (
        <Router>
            <OktoProvider apiKey={OKTO_CLIENT_API_KEY} buildType={BuildType.SANDBOX}>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    {/* Add other routes as needed */}
                </Routes>
            </OktoProvider>
        </Router>
    );
}

export default App;