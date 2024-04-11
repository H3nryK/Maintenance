import React, { lazy, Suspense } from "react";
import heroPicture from '../assets/DSC.png';

const LazyImage = lazy(() => import ('./LazyImage'));

const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">Henry Kimani's Portfolio</h1>
                        <p className="hero-subtitle">Discover my innovative solutions & experiences.</p>
                        <a href="" className="btn">Learn More</a>
                    </div>
                    <div className="hero-image">
                        <Suspense fallback={<div>Loading image...</div>}>
                            <LazyImage src={heroPicture} alt="Hero" />
                        </Suspense>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;