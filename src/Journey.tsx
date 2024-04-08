import React, { useState } from "react";
import Modal from "./Modal";
import "./Journey.css";

const Journey: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<React.ReactNode>(null);

    const handleCollegeModalOpen = () => {
        setIsModalOpen(true);
        setModalContent(
            <>
                <h2 style={{textAlign: 'center'}}>The College of Idaho - USA</h2>
                <h3 style={{textAlign: 'center'}}>IT Intern</h3>
                <p style={{textAlign: 'center', marginBottom: '10px'}}>February 2024 - May 2024</p>
                <hr />
                <div style={{marginTop: '10px', textAlign: 'justify', lineHeight: '24px'}}>
                    <li>Providing application support to improve operational efficiency and data integrity.</li>
                    <li>Working closely with the IT staffs to maintain the IT operations and infrastructure within the school including management, security, and administration.</li>
                    <li>Creating the goods exchange and giveaway web application "Yotes Marketplace" for students and staffs using Node.js, Express, Vue, and MongoDB.</li>
                    <li>Collaborating with faculty, staff, and students to provide timely technical assistance.</li>
                    <li>Integrating into the student helpdesk, addressing inquiries, planning solutions, and resolving support tickets.</li>
                    <li>Working on a large unstructured support tickets database to train a model which then will be used to improve the support tickets by automate the submission process.</li>
                    <li>Other small projects/tasks</li>
                </div>
            </>
        );
    };

    const handlePhoenixModalOpen = () => {
        setIsModalOpen(true);
        setModalContent(
            <>
                <h2 style={{textAlign: 'center'}}>Phoenix High Quality School - Vietnam</h2>
                <h3 style={{textAlign: 'center'}}>Office Specialist</h3>
                <p style={{textAlign: 'center', marginBottom: '10px'}}>July 2020 - August 2021</p>
                <hr />
                <div style={{marginTop: '10px', textAlign: 'justify', lineHeight: '24px'}}>
                    <li>Creating, managing, and leading the digitizing-school projects as well as IT helpdesk.</li>
                    <li>Working directly with the school's investors, directors, and other department chiefs to deploy projects.</li>
                    <li>Creating Excel VBA software and online systems for human resources, payroll system, warehouse, lecture schedule, class timetable, and check-in management as well as other small projects.</li>
                    <li>Designing and managing the school's domain, hosting, websites, and web apps on a WordPress platform.</li>
                    <li>Data analyst for school projects.</li>
                    <li>Planning, managing, and organizing class curriculums, examinations, competitions, events, and activities with a consideration of levels of students.</li>
                    <li>Planning enrollment, hiring English-speaker teachers, and teaching plans for the school English Center.</li>
                    <li>Creating study games on Articulate Storyline and PowerPoint.</li>
                    <li>Creating videos and images for promotion, advertisement, and events.</li>
                    <li>Managing the student uniforms warehouse.</li>
                    <li>Managing timekeeping reports.</li>
                </div>
            </>
        )
    }

    const handleUSLIModalOpen = () => {
        setIsModalOpen(true);
        setModalContent(
            <>
                <h2 style={{textAlign: 'center'}}>United States Liability Insurance - USA</h2>
                <h3 style={{textAlign: 'center'}}>Underwriting Assistant - Intern</h3>
                <p style={{textAlign: 'center', marginBottom: '10px'}}>March 2023 - December 2023</p>
                <hr />
                <div style={{marginTop: '10px', textAlign: 'justify', lineHeight: '24px'}}>
                    <li>Working closely with insurance agents and brokers in the binding of insurance, servicing of policies, and review/follow-up of underwriting information.</li>
                    <li>Reviewing and handling all customer inquiries within the service promise, focusing on quality and efficiency.</li>
                    <li>Working collaboratively with multiple departments to ensure the best possible outcome for all inquiries while minimizing touches and providing excellent customer service.</li>
                    <li>Evaluating applications, web search results, and business quoted via the web.</li>
                    <li>Working within the underwriting authority and obtaining underwriter approval when necessary.</li>
                    <li>Strengthening customer relationships by providing service through email communication.</li>
                    <li>Applying critical thinking and underwriting mindset to all accounts.</li>
                </div>
            </>
        )
    }

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <section id="journey" className="section">
            <table style={{borderCollapse: 'collapse', marginTop: '60px'}}>
                <thead>
                    <th className="th-left"></th>
                    <th className="th-right"></th>
                </thead>
                <tbody>
                    <tr>
                        <td className="td-left" rowSpan={4}>
                            <h2 onClick={handleCollegeModalOpen}><div className="coi-img"></div>The College of Idaho</h2>
                            <h3>IT Intern</h3>
                            <p style={{fontSize: '14px'}}>02/2024 - 05/2024</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="td-right">
                            <h4><a href="https://github.com/hudsonletuan/yotes-marketplace/" target="_blank">Yotes Marketplace Web Application</a></h4>
                            <p style={{fontSize: '14px'}}>04/2024 - Now</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="td-right">
                            <h4>Payroll System Management Web Application</h4>
                            <p style={{fontSize: '14px'}}>04/2024 - Now</p>
                        </td>
                    </tr>
                    <tr>
                        <td><h1 style={{opacity: 0}}>&nbsp;</h1></td>
                    </tr>
                    <tr>
                        <td rowSpan={5} className="td-left">
                            <h2 onClick={handleUSLIModalOpen}><div className="usli-img"></div>United States Liability Insurance</h2>
                            <h3>Underwriting Assistant - Intern</h3>
                            <p style={{fontSize: '14px'}}>03/2023 - 12/2023</p>
                        </td>
                        <td className="td-right">
                            <h4><a href="https://chatbot.tuanle.top/" target="_blank">Chatbot OpenAI Web Application</a></h4>
                            <p style={{fontSize: '14px'}}>01/2024 - 03/2024</p>
                        </td>
                    </tr>
                    
                    <tr>
                        <td className="td-right">
                            <h4><a href="https://github.com/hudsonletuan/realtime-face-recognition" target="_blank">Real-time Face Recognition Application</a></h4>
                            <p style={{fontSize: '14px'}}>01/2024 - 01/2024</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="td-right">
                            <h4><a href="https://tuanle-hr.azurewebsites.net/" target="_blank">Human Resources Management Web Application</a></h4>
                            <p style={{fontSize: '14px'}}>11/2023 - 03/2024 <span><i>(Continue Developing)</i></span></p>
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={3} className="td-right">
                            <h4>Second Major in Computer Science</h4>
                            <p style={{fontSize: '14px'}}>01/2023</p>
                        </td>
                    </tr>
                    <tr>
                        <td><h1 style={{opacity: 0}}>&nbsp;</h1></td>
                    </tr>
                    <tr>
                        <td style={{borderRight: 'solid 5px #212529'}}><h1 style={{opacity: 0}}>&nbsp;</h1></td>
                    </tr>
                    <tr>
                        <td className="td-left" rowSpan={5}>
                            <h2 onClick={handlePhoenixModalOpen}><div className="phoenix-img"></div>Phoenix High Quality School</h2>
                            <h3>Office Specialist</h3>
                            <p style={{fontSize: '14px'}}>07/2020 - 08/2021</p>
                        </td>
                        <td className="td-right">
                            <h4>Specialization in Data Science</h4>
                            <p style={{fontSize: '14px'}}>08/2021</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="td-right">
                            <h4>First Major in Business Administration & Management</h4>
                            <p style={{fontSize: '14px'}}>08/2020</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="td-right">
                            <h4>Phoenix HQ School Website and Learning Management System on Wordpress</h4>
                            <p style={{fontSize: '14px'}}>02/2021 - 08/2021</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="td-right">
                            <h4>HRM, Payroll, Warehouse Management Application, Online Class Schedule System</h4>
                            <p style={{fontSize: '14px'}}>09/2020 - 01/2021</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h1 style={{opacity: 0}}>&nbsp;</h1>
                        </td>
                    </tr>
                    <tr>
                        <td style={{borderRight: 'solid 5px #212529'}}></td>
                        <td className="td-right">
                            <h4>United World College</h4>
                            <p style={{fontSize: '14px'}}>08/2018 - 05/2020</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Modal isOpen={isModalOpen} onClose={handleModalClose}>
                <p>{modalContent}</p>
            </Modal>
        </section>
    );
};

export default Journey;
