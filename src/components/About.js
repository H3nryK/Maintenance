import React, { lazy, Suspense } from "react";
import aboutPicture from '../assets/bg.png';

const LazyImage = lazy(() => import ('./LazyImage'));

const AboutMe = () => {
    return (
        <section className="about-me" id="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-image">
                        <Suspense fallback={<div>Loading image...</div>}>
                            <LazyImage src={aboutPicture} alt="about" />
                        </Suspense>
                    </div>
                    <div className="about-text">
                        <h2 className="about-title">About Me</h2>
                        <p className="about-description">
                            Hi, I am a passionate web developer with love for creating
                             & developing user experiences by problem solving and incorporating
                             some intelligence in every interaction. I have quite had the experience
                             of being a full-stack developer (front-end & back-end development).
                        </p>
                        <p className="about-description">
                            I'm always eager to learn and grow, I would be excited to bring my expertise
                            to your project.
                        </p>
                        <a href="" className="btn">Reach out</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;