import React, { useState, useEffect } from 'react';
import './Provider.css';

const Provider = ({ logos }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
 
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % logos.length);
        }, 1500);  

        return () => clearInterval(interval);  
    }, [logos]);

    return (
        <section className="provider-section">
            <div className="provider-logo">
                <img src={logos[currentIndex]} alt={`Provider ${currentIndex + 1}`} />
            </div>
        </section>
    );
};

export default Provider;
