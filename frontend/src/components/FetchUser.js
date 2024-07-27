import React, { useEffect } from 'react';

function FetchUser() {
    const handleSubmit = async (event) => {
        if (event) event.preventDefault();
        
        try {
            const response = await fetch('http://localhost:3000/api/user/fetch', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Auth-Token': localStorage.getItem('token'),
                    'Session': localStorage.getItem('session') // Corrected 'Session' to 'session'
                },
            });

            // if (!response.ok) {
            //     throw new Error('Network response was not ok');
            // }

            const data = await response.json();
            console.log('Response:', data);
            // Optionally, update the token if it's included in the response
            // localStorage.setItem('token', data.token);

        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        handleSubmit();
    }, []); // Added missing dependency array to avoid infinite loops

    return (
        <div>
            FetchUser
        </div>
    );
}

export default FetchUser;
