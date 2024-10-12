import React from 'react';
import './SmallerCard.css';

const SmallerCard = ({ title, date, description, imageUrl }) => {
    // Get the first 10 words of the description
    const truncatedDescription = description
        ? description.split(' ').slice(0, 10).join(' ') + (description.split(' ').length > 10 ? '...' : '')
        : '';

    return (
        <div className="smallerCard">
            {/* Check if imageUrl exists and display the image */}
            {imageUrl && (
                <img
                    src={`data:image/jpeg;base64,${imageUrl}`}
                    alt={`Image for ${title}`}
                    className="smallerCard-image"
                />
            )}
            <div className="smallerCard-content">
                <h3>{title}</h3>
                <p>{date}</p>
                <p>{truncatedDescription}</p>
            </div>
        </div>
    );
};

export default SmallerCard;