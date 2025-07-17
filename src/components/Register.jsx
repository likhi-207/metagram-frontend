import React, { useState } from 'react';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');          // New email state
    const [password, setPassword] = useState('');
    const [isHovered, setIsHovered] = useState(false);

    const handleRegister = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/user/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    email: email,                      
                    password: password,
                }),
            });

            if (response.ok) {
                alert('Registration successful! You can now login.');
            } else {
                alert('Registration failed. Try again.');
            }
        } catch (error) {
            console.error('Error during registration:', error);
            alert('Server error. Try again.');
        }
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f2f5',
        fontFamily: 'Poppins, sans-serif',
    };

    const formStyle = {
        backgroundColor: '#fff',
        padding: '40px 30px',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        textAlign: 'center',
        width: '320px',
    };

    const inputStyle = {
        width: '100%',
        padding: '12px 15px',
        margin: '12px 0',
        borderRadius: '8px',
        border: '1px solid #ccc',
        fontSize: '14px',
    };

    const buttonStyle = {
        width: '100%',
        padding: '12px',
        backgroundColor: isHovered ? '#357ABD' : '#4a90e2',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        marginTop: '15px',
        transition: 'background-color 0.3s ease',
    };

    const titleStyle = {
        fontSize: '26px',
        fontWeight: '700',
        marginBottom: '10px',
        color: '#333',
    };

    const subTitleStyle = {
        fontSize: '18px',
        color: '#666',
        marginBottom: '20px',
    };

    return (
        <div style={containerStyle}>
            <div style={formStyle}>
                <div style={titleStyle}>Metagram</div>
                <div style={subTitleStyle}>Create your account</div>
                
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={inputStyle}
                />
                
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={inputStyle}
                />
                
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={inputStyle}
                />
                
                <button
                    onClick={handleRegister}
                    style={buttonStyle}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    Register
                </button>
            </div>
        </div>
    );
};

export default Register;
