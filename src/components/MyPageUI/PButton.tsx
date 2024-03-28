import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



interface PButtonProps {
    likeClickedSrc: string;
    likeNoClickedSrc: string;
    onClick: () => void;
    route: string;
}

const PButton: React.FC<PButtonProps> = ({ likeClickedSrc, likeNoClickedSrc, onClick, route }) => {
    const navigate = useNavigate();
    const [currentImage, setCurrentImage] = useState(likeClickedSrc); // Initial image
    
    // Function to toggle image onClick
    const handleImageToggle = () => {
        const newImage = currentImage === likeClickedSrc ? likeNoClickedSrc : likeClickedSrc;
        setCurrentImage(newImage);
    };

    return (
        <img
            src={currentImage}
            alt="like"
            onClick={() => {
                handleImageToggle(); // Toggle image onClick
                onClick(); // Call the onClick function provided by parent
                navigate(route); // Navigate to the specified route
            }}
        />
    );
};

export default PButton;