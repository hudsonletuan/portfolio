import React, { useEffect, useRef } from "react";
import me from "./images/myImg.jpg";
import "./About.css";

const About: React.FC = () => {
    const educationRef = useRef<HTMLButtonElement>(null);
    const technicalSkillsRef = useRef<HTMLButtonElement>(null);
    const factsRef = useRef<HTMLButtonElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const isClicked = useRef<boolean>(false);
    const isClicked2 = useRef<boolean>(false);
    const isClicked3 = useRef<boolean>(false);
    const coords = useRef<{
        startX: number, startY: number, lastX: number, lastY: number, originalX: number, originalY: number;
    }>({ startX: 0, startY: 0, lastX: 0, lastY: 0, originalX: 0, originalY: 0});
    const coords2 = useRef<{
        startX: number, startY: number, lastX: number, lastY: number, originalX: number, originalY: number;
    }>({ startX: 0, startY: 0, lastX: 0, lastY: 0, originalX: 0, originalY: 0});
    const coords3 = useRef<{
        startX: number, startY: number, lastX: number, lastY: number, originalX: number, originalY: number;
    }>({ startX: 0, startY: 0, lastX: 0, lastY: 0, originalX: 0, originalY: 0});

    const codingRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!educationRef.current || !containerRef.current) return;
        const educationElement = educationRef.current;
        const containerElement = containerRef.current;

        coords.current.originalX = educationElement.offsetLeft;
        coords.current.originalY = educationElement.offsetTop;

        const onMouseDown = (e: MouseEvent) => {
            isClicked.current = true;
            coords.current.startX = e.clientX;
            coords.current.startY = e.clientY;

        };
        const onMouseUp = (e: MouseEvent) => {
            isClicked.current = false;
            coords.current.lastX = coords.current.originalX;
            coords.current.lastY = coords.current.originalY;

            educationElement.classList.add('move-back');

            // Check for collision
            if (codingRef.current) {
                let codingRect = codingRef.current.getBoundingClientRect();
                let educationRect = educationElement.getBoundingClientRect();

                let isColliding = !(
                    educationRect.right < codingRect.left ||
                    educationRect.left > codingRect.right ||
                    educationRect.bottom < codingRect.top ||
                    educationRect.top > codingRect.bottom
                );

                if (isColliding) {
                    const educationAnswer = document.querySelector('.education');
                    const technicalSkillsAnswer = document.querySelector('.technicalSkills');
                    const factsAnswer = document.querySelector('.facts');
                    const codingImgElement = document.querySelector('.codingImage');
                    const btns = document.querySelectorAll('.element');
                    if (educationAnswer && !educationAnswer.classList.contains('visible')) {
                        educationAnswer.classList.add('visible');
                        technicalSkillsAnswer?.classList.remove('visible');
                        factsAnswer?.classList.remove('visible');
                        codingImgElement?.classList.add('code1');
                        codingImgElement?.classList.remove('code2');
                        codingImgElement?.classList.remove('code3');
                        btns.forEach(btn => btn.classList.add('btn1'));
                        btns.forEach(btn => btn.classList.remove('btn2'));
                        btns.forEach(btn => btn.classList.remove('btn3'));
                    }
                    educationElement.style.top = `${coords.current.originalY}px`;
                    educationElement.style.left = `${coords.current.originalX}px`;
                } else {
                    const educationAnswer = document.querySelector('.education');
                    const codingImgElement = document.querySelector('.codingImage');
                    const btns = document.querySelectorAll('.element');
                    if (educationAnswer && educationAnswer.classList.contains('visible')) {
                        educationAnswer.classList.remove('visible');
                        codingImgElement?.classList.remove('code1');
                        btns.forEach(btn => btn.classList.remove('btn1'));
                    }
                    educationElement.style.top = `${coords.current.originalY}px`;
                    educationElement.style.left = `${coords.current.originalX}px`;
                }
            }
        };
        const onMouseMove = (e: MouseEvent) => {
            if (!isClicked.current) return;

            const nextX = e.clientX - coords.current.startX + coords.current.originalX;
            const nextY = e.clientY - coords.current.startY + coords.current.originalY;

            educationElement.style.top = `${nextY}px`;
            educationElement.style.left = `${nextX}px`;
        };

        const handleTransitionEnd = () => {
            educationElement.classList.remove('move-back');
        };

        educationElement.addEventListener("mousedown", onMouseDown);
        educationElement.addEventListener("mouseup", onMouseUp);
        containerElement.addEventListener("mousemove", onMouseMove);
        containerElement.addEventListener("mouseleave", function () {
            if (isClicked.current || isClicked2.current || isClicked3.current) {
                const educationAnswer = document.querySelector('.education');
                if (educationAnswer && !educationAnswer.classList.contains('visible')) {
                    onMouseUp({} as MouseEvent);
                }
            }
        });
        educationElement.addEventListener('transitionend', handleTransitionEnd);

        const cleanUp = () => {
            educationElement.removeEventListener("mousedown", onMouseDown);
            educationElement.removeEventListener("mouseup", onMouseUp);
            containerElement.removeEventListener("mousemove", onMouseMove);
            containerElement.removeEventListener("mouseleave", onMouseUp);
            educationElement.removeEventListener('transitionend', handleTransitionEnd);
        };

        return cleanUp;
    }, []);

    useEffect(() => {
        if (!technicalSkillsRef.current || !containerRef.current) return;
        const technicalSkillsElement = technicalSkillsRef.current;
        const containerElement = containerRef.current;

        coords2.current.originalX = technicalSkillsElement.offsetLeft;
        coords2.current.originalY = technicalSkillsElement.offsetTop;

        const onMouseDown = (e: MouseEvent) => {
            isClicked2.current = true;
            coords2.current.startX = e.clientX;
            coords2.current.startY = e.clientY;

        };
        const onMouseUp = (e: MouseEvent) => {
            isClicked2.current = false;
            coords2.current.lastX = coords2.current.originalX;
            coords2.current.lastY = coords2.current.originalY;

            technicalSkillsElement.classList.add('move-back');

            // Check for collision
            if (codingRef.current) {
                let codingRect = codingRef.current.getBoundingClientRect();
                let technicalSkillsRect = technicalSkillsElement.getBoundingClientRect();

                let isColliding = !(
                    technicalSkillsRect.right < codingRect.left ||
                    technicalSkillsRect.left > codingRect.right ||
                    technicalSkillsRect.bottom < codingRect.top ||
                    technicalSkillsRect.top > codingRect.bottom
                );

                if (isColliding) {
                    const educationAnswers = document.querySelector('.education');
                    const technicalSkillsAnswers = document.querySelector('.technicalSkills');
                    const factsAnswers = document.querySelector('.facts');
                    const codingImgElement = document.querySelector('.codingImage');
                    const btns = document.querySelectorAll('.element');
                    if (technicalSkillsAnswers && !technicalSkillsAnswers.classList.contains('visible')) {
                        educationAnswers?.classList.remove('visible');
                        technicalSkillsAnswers.classList.add('visible');
                        factsAnswers?.classList.remove('visible');
                        codingImgElement?.classList.remove('code1');
                        codingImgElement?.classList.add('code2');
                        codingImgElement?.classList.remove('code3');
                        btns.forEach(btn => btn.classList.remove('btn1'));
                        btns.forEach(btn => btn.classList.add('btn2'));
                        btns.forEach(btn => btn.classList.remove('btn3'));
                    }
                    technicalSkillsElement.style.top = `${coords2.current.originalY}px`;
                    technicalSkillsElement.style.left = `${coords2.current.originalX}px`;
                } else {
                    const technicalSkillsAnswers = document.querySelector('.technicalSkills');
                    const codingImgElement = document.querySelector('.codingImage');
                    const btns = document.querySelectorAll('.element');
                    if (technicalSkillsAnswers && technicalSkillsAnswers.classList.contains('visible')) {
                        technicalSkillsAnswers.classList.remove('visible');
                        codingImgElement?.classList.remove('code2');
                        btns.forEach(btn => btn.classList.remove('btn2'));
                    }
                    technicalSkillsElement.style.top = `${coords2.current.originalY}px`;
                    technicalSkillsElement.style.left = `${coords2.current.originalX}px`;
                }
            }
        };
        const onMouseMove = (e: MouseEvent) => {
            if (!isClicked2.current) return;

            const nextX = e.clientX - coords2.current.startX + coords2.current.originalX;
            const nextY = e.clientY - coords2.current.startY + coords2.current.originalY;

            technicalSkillsElement.style.top = `${nextY}px`;
            technicalSkillsElement.style.left = `${nextX}px`;
        };

        const handleTransitionEnd = () => {
            technicalSkillsElement.classList.remove('move-back');
        };

        technicalSkillsElement.addEventListener("mousedown", onMouseDown);
        technicalSkillsElement.addEventListener("mouseup", onMouseUp);
        containerElement.addEventListener("mousemove", onMouseMove);
        containerElement.addEventListener("mouseleave", function () {
            if (isClicked.current || isClicked2.current || isClicked3.current) {
                const technicalSkillsAnswers = document.querySelector('.technicalSkills');
                if (technicalSkillsAnswers && !technicalSkillsAnswers.classList.contains('visible')) {
                    onMouseUp({} as MouseEvent);
                }
            }
        });
        technicalSkillsElement.addEventListener('transitionend', handleTransitionEnd);

        const cleanUp = () => {
            technicalSkillsElement.removeEventListener("mousedown", onMouseDown);
            technicalSkillsElement.removeEventListener("mouseup", onMouseUp);
            containerElement.removeEventListener("mousemove", onMouseMove);
            containerElement.removeEventListener("mouseleave", onMouseUp);
            technicalSkillsElement.removeEventListener('transitionend', handleTransitionEnd);
        };

        return cleanUp;
    }, []);

    useEffect(() => {
        if (!factsRef.current || !containerRef.current) return;
        const factsElement = factsRef.current;
        const containerElement = containerRef.current;

        coords3.current.originalX = factsElement.offsetLeft;
        coords3.current.originalY = factsElement.offsetTop;

        const onMouseDown = (e: MouseEvent) => {
            isClicked3.current = true;
            coords3.current.startX = e.clientX;
            coords3.current.startY = e.clientY;

        };
        const onMouseUp = (e: MouseEvent) => {
            isClicked3.current = false;
            coords3.current.lastX = coords3.current.originalX;
            coords3.current.lastY = coords3.current.originalY;

            factsElement.classList.add('move-back');

            // Check for collision
            if (codingRef.current) {
                let codingRect = codingRef.current.getBoundingClientRect();
                let factsRect = factsElement.getBoundingClientRect();

                let isColliding = !(
                    factsRect.right < codingRect.left ||
                    factsRect.left > codingRect.right ||
                    factsRect.bottom < codingRect.top ||
                    factsRect.top > codingRect.bottom
                );

                if (isColliding) {
                    const educationAnswers = document.querySelector('.education');
                    const technicalSkillsAnswers = document.querySelector('.technicalSkills');
                    const factsAnswers = document.querySelector('.facts');
                    const codingImgElement = document.querySelector('.codingImage');
                    const btns = document.querySelectorAll('.element');
                    if (factsAnswers && !factsAnswers.classList.contains('visible')) {
                        educationAnswers?.classList.remove('visible');
                        technicalSkillsAnswers?.classList.remove('visible');
                        factsAnswers.classList.add('visible');
                        codingImgElement?.classList.remove('code1');
                        codingImgElement?.classList.remove('code2');
                        codingImgElement?.classList.add('code3');
                        btns.forEach(btn => btn.classList.remove('btn1'));
                        btns.forEach(btn => btn.classList.remove('btn2'));
                        btns.forEach(btn => btn.classList.add('btn3'));
                    }
                    factsElement.style.top = `${coords3.current.originalY}px`;
                    factsElement.style.left = `${coords3.current.originalX}px`;
                } else {
                    const factsAnswers = document.querySelector('.facts');
                    const codingImgElement = document.querySelector('.codingImage');
                    const btns = document.querySelectorAll('.element');
                    if (factsAnswers && factsAnswers.classList.contains('visible')) {
                        factsAnswers.classList.remove('visible');
                        codingImgElement?.classList.remove('code3');
                        btns.forEach(btn => btn.classList.remove('btn3'));
                    }
                    factsElement.style.top = `${coords3.current.originalY}px`;
                    factsElement.style.left = `${coords3.current.originalX}px`;
                }
            }
        };
        const onMouseMove = (e: MouseEvent) => {
            if (!isClicked3.current) return;

            const nextX = e.clientX - coords3.current.startX + coords3.current.originalX;
            const nextY = e.clientY - coords3.current.startY + coords3.current.originalY;

            factsElement.style.top = `${nextY}px`;
            factsElement.style.left = `${nextX}px`;
        };

        const handleTransitionEnd = () => {
            factsElement.classList.remove('move-back');
        };

        factsElement.addEventListener("mousedown", onMouseDown);
        factsElement.addEventListener("mouseup", onMouseUp);
        containerElement.addEventListener("mousemove", onMouseMove);
        containerElement.addEventListener("mouseleave", function () {
            if (isClicked.current || isClicked2.current || isClicked3.current) {
                const factsAnswers = document.querySelector('.facts');
                if (factsAnswers && !factsAnswers.classList.contains('visible')) {
                    onMouseUp({} as MouseEvent);
                }
            }
        });
        factsElement.addEventListener('transitionend', handleTransitionEnd);

        const cleanUp = () => {
            factsElement.removeEventListener("mousedown", onMouseDown);
            factsElement.removeEventListener("mouseup", onMouseUp);
            containerElement.removeEventListener("mousemove", onMouseMove);
            containerElement.removeEventListener("mouseleave", onMouseUp);
            factsElement.removeEventListener('transitionend', handleTransitionEnd);
        };

        return cleanUp;
    }, []);

    return (
        <section id="aboutMe" className="section container" ref={containerRef}>
            <div className="qaDrop">
                <p className="instruction">DRAG AND DROP TO THE NERD</p>
                <div className="qaElement">
                    <button id="education" className="element" ref={educationRef}>EDUCATION</button>
                    <button id="technicalSkills" className="element" ref={technicalSkillsRef}>TECHNICAL SKILLS</button>
                    <button id="facts" className="element" ref={factsRef}>FACTS</button>
                </div>
                <div className="codingImageBox">
                    <div className="codingImage" ref={codingRef}></div>
                </div>
                <div className="qaAnswers">
                    <div className="education answer">
                        <div className="college">
                            <p>-----2020 - 2024----- | <i>(Full Scholarship)</i></p>
                            <h3><li>The College of Idaho - Bachelor (United States of America)</li></h3>
                            <p><strong>Majors:</strong> Computer Science, Business Administration</p>
                            <p><strong>Specialization:</strong> Data Science</p>
                            <p><strong>Minors:</strong> Art and Design, Professional Foundations</p>
                        </div>
                        <br />
                        <div className="uwc">
                            <p>-----2018 - 2020----- | <i>(Full Scholarship)</i></p>
                            <h3><li>United World College Dilijan - International Baccalaureate (Armenia)</li></h3>
                            <p><strong>Higher Level:</strong> Economics, Mathematics, English</p>
                            <p><strong>Standard Level:</strong> Physics, Environmental Systems and Societies, Literature</p>
                        </div>
                        <br />
                        <div className="high_school">
                            <p>-----2015 - 2018-----</p>
                            <h3><li>Nghi Loc 2 High School - High School (Vietnam)</li></h3>
                            <p><strong>Higher Level:</strong> Mathematics, Physics, Chemistry, Biology, English</p>
                            <p><strong>Standard Level:</strong> Informatics, Technology, Literature, History, Geography, Physical Education, Civil Education, National Defense and Security Education</p>
                        </div>
                    </div>
                    <div className="technicalSkills answer">
                        <table className="technicalSkillsTable">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="frameWorks">
                                            <h3>Frameworks/Platforms</h3>
                                            <ul>
                                                <li>ASP.NET Core MVC</li>
                                                <li>Node.js</li>
                                                <li>Express</li>
                                                <li>React JS</li>
                                                <li>Spring Boot</li>
                                                <li>Vue.js</li>
                                            </ul>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="programmingLanguages">
                                            <h3>Programming Languages</h3>
                                            <ul>
                                                <li>Python</li>
                                                <li>C#</li>
                                                <li>JavaScript</li>
                                                <li>TypeScript</li>
                                                <li>Java</li>
                                                <li>R</li>
                                                <li>VBA on Excel</li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="otherSkills">
                                            <h3>Others</h3>
                                            <ul>
                                                <li>AWS, Microsoft Azure, Netlify, Git</li>
                                                <li>REST API, RESTful API, HTML, CSS</li>
                                                <li>Bootstrap, Tailwind CSS, WordPress, Wix</li>
                                            </ul>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="databases">
                                            <h3>Database Management Systems</h3>
                                            <ul>
                                                <li>PostgreSQL</li>
                                                <li>SQL Server</li>
                                                <li>MongoDB</li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="facts answer">
                        <ul>
                            <li>I started hacking into people's accounts in middle school by using phishing, trojan, keylog, and privilege escalation techniques.</li>
                            <li>I did not understand Pascal and Microsoft Office at all in high school and never wanted to be a programmer/developer after that.</li>
                            <li>I got my first full-time job at 19 years old and ridiculously, my job was mainly about coding and working with Microsoft Office.</li>
                            <li>I officially majored in Computer Science in the Spring of 2023 (only one and a half years before my graduation).</li>
                            <li>I like going to work more than staying inside the classroom.</li>
                            <li>I never like studying in the library (but sleeping).</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="myDescription">
                <div className="myBasic">
                    <div className="myImage">
                        <img src={me} alt="Me"></img>
                    </div>
                    <div className="myName">
                        <h1>Tuan Quoc Le</h1>
                    </div>
                    <div className="myIntroduction">
                        <p>I am a Full Stack Software Engineer and on my way to be a DevOps Engineer and Data Scientist 
                            (hopefully) soon. I am driven by the growth and variety of technology nowadays, 
                            from Artificial Intelligence or Machine Learning to Applications or Cyber 
                            Security. I never believe that I was born smart, but I believe that the 
                            eagerness to learn will make everyone smarter. I lead myself by the ideal 
                            of "if they can do it, I can do it, even better", it is only the matter of 
                            time and effort.
                        </p>
                    </div>
                    <div className="sourceCode">
                        <p style={{marginBottom: '10px'}}>This website is built using ReactJS and TypeScript</p>
                        <p>Click <a href="https://github.com/hudsonletuan/portfolio" target="_blank">HERE 
                            <svg className="intro-github-svg" viewBox="0 0 98 98" width="20" height="auto" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff"/>
                            </svg>
                            </a> to see the source code.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
