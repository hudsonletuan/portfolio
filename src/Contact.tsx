import React, { useEffect, useState } from "react";
import "./Contact.css";

const Contact: React.FC = () => {
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const nameInput = formData.get('name_input') as string;
        const emailInput = formData.get('email_input') as string;
        const phoneInput = formData.get('phone_input') as string;
        const messageInput = formData.get('message_input') as string;

        const text = `Portfolio\nName: ${nameInput}\nEmail: ${emailInput}\nPhone: ${phoneInput}\nMessage: ${messageInput}`;
        const token = process.env.REACT_APP_TOKEN;
        const chatId = process.env.REACT_APP_CHAT_ID;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        try {
            const response = await fetch('https://2ik2tcajo0.execute-api.us-east-2.amazonaws.com/apiTelegram', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name_input: nameInput,
                    email_input: emailInput,
                    phone_input: phoneInput,
                    message_input: messageInput,
                }),
            });
            if (response.ok) {
                setIsSuccess(true);
            } else {
                setIsError(true);
            }
        } catch (error) {
            setIsError(true);
        }
    };

    const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
        const form = event.currentTarget.closest('form') as HTMLFormElement;
        form.reset();
    };
    useEffect(() => {
        if (isSuccess) {
            const timer = setTimeout(() => {
                setIsSuccess(false);
                setIsError(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isSuccess]);

    return (
        <section id="contact" className="section">
            <body>
                <div className="background">
                    <div className="container">
                        <div className="screen">
                            <div className="screen-header">
                                <div className="screen-header-left">
                                    <div className="screen-header-button close"></div>
                                    <div className="screen-header-button maximize"></div>
                                    <div className="screen-header-button minimize"></div>
                                </div>
                                <div className="screen-header-right">
                                    <div className="screen-header-ellipsis"></div>
                                    <div className="screen-header-ellipsis"></div>
                                    <div className="screen-header-ellipsis"></div>
                                </div>
                            </div>
                            <div className="screen-body">
                                <div className="screen-body-item left">
                                    <div className="app-title">
                                        <div style={{display: 'flex', flexDirection: 'row'}}>
                                            <span style={{color: '#51d6ff', marginRight: '8px'}}>SEND ME</span><span>A MESSAGE</span>
                                        </div>
                                    </div>
                                    <div className="app-social">
                                        <div style={{display: 'flex', flexDirection: 'row'}}>
                                            <span style={{color: '#47FF53', marginRight: '8px'}}>SEE ME</span><span>ON</span>
                                        </div>
                                    </div>
                                    <div className="app-social-icons">
                                        <a href="https://github.com/hudsonletuan" target="_blank">
                                            <svg className="github-svg" viewBox="0 0 98 98" width="98" height="96" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff"/>
                                            </svg>
                                        </a>
                                        <a href="https://www.linkedin.com/in/tuan-le-quoc-023198140/" target="_blank">
                                            <svg className="linkedin-svg" height="49" viewBox="0 0 72 72" width="72" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd">
                                                <path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" fill="#007EBB"/><path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z" fill="#FFF"/></g>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="app-phonemail">
                                        <div style={{display: 'flex', flexDirection: 'row'}}>
                                            <span style={{color: '#FFEE56', marginRight: '8px'}}>CONTACT ME</span><span>AT</span>
                                        </div>
                                    </div>
                                    <div className="app-contact">
                                        <div className="app-contact-mails">
                                            <a href="mailto:tuanquocle.contact@gmail.com">
                                                <svg height="23" width="30" style={{margin: '0px 5px -4px 0px'}} xmlns="http://www.w3.org/2000/svg" viewBox="52 42 88 66">
                                                    <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"/>
                                                    <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"/>
                                                    <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"/>
                                                    <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92"/>
                                                    <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"/>
                                                </svg>
                                                tuanquocle.contact@gmail.com
                                            </a>
                                            <br/>
                                            <a className="ios_mail" href="mailto:info@tuanle.top">
                                                <svg style={{margin: '8px 5px -8px 0px'}}></svg>
                                                info@tuanle.top
                                            </a>
                                        </div>
                                        <div className="app-contact-phones">
                                            <a href="tel:+12083068980">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#fff"></rect><path d="M1.638,5.846H30.362c-.711-1.108-1.947-1.846-3.362-1.846H5c-1.414,0-2.65,.738-3.362,1.846Z" fill="#a62842"></path><path d="M2.03,7.692c-.008,.103-.03,.202-.03,.308v1.539H31v-1.539c0-.105-.022-.204-.03-.308H2.03Z" fill="#a62842"></path><path fill="#a62842" d="M2 11.385H31V13.231H2z"></path><path fill="#a62842" d="M2 15.077H31V16.923000000000002H2z"></path><path fill="#a62842" d="M1 18.769H31V20.615H1z"></path><path d="M1,24c0,.105,.023,.204,.031,.308H30.969c.008-.103,.031-.202,.031-.308v-1.539H1v1.539Z" fill="#a62842"></path><path d="M30.362,26.154H1.638c.711,1.108,1.947,1.846,3.362,1.846H27c1.414,0,2.65-.738,3.362-1.846Z" fill="#a62842"></path><path d="M5,4h11v12.923H1V8c0-2.208,1.792-4,4-4Z" fill="#102d5e"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path><path fill="#fff" d="M4.601 7.463L5.193 7.033 4.462 7.033 4.236 6.338 4.01 7.033 3.279 7.033 3.87 7.463 3.644 8.158 4.236 7.729 4.827 8.158 4.601 7.463z"></path><path fill="#fff" d="M7.58 7.463L8.172 7.033 7.441 7.033 7.215 6.338 6.989 7.033 6.258 7.033 6.849 7.463 6.623 8.158 7.215 7.729 7.806 8.158 7.58 7.463z"></path><path fill="#fff" d="M10.56 7.463L11.151 7.033 10.42 7.033 10.194 6.338 9.968 7.033 9.237 7.033 9.828 7.463 9.603 8.158 10.194 7.729 10.785 8.158 10.56 7.463z"></path><path fill="#fff" d="M6.066 9.283L6.658 8.854 5.927 8.854 5.701 8.158 5.475 8.854 4.744 8.854 5.335 9.283 5.109 9.979 5.701 9.549 6.292 9.979 6.066 9.283z"></path><path fill="#fff" d="M9.046 9.283L9.637 8.854 8.906 8.854 8.68 8.158 8.454 8.854 7.723 8.854 8.314 9.283 8.089 9.979 8.68 9.549 9.271 9.979 9.046 9.283z"></path><path fill="#fff" d="M12.025 9.283L12.616 8.854 11.885 8.854 11.659 8.158 11.433 8.854 10.702 8.854 11.294 9.283 11.068 9.979 11.659 9.549 12.251 9.979 12.025 9.283z"></path><path fill="#fff" d="M6.066 12.924L6.658 12.494 5.927 12.494 5.701 11.799 5.475 12.494 4.744 12.494 5.335 12.924 5.109 13.619 5.701 13.19 6.292 13.619 6.066 12.924z"></path><path fill="#fff" d="M9.046 12.924L9.637 12.494 8.906 12.494 8.68 11.799 8.454 12.494 7.723 12.494 8.314 12.924 8.089 13.619 8.68 13.19 9.271 13.619 9.046 12.924z"></path><path fill="#fff" d="M12.025 12.924L12.616 12.494 11.885 12.494 11.659 11.799 11.433 12.494 10.702 12.494 11.294 12.924 11.068 13.619 11.659 13.19 12.251 13.619 12.025 12.924z"></path><path fill="#fff" d="M13.539 7.463L14.13 7.033 13.399 7.033 13.173 6.338 12.947 7.033 12.216 7.033 12.808 7.463 12.582 8.158 13.173 7.729 13.765 8.158 13.539 7.463z"></path><path fill="#fff" d="M4.601 11.104L5.193 10.674 4.462 10.674 4.236 9.979 4.01 10.674 3.279 10.674 3.87 11.104 3.644 11.799 4.236 11.369 4.827 11.799 4.601 11.104z"></path><path fill="#fff" d="M7.58 11.104L8.172 10.674 7.441 10.674 7.215 9.979 6.989 10.674 6.258 10.674 6.849 11.104 6.623 11.799 7.215 11.369 7.806 11.799 7.58 11.104z"></path><path fill="#fff" d="M10.56 11.104L11.151 10.674 10.42 10.674 10.194 9.979 9.968 10.674 9.237 10.674 9.828 11.104 9.603 11.799 10.194 11.369 10.785 11.799 10.56 11.104z"></path><path fill="#fff" d="M13.539 11.104L14.13 10.674 13.399 10.674 13.173 9.979 12.947 10.674 12.216 10.674 12.808 11.104 12.582 11.799 13.173 11.369 13.765 11.799 13.539 11.104z"></path><path fill="#fff" d="M4.601 14.744L5.193 14.315 4.462 14.315 4.236 13.619 4.01 14.315 3.279 14.315 3.87 14.744 3.644 15.44 4.236 15.01 4.827 15.44 4.601 14.744z"></path><path fill="#fff" d="M7.58 14.744L8.172 14.315 7.441 14.315 7.215 13.619 6.989 14.315 6.258 14.315 6.849 14.744 6.623 15.44 7.215 15.01 7.806 15.44 7.58 14.744z"></path><path fill="#fff" d="M10.56 14.744L11.151 14.315 10.42 14.315 10.194 13.619 9.968 14.315 9.237 14.315 9.828 14.744 9.603 15.44 10.194 15.01 10.785 15.44 10.56 14.744z"></path><path fill="#fff" d="M13.539 14.744L14.13 14.315 13.399 14.315 13.173 13.619 12.947 14.315 12.216 14.315 12.808 14.744 12.582 15.44 13.173 15.01 13.765 15.44 13.539 14.744z"></path></svg>
                                                +1 208 306 8980
                                            </a>
                                            <br/>
                                            <a href="tel:+84925115610">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#c93728"></rect><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path><path fill="#ff5" d="M18.008 16.366L21.257 14.006 17.241 14.006 16 10.186 14.759 14.006 10.743 14.006 13.992 16.366 12.751 20.186 16 17.825 19.249 20.186 18.008 16.366z"></path></svg>
                                                +84 925 115 610
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="screen-body-item right">
                                    <form className="app-form" onSubmit={handleSubmit}>
                                        <div className="app-form-group">
                                            <input className="app-form-control" name="name_input" role="presentation" autoComplete="off" placeholder="NAME" />
                                        </div>
                                        <div className="app-form-group">
                                            <input className="app-form-control" name="email_input" role="presentation" autoComplete="off" type="email" placeholder="EMAIL" />
                                        </div>
                                        <div className="app-form-group">
                                            <input className="app-form-control" name="phone_input" role="presentation" autoComplete="off" placeholder="PHONE NUMBER" />
                                        </div>
                                        <div className="app-form-group message">
                                            <textarea className="app-form-control" name="message_input" role="presentation" autoComplete="off" placeholder="MESSAGE" />
                                        </div>
                                        <div className="app-form-group buttons">
                                            <button type="button" onClick={handleClear} style={{marginRight: '10px', paddingTop: '10px', paddingBottom: '15px'}} className="app-form-button">CLEAR
                                                <svg width="20px" height="auto" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                    <path d="M46.4375 -0.03125C46.269531 -0.0390625 46.097656 -0.0234375 45.9375 0C45.265625 0.09375 44.6875 0.421875 44.28125 1.03125L44.25 1.09375L44.21875 1.125L35.65625 17.21875C34.691406 16.859375 33.734375 16.648438 32.84375 16.625C31.882813 16.601563 30.976563 16.75 30.15625 17.09375C28.574219 17.753906 27.378906 19.046875 26.59375 20.6875C26.558594 20.738281 26.527344 20.789063 26.5 20.84375C26.496094 20.851563 26.503906 20.867188 26.5 20.875C26.488281 20.894531 26.476563 20.917969 26.46875 20.9375C26.457031 20.976563 26.445313 21.019531 26.4375 21.0625C25.894531 22.417969 25.269531 23.636719 24.5625 24.71875C24.554688 24.730469 24.539063 24.738281 24.53125 24.75C24.441406 24.828125 24.367188 24.925781 24.3125 25.03125C24.308594 25.039063 24.316406 25.054688 24.3125 25.0625C24.277344 25.113281 24.246094 25.164063 24.21875 25.21875C21.832031 28.636719 18.722656 30.695313 15.78125 31.96875C11.773438 33.703125 7.9375 33.886719 7.09375 33.8125C6.691406 33.773438 6.304688 33.976563 6.113281 34.332031C5.925781 34.6875 5.964844 35.125 6.21875 35.4375C17.613281 49.5 34.375 50 34.375 50C34.574219 50.003906 34.769531 49.949219 34.9375 49.84375C34.9375 49.84375 37.007813 48.53125 39.5 45.40625C41.371094 43.058594 43.503906 39.664063 45.34375 34.96875C45.355469 34.957031 45.363281 34.949219 45.375 34.9375C45.605469 34.722656 45.722656 34.410156 45.6875 34.09375C45.6875 34.082031 45.6875 34.074219 45.6875 34.0625C46.171875 32.753906 46.640625 31.378906 47.0625 29.875C47.078125 29.8125 47.089844 29.75 47.09375 29.6875C47.09375 29.675781 47.09375 29.667969 47.09375 29.65625C48.425781 26.21875 46.941406 22.433594 43.75 20.78125L49.9375 3.625L49.9375 3.59375L49.96875 3.5625C50.171875 2.851563 49.9375 2.167969 49.5625 1.625C49.207031 1.113281 48.6875 0.710938 48.0625 0.4375L48.0625 0.40625C48.042969 0.398438 48.019531 0.414063 48 0.40625C47.988281 0.402344 47.980469 0.378906 47.96875 0.375C47.480469 0.144531 46.945313 -0.0117188 46.4375 -0.03125 Z M 46.3125 2.0625C46.539063 2.027344 46.835938 2.027344 47.15625 2.1875L47.1875 2.21875L47.21875 2.21875C47.542969 2.347656 47.8125 2.566406 47.9375 2.75C48.0625 2.933594 48.027344 3.042969 48.03125 3.03125L41.9375 19.9375C41.203125 19.605469 40.695313 19.371094 39.65625 18.90625C38.882813 18.558594 38.148438 18.222656 37.5 17.9375L45.9375 2.15625C45.929688 2.164063 46.085938 2.097656 46.3125 2.0625 Z M 4 8C1.800781 8 0 9.800781 0 12C0 14.199219 1.800781 16 4 16C6.199219 16 8 14.199219 8 12C8 9.800781 6.199219 8 4 8 Z M 4 10C5.117188 10 6 10.882813 6 12C6 13.117188 5.117188 14 4 14C2.882813 14 2 13.117188 2 12C2 10.882813 2.882813 10 4 10 Z M 13 11C11.894531 11 11 11.894531 11 13C11 14.105469 11.894531 15 13 15C14.105469 15 15 14.105469 15 13C15 11.894531 14.105469 11 13 11 Z M 11.5 18C8.472656 18 6 20.472656 6 23.5C6 26.527344 8.472656 29 11.5 29C14.527344 29 17 26.527344 17 23.5C17 20.472656 14.527344 18 11.5 18 Z M 32.8125 18.625C33.507813 18.644531 34.269531 18.785156 35.125 19.125C35.144531 19.136719 35.167969 19.148438 35.1875 19.15625C35.414063 19.511719 35.839844 19.6875 36.25 19.59375C36.363281 19.640625 36.351563 19.636719 36.46875 19.6875C37.144531 19.980469 37.996094 20.339844 38.84375 20.71875C40.085938 21.273438 40.871094 21.613281 41.59375 21.9375C41.613281 21.960938 41.632813 21.980469 41.65625 22C41.871094 22.296875 42.230469 22.453125 42.59375 22.40625C42.605469 22.40625 42.613281 22.40625 42.625 22.40625C45.015625 23.5 46.070313 26.105469 45.25 28.625C44.855469 28.613281 44.554688 28.632813 43.8125 28.46875C43.257813 28.347656 42.71875 28.152344 42.3125 27.90625C41.90625 27.660156 41.671875 27.417969 41.5625 27.09375C41.476563 26.8125 41.269531 26.585938 40.996094 26.472656C40.726563 26.355469 40.417969 26.367188 40.15625 26.5C39.820313 26.667969 38.972656 26.605469 38.21875 26.21875C37.84375 26.027344 37.507813 25.757813 37.28125 25.53125C37.054688 25.304688 36.992188 25.089844 37 25.125C36.945313 24.832031 36.765625 24.578125 36.503906 24.433594C36.246094 24.289063 35.933594 24.269531 35.65625 24.375C35.628906 24.386719 35.296875 24.417969 34.90625 24.34375C34.515625 24.269531 34.0625 24.109375 33.625 23.90625C33.1875 23.703125 32.785156 23.457031 32.53125 23.25C32.277344 23.042969 32.253906 22.828125 32.28125 23.09375C32.214844 22.566406 31.75 22.179688 31.21875 22.21875C30.214844 22.3125 29.273438 21.574219 28.71875 21.09375C29.304688 20.105469 30.03125 19.316406 30.9375 18.9375C31.492188 18.707031 32.117188 18.605469 32.8125 18.625 Z M 11.5 20C13.445313 20 15 21.554688 15 23.5C15 25.445313 13.445313 27 11.5 27C9.554688 27 8 25.445313 8 23.5C8 21.554688 9.554688 20 11.5 20 Z M 27.8125 22.96875C28.507813 23.46875 29.472656 23.988281 30.625 24.09375C30.808594 24.363281 31.007813 24.582031 31.25 24.78125C31.683594 25.140625 32.21875 25.457031 32.78125 25.71875C33.34375 25.980469 33.933594 26.199219 34.53125 26.3125C34.839844 26.371094 35.15625 26.253906 35.46875 26.25C35.617188 26.476563 35.683594 26.777344 35.875 26.96875C36.28125 27.375 36.765625 27.71875 37.3125 28C38.125 28.417969 39.101563 28.5625 40.0625 28.4375C40.390625 28.929688 40.785156 29.34375 41.25 29.625C41.933594 30.035156 42.679688 30.285156 43.375 30.4375C43.863281 30.542969 44.308594 30.589844 44.71875 30.625C44.441406 31.523438 44.140625 32.367188 43.84375 33.1875C43.484375 33.175781 43.042969 33.15625 42.5625 33.0625C41.46875 32.851563 40.433594 32.367188 40 31.53125C39.765625 31.09375 39.246094 30.894531 38.78125 31.0625C38.285156 31.238281 37.386719 31.164063 36.625 30.8125C35.863281 30.460938 35.285156 29.851563 35.15625 29.40625C35.074219 29.136719 34.878906 28.914063 34.621094 28.796875C34.367188 28.675781 34.074219 28.671875 33.8125 28.78125C33.570313 28.882813 32.625 28.855469 31.84375 28.5C31.0625 28.144531 30.558594 27.546875 30.5 27.21875C30.449219 26.941406 30.285156 26.703125 30.046875 26.554688C29.808594 26.40625 29.519531 26.363281 29.25 26.4375C28.304688 26.691406 27.566406 26.355469 26.96875 25.90625C26.761719 25.753906 26.609375 25.585938 26.46875 25.4375C26.953125 24.667969 27.402344 23.851563 27.8125 22.96875 Z M 25.3125 27.09375C25.460938 27.230469 25.601563 27.363281 25.78125 27.5C26.519531 28.054688 27.65625 28.449219 28.9375 28.375C29.402344 29.246094 30.15625 29.914063 31.03125 30.3125C31.894531 30.707031 32.816406 30.832031 33.71875 30.71875C34.21875 31.535156 34.914063 32.226563 35.78125 32.625C36.707031 33.050781 37.746094 33.160156 38.75 33C39.683594 34.167969 41.011719 34.804688 42.1875 35.03125C42.5 35.089844 42.808594 35.128906 43.09375 35.15625C41.429688 39.175781 39.566406 42.117188 37.9375 44.15625C35.851563 46.769531 34.441406 47.757813 34.125 47.96875C33.769531 47.953125 31.164063 47.769531 27.5 46.75C27.800781 46.554688 28.125 46.351563 28.46875 46.09375C30.136719 44.84375 32.320313 42.804688 34.4375 39.65625C34.660156 39.332031 34.675781 38.910156 34.472656 38.574219C34.269531 38.234375 33.890625 38.046875 33.5 38.09375C33.207031 38.125 32.945313 38.285156 32.78125 38.53125C30.796875 41.484375 28.753906 43.375 27.25 44.5C25.820313 45.570313 24.992188 45.902344 24.90625 45.9375C22.65625 45.144531 20.164063 44.058594 17.625 42.53125C17.992188 42.410156 18.382813 42.25 18.8125 42.0625C20.710938 41.234375 23.25 39.6875 25.84375 36.78125C26.15625 36.46875 26.226563 35.988281 26.019531 35.601563C25.808594 35.210938 25.371094 35.003906 24.9375 35.09375C24.707031 35.132813 24.496094 35.257813 24.34375 35.4375C21.9375 38.128906 19.683594 39.496094 18.03125 40.21875C16.378906 40.941406 15.4375 41 15.4375 41C15.394531 41.007813 15.351563 41.019531 15.3125 41.03125C13.238281 39.570313 11.167969 37.792969 9.21875 35.65625C11.121094 35.507813 13.570313 35.121094 16.59375 33.8125C19.578125 32.519531 22.761719 30.410156 25.3125 27.09375Z"/>
                                                </svg>
                                            </button>
                                            <button type="submit" style={{paddingTop: '10px', paddingBottom: '15px'}} className="app-form-button">SEND 
                                                <svg height="auto" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                                                    viewBox="0 0 491.022 491.022" xmlSpace="preserve">
                                                    <g>
                                                        <g>
                                                            <path d="M490.916,13.991c-0.213-1.173-0.64-2.347-1.28-3.307c-0.107-0.213-0.213-0.533-0.32-0.747
                                                                c-0.107-0.213-0.32-0.32-0.533-0.533c-0.427-0.533-0.96-1.067-1.493-1.493c-0.427-0.32-0.853-0.64-1.28-0.96
                                                                c-0.213-0.107-0.32-0.32-0.533-0.427c-0.32-0.107-0.747-0.32-1.173-0.427c-0.533-0.213-1.067-0.427-1.6-0.533
                                                                c-0.64-0.107-1.28-0.213-1.92-0.213c-0.533,0-1.067,0-1.6,0c-0.747,0.107-1.493,0.32-2.133,0.533
                                                                c-0.32,0.107-0.747,0.107-1.067,0.213L6.436,209.085c-5.44,2.347-7.893,8.64-5.547,14.08c1.067,2.347,2.88,4.373,5.227,5.44
                                                                l175.36,82.453v163.947c0,5.867,4.8,10.667,10.667,10.667c3.733,0,7.147-1.92,9.067-5.12l74.133-120.533l114.56,60.373
                                                                c5.227,2.773,11.627,0.747,14.4-4.48c0.427-0.853,0.747-1.813,0.96-2.667l85.547-394.987c0-0.213,0-0.427,0-0.64
                                                                c0.107-0.64,0.107-1.173,0.213-1.707C491.022,15.271,491.022,14.631,490.916,13.991z M190.009,291.324L36.836,219.218
                                                                L433.209,48.124L190.009,291.324z M202.809,437.138V321.831l53.653,28.267L202.809,437.138z M387.449,394.898l-100.8-53.013
                                                                l-18.133-11.2l-0.747,1.28l-57.707-30.4L462.116,49.298L387.449,394.898z"/>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="app-form-group notifications">
                                            {isSuccess && <div className="success" style={{color: '#FFFFFF', textAlign: 'right'}}>Message sent successfully!</div>}
                                            {isError && <div className="error" style={{color: '#FFFFFF', textAlign: 'right'}}>Message failed to send!</div>}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </section>
    );
};

export default Contact;
