# E-Commerce

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node Version](https://img.shields.io/badge/node.js-14.x%20|%2016.x%20|%2018.x-brightgreen)](https://nodejs.org/en/download/)
 <a href="https://github.com/Forlino">
    <img src="https://github.com/Forlino" alt="Languages Count"/>
  </a>



## Descripcion
Este proyecto es un sitio web de comercio electrónico completo, desarrollado con la pila MERN (MongoDB, Express.js, React y Node.js). Ofrece una plataforma robusta para que los usuarios exploren productos, agreguen artículos a su carrito y completen compras de forma segura. La aplicación presenta un diseño moderno y responsivo, y utiliza Cloudinary para una gestión eficiente de imágenes.



## Features
- **User Authentication and Authorization**: Secure login and registration using JWT.
- **Product Management**: CRUD operations for products, with multiple images upload via Cloudinary.
- **Shopping Cart**: Add, remove, and update products in the cart.
- **Checkout Process**: Seamless order placement with payment integration.
- **Order Management**: Track order status and history.
- **Admin Dashboard**: Manage products, orders, and users with an intuitive interface.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Search and Filter**: Easily find products with search and filtering capabilities.
- **Reviews and Ratings**: Users can leave reviews and ratings for products.




## Lenguajes utilizados
- **Frontend**: React.js, Redux, React Router, Axios, Bootstrap
- **Backend**: Node.js, Express.js, JWT for authentication
- **Database**: MongoDB, Mongoose
- **Hosting de imagenes**: Cloudinary
- **Pagos**: [A eleccion del usuario ejemplo: Stripe]
- **Control de versiones**: Git

## Instalacion y setup


1. **Clonar el repositorio**:
    ``` bash
    git clone https://github.com/Forlino
    cd E-COMMERCE
    ```

2. **Instalar dependencias Backend**:
    ``` bash
    cd backend
    npm install
    ```

3. **Instalar dependencias Frontend**:
    ```bash
    cd ../frontend
    npm install
    ```

4. **Start the development servers**:
    - Backend server:
      ```bash
      cd ../backend
      npm start
      ```
      - Frontend server:
      ```bash
      cd ../frontend
      npm run dev
      ```
## Configurar entorno

- Crea un archivo **.env** en la carpeta backend y agrega lo siguiente
- Essential Variables
- PORT=4000
- MONGO_URI 
- STRIPE_API_KEY
- STRIPE_SECERET_KEY
- JWT_SECERET
- JWT_LIFETIME
- JWT_COOKIE_EXPIRE
- SMPT_SERVICE
- SMPT_MAIL
- SMPT_PASSWORD
- SMPT_HOST
- SMPT_PORT
- CLOUDINARY_NAME
- CLOUDINARY_API_KEY
- CLOUDINARY_API_SECRET
Reemplaza cada seccion por tus datos


## Uso

1. Abra su navegador y navegue a **http://localhost:5173** para acceder a la interfaz.
2. Utilice Postman o cualquier cliente API para interactuar con el backend a través de **http://localhost:4000**.


## Licencia

Este proyecto está licenciado bajo la licencia MIT: consulte el archivo [LICENCIA](LICENCIA) para obtener más detalles.



