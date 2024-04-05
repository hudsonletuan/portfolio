import React from "react";
import "./Projects.css";
import hrManagerImg from "./images/hrmanager-featured-img.png";
import chatbotImg from "./images/chatbot-featured-img.png";
import faceRegImg from "./images/face-recognition-featured-img.png";
import bookedComImg from "./images/booked-com.png";
import tuanleTop from "./images/tuanletop.png";
import marketPlace from "./images/market-place.png";

const Projects: React.FC = () => {
    return (
        <section id="projects" className="section">
            <div className="projects-container">
                <div className="firstRow projects-row">
                    <div className="hr-manager">
                        <div className="image-container">
                            <img src={hrManagerImg} alt="Human Resources Manager" />
                            <div className="overlay">
                                <div className="overlay-elements">
                                    <p>A web-based application created to manage employee information for a company. The application allows users to create, read, update, and delete employee records, as well as import employee data from EXCEL and CSV files and export employee data to Excel, PDF, and CSV files.</p>
                                    <div className="overlay-actions">
                                        <a href="https://github.com/hudsonletuan/human-resources-manager" target="_blank" className="overlay-link">GitHub</a>
                                        <a href="https://tuanle-hr.azurewebsites.net/" target="_blank" className="overlay-link">View Application</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chatbot-ai">
                        <div className="image-container">
                            <img src={chatbotImg} alt="Chatbot OpenAI" />
                            <div className="overlay">
                                <div className="overlay-elements">
                                    <p>A web-based chatbot application that helps users use OpenAI's GPT-3.5-Turbo and GPT-4 AI models via API keys without accessing the actual account. This web application is designed to be user-friendly, allowing users to interact with the chatbot through a simple interface.</p>
                                    <div className="overlay-actions">
                                        <a href="https://github.com/hudsonletuan/chatbot-openai" target="_blank" className="overlay-link">GitHub</a>
                                        <a href="https://chatbot.tuanle.top/" target="_blank" className="overlay-link">View Application</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="face-recognition">
                        <div className="image-container">
                            <img src={faceRegImg} alt="Real-time Face Recognition" />
                            <div className="overlay">
                                <div className="overlay-elements">
                                    <p>This project is a real-time face recognition application. This Python application uses the OpenCV library and the pre-trained model VGGFace for running and training. This recognizes faces appearing on the camera and will run through the face database saved locally to display the name on the frame of the person recognized on the camera.</p>
                                    <div className="overlay-actions">
                                        <a href="https://github.com/hudsonletuan/realtime-face-recognition" target="_blank" className="overlay-link">GitHub</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="secondRow projects-row">
                    <div className="market-place">
                        <div className="image-container">
                            <img src={marketPlace} alt="Yotes Marketplace" />
                            <div className="overlay">
                                <div className="overlay-elements">
                                    <p>A web-based application created for the College of Idaho students and staff to exchange or give away stuff. This web application allows people to create posts, send private messages in real-time, update the stuff's status (Available/Not Available), and label, search, and sort stuff.</p>
                                    <div className="overlay-actions">
                                        <a href="https://github.com/hudsonletuan/yotes-marketplace" target="_blank" className="overlay-link">GitHub</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="booked-com">
                        <div className="image-container">
                            <img src={bookedComImg} alt="Booked.com" />
                            <div className="overlay">
                                <div className="overlay-elements">
                                    <p>Booked.com is a static responsive website project that uses only HTML and CSS without any frameworks, scripts, libraries, or packages. This website shows how powerful HTML & CSS are in web design even with complicated transforms or transitions.</p>
                                    <div className="overlay-actions">
                                        <a href="https://github.com/hudsonletuan/booked-com" target="_blank" className="overlay-link">GitHub</a>
                                        <a href="https://bookedcom.tuanle.top/" target="_blank" className="overlay-link">View Website</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tuanle-top">
                        <div className="image-container">
                            <img src={tuanleTop} alt="Coffee With Tuan" />
                            <div className="overlay">
                                <div className="overlay-elements">
                                    <p>Coffee with Tuan is my Vietnamese personal responsive website built on WordPress using Elementor as well as other multiple plugins. This website is my personal space to share my thoughts, experiences, hobbies, etc.</p>
                                    <div className="overlay-actions">
                                        <a href="https://tuanle.top/" target="_blank" className="overlay-link">View Website</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;