import React from 'react';
import Image from 'next/image';

export function Card({ children, className, style }) {
    return (
        <div className='card-container h-full'>
            <div
                className={` z-50 card rounded-[20px]  bg-white
                     ${className}`}
                style={style}
            >
                {children}
            </div>
        </div>
    );
}
