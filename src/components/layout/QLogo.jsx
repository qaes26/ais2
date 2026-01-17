import React from 'react';

const QLogo = ({ className = "w-10 h-10" }) => {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="8" className="text-primary-600" />
            <path
                d="M65 65 L85 85"
                stroke="currentColor"
                strokeWidth="12"
                strokeLinecap="round"
                className="text-primary-600"
            />
            <text
                x="50"
                y="65"
                textAnchor="middle"
                fontSize="50"
                fontWeight="bold"
                fill="currentColor"
                className="text-primary-600 font-serif"
            >
                Q
            </text>
        </svg>
    );
};

export default QLogo;
