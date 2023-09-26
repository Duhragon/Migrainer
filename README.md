# Migrainer App

## Description

Migrainer is a web application designed to help individuals track and manage migraine episodes. This app provides users with a user-friendly platform to record their migraine symptoms, triggers, and treatments. It also offers insightful visualizations and analytics to help users gain better insights into their migraine patterns.

Key Features:

- Easily log migraine episodes with details such as date, time, symptoms, and pain intensity.
- Identify potential migraine triggers through informative charts to understand migraine trends.
- User-friendly and intuitive interface for a seamless experience.

Migrainer aims to empower individuals living with migraines to take control of their condition by providing valuable insights.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    cd Migrainer
    ```

2.  Navigate to the client directory:

    ```
    npm install
    ```

3.  Install client dependencies:

    ```
    npm install

    ```

4.  Navigate to the server directory:

    ```
    cd ../server
    ```

5.  Install server dependencies:

    ```
    npm install
    ```

6.  Return to the root directory:

    ```
    cd ..
    ```

7.  Change the API_URL in the index.js file in the client directory to:

    ```
    const API_URL = "http://localhost:8800";
    ```

8.  Set the client port to 3000 in vite.config.js.

9.  Start the development server:

    ```
    cd server
    npm run start
    ```

10. Start the development client :

        ```
        cd ../client
        npm run dev
        ```

    This will run the client and server concurrently, allowing you to develop and test your Migrainer app locally.

## Technologies Used

- Frontend: Vite, React, Redux, Axios
- Backend: Node.js, Express, MongoDB
- Authentication: JWT (JSON Web Tokens)
- Email Services: Nodemailer
- Server Hosting: Render.com

## Contributing

We welcome contributions from the community. If you'd like to contribute to Migrainer, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -m 'Description of your changes'`
4. Push to your forked repository: `git push origin feature-name`
5. Create a pull request to the `main` branch of the original repository.
6. We will review your changes and merge them if they align with the project's goals.

Thank you for contributing to Migrainer!
