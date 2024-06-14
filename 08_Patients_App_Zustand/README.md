# Patient Registration and Appointment Management App

This repository contains an application for registering patients via a form with corresponding validations, and for managing patient appointments. The application is built with React, TypeScript, Tailwind CSS, Vite, react-hook-form, Zustand, and react-toastify.

## Features

- **Patient Registration**: Register patients with a form that includes validation.
- **Appointment Management**: Create, edit, and delete patient appointments.
- **Form Validation**: Utilize react-hook-form for form handling and validation.
- **Global State Management**: Manage state using Zustand.
- **Notifications**: Display notifications using react-toastify.

## Technologies Used

- **React**
- **TypeScript**
- **Zustand**
- **Vite**
- **Tailwind CSS**
- **react-hook-form**
- **react-toastify**
- **uuid**

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/patient-registration-app.git
    cd 07_Patients_App_Zustand
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

## Usage

1. Start the application:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

2. Open in your browser:
    ```
    http://localhost:3000
    ```

## Project Structure

- **components**: Reusable components like appointment list, appointment form, and patient form.
- **context**: Context API implementation for global state management.
- **hooks**: Custom hooks for patient management logic.
- **pages**: Main pages of the application.
- **store**: Zustand store for managing state.
- **utils**: Type definitions and utility functions.

## Deployment

El proyecto está subido a la plataforma de Netlify

https://remarkable-heliotrope-5c9c97.netlify.app