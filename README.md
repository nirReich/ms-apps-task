# ms-apps-task
Home vassignment to prove programming abilities.

# Fullstack Image Gallery (React + Node.js)

## Overview

This project is a full-stack web application built with React.js on the frontend and Node.js with Express.js on the backend. It fetches images from the Pixabay API based on user-selected categories and implements pagination for navigating through the results. Users can also view detailed information about individual images in a modal.

## Technologies Used

**Frontend:**

* **React.js:** A JavaScript library for building user interfaces.
* **Vite:** A build tool that provides a fast and lean development experience for modern web projects.
* **Redux:** A predictable state container for JavaScript applications, used for managing the application's data and state.
* **Redux Thunk:** A middleware for Redux that allows writing asynchronous logic.
* **Material UI (MUI):** A popular React UI framework that provides pre-built and customizable components.
* **Yarn:** A package manager for JavaScript.
* `.env`: Used for managing environment variables (e.g., frontend server port).

**Backend:**

* **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine.
* **Express.js:** A minimal and flexible Node.js web application framework.
* **CORS:** Middleware for enabling Cross-Origin Resource Sharing.
* **Axios:** A promise-based HTTP client for making API requests.
* `dotenv`: A module to load environment variables from a `.env` file.
* **Yarn:** A package manager for JavaScript.
* `.env`: Used for managing environment variables (e.g., backend server port, Pixabay API key).

## Features

* **Image Display:** Renders the first 9 images fetched from the Pixabay API in a 3x3 grid.
* **Category Selection:** Allows users to select a category (e.g., animals, sports, work) via a modal. Upon selection, new images based on the chosen category are fetched and displayed.
* **Pagination:** Implements "Prev" and "Next" buttons to navigate through pages of image results fetched from the backend. The backend handles the pagination logic.
* **Image Details Modal:** Clicking on an image opens a modal displaying relevant details such as views, downloads, and collections.
* **Backend API:** A Node.js/Express.js REST API to handle requests for images from the Pixabay API, including:
    * Fetching images based on a category.
    * Pagination of results.
    * (Potentially) Sorting of images by ID or date.

## Setup Instructions

To get the frontend and backend applications running, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd <repository_name>
    ```
    *(Replace `<repository_url>` with the actual URL of your repository and `<repository_name>` with the name of the cloned directory.)*

2.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```

3.  **Install frontend dependencies and run the development server:**
    ```bash
    yarn install
    yarn dev
    ```
    *This command will install all necessary Node.js modules for the frontend and then start the development server. You will likely see an address (e.g., `http://localhost:3000`) where the frontend application is running.*

4.  **Open a new terminal window or tab.**

5.  **Navigate to the backend directory:**
    ```bash
    cd ../backend
    ```

6.  **Install backend dependencies and run the development server:**
    ```bash
    yarn install
    yarn dev
    ```
    *This command will install all necessary Node.js modules for the backend and then start the development server. You will likely see an address (e.g., `http://localhost:5000`) where the backend API is running.*

**Summary of Commands:**

```bash
# Clone the repository
git clone <repository_url>
cd <repository_name>

# Frontend setup
cd frontend
yarn install
yarn dev

# Backend setup (in a new terminal)
cd ../backend
yarn install
yarn dev
