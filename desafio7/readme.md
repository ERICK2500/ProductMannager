# Segunda Preentrega

## Table of Contents

1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Collaboration](#collaboration)

---

## General Info

Sitio web creado para el curso de "Backend" en Coderhouse.

Este sitio nació con la idea de hacer una tienda Ecommerce para productos.

Ramas de trabajo: El mismo cuenta con dos ramas de trabajo: main (donde se aloja el proyecto final) y en la rama V.01 donde se trabajan las updates y fix.

### Entrega 0.1: Clases con ECMAScript y ECMAScript avanzado

1. Comprender el uso de una Base de Datos.
2. Comprender el modelo de bases de datos no relacionales.
3. Instalar MongoDB y setear una base de datos en MongoAtlas.
4. Conocer el lenguaje de consultas básico para realizar un CRUD en MongoDB.
5. Instalar Mongoose con npm en tu proyecto de Node.js.
6. Definir schemas y separar la lógica en una carpeta “models”.
7. Exportación de un modelo de Mongoose e importación para utilizarlo.
8. Saber hacer un CRUD con Mongoose en Node.js.

### Entrega 0.2: Manejo de archivos en JavaScript

- Se creará una instancia de la clase "ProductManager."
- Se llamará "getProducts" recién creada la instancia, debe devolver un arreglo vacío.
- Se llamará al método "addProduct" con los campos:
  - title: "producto prueba"
  - description: "Este es un producto prueba"
  - price: 200
  - thumbnail: "Sin imagen"
  - code: "abc123"
  - stock: 25
    El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE.
- Se llamará el método "getProducts" nuevamente, esta vez debe aparecer el producto recién agregado.
- Se llamará al método "getProductById" y se corroborará que devuelva el producto con el id especificado, en caso de no existir, debe arrojar un error.
- Se llamará al método "updateProduct" y se intentará cambiar un campo de algún producto, se evaluará que no se elimine el id y que sí se haya hecho la actualización.
- Se llamará al método "deleteProduct", se evaluará que realmente se elimine el producto o que arroje un error en caso de no existir.

### Entrega 0.3: Servidores con Express

Desarrollar un servidor basado en Express donde podamos hacer consultas a nuestro archivo de productos.

- Se instalarán las dependencias a partir del comando `npm install`.
- Se echará a andar el servidor.
- Se revisará que el archivo YA CUENTE CON AL MENOS DIEZ PRODUCTOS CREADOS al momento de su entrega, es importante para que los tutores no tengan que crear los productos por sí mismos, y así agilizar el proceso de tu evaluación.
- Se corroborará que el servidor esté corriendo en el puerto 8080.
- Se mandará a llamar desde el navegador a la URL <http://localhost:8080/products> sin query; eso debe devolver todos los 10 productos.
- Se mandará a llamar desde el navegador a la URL <http://localhost:8080/products?limit=5>; eso debe devolver sólo los primeros 5 de los 10 productos.
- Se mandará a llamar desde el navegador a la URL <http://localhost:8080/products/2>; eso debe devolver sólo el producto con id=2.
- Se mandará a llamar desde el navegador a la URL <http://localhost:8080/products/34123123>; al no existir el id del producto, debe devolver un objeto con un error indicando que el producto no existe.

### Entrega 0.4: Primera Preentrega

Desarrollar el servidor basado en Node.JS y Express, que escuche en el puerto 8080 y disponga de dos grupos de rutas: /products y /carts.

Dichos endpoints estarán implementados con el router de Express, con las siguientes especificaciones.

#### Para el manejo de productos

1. La ruta raíz GET / deberá listar todos los productos de la base (incluyendo la limitación ?limit del desafío anterior).
2. La ruta GET /:pid deberá traer solo el producto con el id proporcionado.
3. La ruta raíz POST / deberá agregar un nuevo producto con los campos:
   - id: Number/String (a tu elección, el id NO se manda desde el body, se autogenera como lo hemos visto desde los primeros entregables, asegurando que NUNCA se repetirán los ids en el archivo).
   - title: String,
   - description: String,
   - code: String,
   - price: Number,
   - status: Boolean,
   - stock: Number,
   - category: String,
   - thumbnails: Array de Strings que contenga las rutas donde están almacenadas las imágenes referentes a dicho producto.
4. Status es true por defecto.
5. Todos los campos son obligatorios, a excepción de thumbnails.
6. La ruta PUT /:pid deberá tomar un producto y actualizarlo por los campos enviados desde body. NUNCA se debe actualizar o eliminar el id al momento de hacer dicha actualización.
7. La ruta DELETE /:pid deberá eliminar el producto con el pid indicado.

#### Para el carrito

8. La ruta raíz POST / deberá crear un nuevo carrito con la siguiente estructura:
   - Id: Number/String (a tu elección, de igual manera como con los productos, debes asegurar que nunca se dupliquen los ids y que este se autogenere).
   - products: Array que contendrá objetos que representen cada producto.
9. La ruta GET /:cid deberá listar los productos que pertenezcan al carrito con el parámetro cid proporcionados.
10. La ruta POST /:cid/product/:pid deberá agregar el producto al arreglo "products" del carrito seleccionado, agregándose como un objeto bajo el siguiente formato:

- product: SÓLO DEBE CONTENER EL ID DEL PRODUCTO (Es crucial que no agregues el producto completo).
- quantity: Debe contener el número de ejemplares de dicho producto. El producto, de momento, se agregará de uno en uno.

11. Además, si un producto ya existente intenta agregarse al producto, incrementar el campo quantity de dicho producto.
12. La persistencia de la información se implementará utilizando el file system, donde los archivos "productos.json" y "carrito.json" respaldan la información.
13. No es necesario realizar ninguna implementación visual; todo el flujo se puede realizar por Postman o por el cliente de tu preferencia.

### Entrega 0.5: Websocket + Handlebars

Configurar nuestro proyecto para que trabaje con Handlebars y WebSocket.

- Se instalará y correrá el servidor en el puerto indicado.
- El servidor debe levantarse sin problema.
- Se abrirá la ruta raíz.
- Debe visualizarse el contenido de la vista index.handlebars.
- No se debe activar el WebSocket aún.
- Se buscará en la URL del navegador la ruta "/realtimeproducts".
- Se corroborará que el servidor haya conectado con el cliente; en la consola del servidor deberá mostrarse un mensaje de "cliente conectado".
- Se debe mostrar la lista de productos y se corroborará que se esté enviando desde WebSocket.

### Entrega 0.6: Primera Práctica Integradora

- Deberá contar con todas las vistas realizadas en el hands on lab, así también como las rutas de router para procesar el registro y el login. 
- Una vez completado el login, realizar la redirección directamente a la vista de productos.
- Agregar a la vista de productos un mensaje de bienvenida con los datos del usuario

- Agregar un sistema de roles, de manera que si colocamos en el login como correo adminCoder@coder.com, y la contraseña adminCod3r123, el usuario de la sesión además tenga un campo 
- Todos los usuarios que no sean admin deberán contar con un rol “usuario”.
Implementar botón de “logout” para destruir la sesión y redirigir a la vista de login

### Entrega 0.7: Refactor a nuestro login

- Al cargar el proyecto, éste deberá comenzar en la pantalla de login.
- Al no tener un usuario registrado aún, se procederá a hacer un registro, por lo que la pantalla de login debe tener un link de “regístrate”, el cual nos redireccione a la pantalla de registro. 
- Al registrarme con los datos solicitados, se revisará la contraseña guardada en la base de datos, cuidando que ésta esté correctamente hasheada.
- Se realizará el proceso de login con las mismas credenciales con las que se registró el usuario, corroborando que el login funcione correctamente y redirija a la pantalla principal.
- Además, la pantalla de login deberá contar con un botón “entrar con Github” el cual al hacer click nos permita entrar directamente a la página con los datos obtenidos de Github.
- Se corroborará en la base de datos que el nuevo usuario “creado con Github” cuente con un password vacío.

#### Skills para Clases

- Comprender el concepto de una clase.
- Definición de una clase.
- Creación de un Manager y comprensión de su funcionamiento.
- Comprender el concepto de un constructor, saber cuándo definir una clase con o sin constructor.
- Definición de propiedades para una clase usando `this`.
- Definición de métodos en una clase.
- Exportar e importar una clase entre diferentes archivos.

#### Skills para Express

- Saber definir una carpeta `src` para tu proyecto.
- Instalar Express con `npm`.
- Importar Express en nuestro archivo principal.
- Comprender el modelo request - response y aplicarlo en nuestra app.
- Poner a escuchar nuestro servidor en un puerto específico.
- Configurar Express para recibir JSON en las request.
- Manejo de `req.query`, `req.params` y `req.body`.

#### Skills para Router y Multer

- Comprender el concepto de Router.
- Comprender la arquitectura de carpetas y usar las carpetas "routes," "public," y "files."
- Definir un router de Express.
- Importar y exportar tu router correctamente.
- Utilizar el router como middleware a partir de `app.use`.
- Comprender la configuración de Multer.
- Exportar un uploader de Multer dentro de tu archivo `utils.js`.
- Usar Multer a partir de FormData.

#### Skills para Handlebars

- Comprender el uso de un motor de plantillas.
- Separar arquitectura con una carpeta "public" y "views."
- Setear nuestras primeras vistas en Handlebars.
- Uso de `{{}}` para definir elementos variables en la plantilla.
- Manejar el paso de información a la plantilla.
- Setear un router exclusivo para vistas.
- Importar CSS y JS desde la carpeta `public`.

#### Skills para MongoDB y Mongoose

- Comprender el uso de una Base de Datos.
- Comprender el modelo de bases de datos no relacionales.
- Instalar MongoDB y setear una base de datos en MongoAtlas.
- Conocer el lenguaje de consultas básico para realizar un CRUD en MongoDB.
- Instalar Mongoose con `npm` en tu proyecto de Node.js.
- Definir schemas y separar la lógica en una carpeta "models."
- Exportación de un modelo de Mongoose e importación para utilizarlo.
- Saber hacer un CRUD con Mongoose en Node.js.

### Segunda Preentrega: Mongoo Avanzado

#### Objetivos generales

- Contarás con Mongo como sistema de persistencia principal
- Tendrás definidos todos los endpoints para poder trabajar con productos y carritos.

#### Objetivos específicos

- Profesionalizar las consultas de productos con filtros, paginación y ordenamientos
- Profesionalizar la gestión de carrito para implementar los últimos conceptos vistos.

## Technologies

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <h2>JS </h2>

</br>

<a href="https://expressjs.com/es/" target="_blank" rel="noreferrer"> <img src="https://geekflare.com/wp-content/uploads/2023/01/expressjs.png" alt="vite" width="190" height="40"/> </a> <h2>Express</h2>
</br>

<a href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> </a> <h2>V2.19.6</h2></p>
</br>

## Installation

Para instalar los paquetes usados en el proyecto puedes utilizar los siguientes comandos:

```bash
git clone NicolasCaminos/ProductMannager.git
npm install
npm init -y
npm install express
npm install -g nodemon
npm install -g sass
npm install sweetalert2
npm install express express-handlebars
npm install socket.io
npm run dev
npm run start

```

## Collaboration

- Nicolás Caminos
  </br>

---

<!-- ## FAQs

Puede visitar la web en: <a href="https://nicolascaminos.github.io/Infinity/" target="_blank" rel="noreferrer"> <img src="img/3.png" alt="Infinity" width="40" height="40"/> </a><a href="https://nicolascaminos.github.io/Infinity/" target="_blank" rel="noreferrer">https://nicolascaminos.github.io/Infinity/</a>

<br>
Muchas Gracias.
<br>

--- -->
