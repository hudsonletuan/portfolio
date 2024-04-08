# Portfolio - A React JS-TypeScript Project

<h3 align="center"> Deployed on AWS Amplify Hosting </h3>
<p align="center">
  <a href="https://portfolio.tuanle.top"><img height="30px" src="https://img.shields.io/badge/Live%20Demo-success.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxOTIgMTkyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiPjxjaXJjbGUgY3g9Ijk2IiBjeT0iOTYiIHI9Ijc0IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMTIiLz48ZWxsaXBzZSBjeD0iOTYiIGN5PSI5NiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEyIiByeD0iMzAiIHJ5PSI3NCIvPjxwYXRoIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEyIiBkPSJNMjggNzJoMTM2TTI4IDEyMGgxMzYiLz48L3N2Zz4%3D"></a>
</p>

Portfolio is a personal website that showcases my skills, experiences, and projects. It is built using Node.js, React JS, and TypeScript. There is a contact form on the site that uses API to deliver the content, and because CORS blocks this API request, a server-side proxy is built by using AWS Lambda Function and AWS API Gateway to bypass the CORS policy. Since this repo is connected to AWS, the API fetch function is already modified to be deployed properly to AWS Amplify. To run this project locally, some changes need to be made in the code. Instruction below.

Features
--------

* **Responsive design**: The website is designed to be responsive and adapt to different screen sizes and devices.
* **Smooth & Snap Scrolling**: The website has a scrolling mode that smoothly moves up and down to the sections with no gap.
* **Animations**: The website uses animations to enhance the user experience and make it more engaging. You can try the drag-and-drop features that I built.
* **Modal**: The website has a modal that displays additional information about my experiences and projects.
* **Contact form**: The website has a contact form that allows visitors to send me a message.

Technologies
-------------

* **Node.js**: A cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more.
* **React JS**: A JavaScript library for building user interfaces.
* **TypeScript**: A statically typed superset of JavaScript that adds type safety and other features.
* **API**: An application programming interface (API) is a way for two or more computer programs or components to communicate with each other.
#### (For Deployment)
* **AWS Amplify Hosting**: A fully managed CI/CD and hosting service for fast, secure, and reliable static and server-side rendered apps.
* **AWS Lambda**: A serverless, event-driven compute service that lets you run code for virtually any type of application or backend service without provisioning or managing servers.
* **AWS API Gateway**: A fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale.

Installation
------------

To run the project locally, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/hudsonletuan/portfolio.git
```
2. Navigate to the project directory:
```bash
cd portfolio
```
3. Install the dependencies:
```bash
npm install
```
4. Start the development server:
```bash
npm start
```
The website should now be running at `http://localhost:3000`.

API Request Locally
-------------------

Go to ```Contact.tsx```, you will see a sendMessage function that sends a POST request to an AWS API's base URL. On AWS, this URL acts like a proxy to send the contact form to the back end to bypass CORS policy. You only need to replace this API's base URL with your API's base URL which can be from any provider so it can make the direct call to the API server.

Usage
-----

The website consists of several sections:

* **About**: The section introduces myself and provides a brief overview of my skills and experiences as well as facts.
* **Projects**: The project section lists some of the projects that I have been working on recently that are deployed or available for open source.
* **Journey**: The experience section lists my jobs, education, and projects on a timeline.
* **Contact**: The contact section has a form that allows visitors to send me a message and other contacts such as email or mobile phone or LinkedIn.

Contributing
------------

Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request.

License
-------

This project is licensed under the MIT License. See the `LICENSE` file for details.

Contact
-------

* Email: [tuanquocle.contact@gmail.com](mailto:tuanquocle.contact@gmail.com) or [info@tuanle.top](info@tuanle.top)
* LinkedIn: [Tuan Le Quoc](https://www.linkedin.com/in/tuan-le-quoc-023198140/)
