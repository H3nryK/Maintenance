import React, { lazy, Suspense } from "react";
import mksuPic from '../assets/MKSU_LOGO-removebg-preview-2.png';
import wazitoPic from '../assets/IMG-20231201-WA0016.jpg';
import miliPic from '../assets/images.jpeg';

const LazyImage = lazy(() => import ('./LazyImage'));

const Projects = () => {
    const projects = [
        {
            title: 'Machakos University Smart Buddy',
            description: 'An artificial intelligent virtual assistant to help students, & the community with campus life.',
            image: mksuPic,
            githubLink: 'https://github.com/H3nryK/'
        },
        {
            title: 'Milimani High Blog System',
            description: 'This is a ticket system that will help in attending the 2nd edition of the MksU Hackfest.',
            image: miliPic,
            githubLink: 'https://milimanihighschool.co.ke/blogs/'
        },
        {
            title: 'Wazito Event Organizers',
            description: 'This is an organizing platform that prioritizes the storage and retrieval of user data from a database.',
            image: wazitoPic,
            githubLink: 'https://github.com/H3nryK/'
        }
    ];

    return (
        <section className="projects" id="project">
            <div className="container">
                <h2 className="projects-title">My Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-image">
                                <Suspense fallback={<div>Loading image...</div>}>
                                    <LazyImage src={project.image} alt={project.title} />
                                </Suspense>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <a href={project.githubLink} className="btn">
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;