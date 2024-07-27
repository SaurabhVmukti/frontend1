import React, { useEffect, useRef } from 'react';
// import './Dashboard.css'; // Your custom styles

function Dashboard() {
    const menuicnRef = useRef(null);
    const navRef = useRef(null);

    useEffect(() => {
        const handleMenuClick = () => {
            if (navRef.current) {
                navRef.current.classList.toggle("navclose");
            }
        };

        const menuicnElement = menuicnRef.current;
        if (menuicnElement) {
            menuicnElement.addEventListener("click", handleMenuClick);
        }

        return () => {
            if (menuicnElement) {
                menuicnElement.removeEventListener("click", handleMenuClick);
            }
        };
    }, []);


    // Get response
    const authToken = localStorage.getItem('f')

    return (
        
            <div className="container my-5" >
            <main>
                <h2>Welcome to My Website</h2>
                <p>This is a dummy home page using Bootstrap for styling.</p>
            </main>
        </div>
    );
}

export default Dashboard;
