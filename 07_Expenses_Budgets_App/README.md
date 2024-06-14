# Expense Manager

This repository contains an Expense Manager application built with React, TypeScript, Tailwind CSS, Vite, Context API, and useReducer. The application allows users to manage their budget, add expenses in different categories, edit expenses, and delete expenses, all while dynamically updating the global state managed by Context API. It also keeps track of the total expenses and available budget, even accounting for overspending.

## Features

- **Set Budget**: Define your total budget.
- **Add Expenses**: Add expenses in various categories.
- **Edit Expenses**: Modify existing expenses.
- **Delete Expenses**: Remove expenses as needed.
- **Dynamic Updates**: Real-time updates of totals and available budget.
- **Overspending Alert**: Alerts when expenses exceed the budget.

## Tecnologías Utilizadas

- **React (ContextAPI, useReducer)**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **react-calendar**
- **react-date-picker**
- **react-circular-progressbar**
- **react-swipeable-list**
- **uuid**

## Instalación

1. Clonar el repositorio:
    ```bash
    git clone https://github.com/Rafael-Alvarez-Calvo/react-ts-course-udemy.git
    cd 06_Expenses_Budgets_App
    ```

2. Instalar las dependencias:
    ```bash
    npm install
    # o
    yarn install
    ```

## Uso

1. Iniciar la aplicación:
    ```bash
    npm run dev
    # o
    yarn dev
    ```

## Project Structure

- **components**: Reusable components like budget form, expense list, and expense form.
- **context**: Context API implementation for global state management.
- **hooks**: Custom hooks for budget management logic.
- **pages**: Main pages of the application.
- **reducers**: Reducers for handling state changes.
- **utils**: Type definitions and utility functions.

## Deployment

El proyecto está subido a la plataforma de Netlify

https://rococo-cassata-2ac39c.netlify.app