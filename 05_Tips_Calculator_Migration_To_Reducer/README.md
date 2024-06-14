# Tips Calculator - Migration to useReducer

Este repositorio contiene una aplicación web que permite a los usuarios calcular el total de su cuenta en un restaurante, incluyendo las órdenes seleccionadas y las propinas que deseen dejar. La aplicación está desarrollada con **React**, **TypeScript**, **Vite** y **Tailwind Css**, y hace un uso extensivo de hooks para gestionar el estado de las órdenes y el porcentaje de propinas. 

El proyecto ha sido migrado para utilizar **`useReducer`** en lugar de un custom hook para gestionar todas las acciones del carrito, controlando de manera eficiente el estado y las acciones.

## Características

- **Grid Dinámico**: Visualización interactiva de las guitarras disponibles.
- **Gestión del Carrito**: Añadir, quitar, incrementar, disminuir y vaciar el carrito.
- **useReducer**: Control exhaustivo del estado y las acciones del carrito.
- **React.js**: Interfaz de usuario moderna y reactiva.
- **TypeScript**: Tipado estático para mayor robustez y mantenibilidad del código.
- **TailwindCss**: Tipado estático para mayor robustez y mantenibilidad del código.

## Tecnologías Utilizadas

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**

## Instalación

1. Clonar el repositorio:
    ```bash
    git clone https://github.com/Rafael-Alvarez-Calvo/react-ts-course-udemy.git
    cd 05_Tips_Calculator_Migration_To_Reducer
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


## Deployment

El proyecto está subido a la plataforma de Netlify

https://fanciful-moonbeam-74ca0b.netlify.app