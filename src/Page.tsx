import React from 'react';
import './index.css';
import headshot from './Khushal-Chekuri-Headshot.jpeg'; // Ensure this path is correct
import background from './matrix-356024_1280.jpg'; // Ensure this path is correct

export default function Page() {
    return (
        <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url(${background})` }}>
            <div className="hero-content text-center">
                <div className="max-w-md mx-auto">
                    {/* Headshot Image */}
                    <div className="w-32 h-32 overflow-hidden rounded-full mx-auto"> {/* Container for image */}
                        <img src={headshot} alt="Khushal Chekuri's Headshot" className="object-cover w-full h-full" /> {/* Updated classNames */}
                    </div>

                    {/* Name and Description */}
                    <h1 className="text-5xl font-bold text-white">Khushal Ch</h1>
                    <p className="py-6 text-white">Hello! I'm Khushal Chekuri, a dedicated and passionate software developer currently pursuing a dual degree in Computer Science (Bachelor's and Master's) at the University of San Francisco. My academic journey is augmented by a rich portfolio of skills and experiences in various technologies and domains.</p>
                    <p className="py-6 text-white">My technical skill set is broad and diverse, encompassing languages such as C/C++, Python, Java, JavaScript, Kotlin, and Typescript. I am proficient in web and mobile application development, with hands-on experience in React, Node.js, Flutter, and Android development. Additionally, my expertise extends to cloud services and containerization technologies like AWS, Docker, and Google Cloud Platform, aligning with the current industry standards.</p>
                    <p className="py-6 text-white">In my coursework, I've delved deep into crucial subjects like Data Structures and Algorithms, Operating Systems, Machine Learning, and Cloud Computing, which have provided me with a solid foundation in software engineering principles. This academic knowledge is complemented by practical, real-world experience through internships at prestigious organizations like Amazon and Paramount, where I've contributed significantly to various projects.</p>
                    <p className="py-6 text-white">At Amazon, I developed a VS Code extension to simplify the creation of screens for Alexa devices, anticipated to be adopted by over 1000 engineers. At Dishcovery, I played a key role in back-end development for their innovative food-tech app, and at Paramount, I was involved in developing features for their streaming app, significantly enhancing user experience and engagement.</p>
                    <p className="py-6 text-white">My journey reflects a blend of technical prowess, innovative thinking, and a commitment to making a difference through technology. I am excited to explore new opportunities and challenges in the tech world.</p>

                    {/* Social Media Links */}
                    <div className="flex justify-center gap-4">
                        <a href="https://github.com/kchekuri26" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-white">
                            GitHub
                        </a>
                        <a href="https://linkedin.com/in/khushal-chekuri" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-white">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
