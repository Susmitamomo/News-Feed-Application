// src/components/Login.js

import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Add login logic here (e.g., send login request to backend)
        console.log('Login clicked');
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label>Email:</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />

                <label>Password:</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
