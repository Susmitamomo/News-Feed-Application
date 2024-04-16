// src/components/Signup.js

import React, { useState } from 'react';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        // Add signup logic here (e.g., send signup request to backend)
        console.log('Signup clicked');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <label>Name:</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />

                <label>Email:</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />

                <label>Password:</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
