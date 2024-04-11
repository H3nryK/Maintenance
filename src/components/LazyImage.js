import React, { useEffect, useRef, useState } from "react";

const LazyImage = ({ src, alt }) => {
    const [isLoaded, setIsLOaded] = useState(false);
    const imageRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsLOaded(true);
                        observer.disconnect();
                    }
                });
            },
            {rootMargin: '50px'}
        );

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={imageRef} className={isLoaded ? 'lazy-image loaded' : 'lazy-image'}>
            {isLoaded ? (
                <img src={src} alt={alt} />
            ) : (
                <div className="placeholder">Loading</div>
            )}
        </div>
    );
};

export default LazyImage;