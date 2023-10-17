# Primera Preentrega Entrega

## Table of Contents

1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Collaboration](#collaboration)

---

## General Info

Sitio web creado para el curso de "Backend" en Coderhouse
</br>
Este sitio nació con la idea de hacer una tienda Ecommerce para productos.
</br>
Ramas de trabajo: El mismo cuenta con dos ramas de trabajo: main (donde se aloja el proyecto final) y en la rama V.01 donde se trabajan las updates y fix.
</br>

### Entrega 0.4: Primera Preentrega

Desarrollar el servidor basado en Node.JS y express, que escuche en el puerto 8080 y disponga de dos grupos de rutas: /products y /carts.
Dichos endpoints estarán implementados con el router de express, con las siguientes especificaciones.

<li>Para el manejo de productos, el cual tendrá su router en /api/products/ , configurar las siguientes rutas:</li>

1. La ruta raíz GET / deberá listar todos los productos de la base. (Incluyendo la limitación ?limit del desafío anterior
2. La ruta GET /:pid deberá traer sólo el producto con el id proporcionado
3. La ruta raíz POST / deberá agregar un nuevo producto con los campos:

   - id: Number/String (A tu elección, el id NO se manda desde body, se autogenera como lo hemos visto desde los primeros entregables, asegurando que NUNCA se repetirán los ids en el archivo.
   - title:String,
   - description:String
   - code:String
   - price:Number
   - status:Boolean
   - stock:Number
   - category:String
   - thumbnails:Array de Strings que contenga las rutas donde están almacenadas las imágenes referentes a dicho producto

4. Status es true por defecto.
5. Todos los campos son obligatorios, a excepción de thumbnails
   La ruta PUT /:pid deberá tomar un producto y actualizarlo por los campos enviados desde body. NUNCA se debe actualizar o eliminar el id al momento de hacer dicha actualización.
6. La ruta DELETE /:pid deberá eliminar el producto con el pid indicado.
7. Para el carrito, el cual tendrá su router en /api/carts/, configurar dos rutas:
8. La ruta raíz POST / deberá crear un nuevo carrito con la siguiente estructura:
   - Id:Number/String (A tu elección, de igual manera como con los productos, debes asegurar que nunca se dupliquen los ids y que este se autogenere).
   - products: Array que contendrá objetos que representen cada producto
9. La ruta GET /:cid deberá listar los productos que pertenezcan al carrito con el parámetro cid proporcionados.

10. La ruta POST /:cid/product/:pid deberá agregar el producto al arreglo “products” del carrito seleccionado, agregándose como un objeto bajo el siguiente formato:

- product: SÓLO DEBE CONTENER EL ID DEL PRODUCTO (Es crucial que no agregues el producto completo)
- quantity: debe contener el número de ejemplares de dicho producto. El producto, de momento, se agregará de uno en uno.

11. Además, si un producto ya existente intenta agregarse al producto, incrementar el campo quantity de dicho producto.
12. La persistencia de la información se implementará utilizando el file system, donde los archivos “productos,json” y “carrito.json”, respaldan la información.
13. No es necesario realizar ninguna implementación visual, todo el flujo se puede realizar por Postman o por el cliente de tu preferencia.
<li>Para el carrito, el cual tendrá su router en /api/carts/, configurar dos rutas:</li>

14. La ruta raíz POST / deberá crear un nuevo carrito con la siguiente estructura:

    - Id:Number/String (A tu elección, de igual manera como con los productos, debes asegurar que nunca se dupliquen los ids y que este se autogenere).
    - products: Array que contendrá objetos que representen cada producto

15. La ruta GET /:cid deberá listar los productos que pertenezcan al carrito con el parámetro cid proporcionados.
16. La ruta POST /:cid/product/:pid deberá agregar el producto al arreglo “products” del carrito seleccionado, agregándose como un objeto bajo el siguiente formato:

    - product: SÓLO DEBE CONTENER EL ID DEL PRODUCTO (Es crucial que no agregues el producto completo)
    - quantity: debe contener el número de ejemplares de dicho producto. El producto, de momento, se agregará de uno en uno.

17. Además, si un producto ya existente intenta agregarse al producto, incrementar el campo quantity de dicho producto.
18. La persistencia de la información se implementará utilizando el file system, donde los archivos “productos,json” y “carrito.json”, respaldan la información.
    No es necesario realizar ninguna implementación visual, todo el flujo se puede realizar por Postman o por el cliente de tu preferencia.

---

## Technologies

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <h2>JS </h2>

</br>

<a href="https://expressjs.com/es/" target="_blank" rel="noreferrer"> <img src="https://geekflare.com/wp-content/uploads/2023/01/expressjs.png" alt="vite" width="190" height="40"/> </a> <h2>Express</h2>
</br>

<a href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> </a> <h2>V2.19.6</h2></p>
</br>

---

## Installation

Para instalar los paquetes usados en el proyecto puede utilizar los siguientes comandos.

```

$ git clone NicolasCaminos/ProductMannager.git
$ npm install
$ npm init -y
$ npm install express
$ npm install -g nodemon
$ npm install -g sass
$ npm install sweetalert2
$ npm run dev
$ npm run start

```

## Collaboration

<li>Nicolás Caminos</li>
</br>

---

<!-- ## FAQs

Puede visitar la web en: <a href="https://nicolascaminos.github.io/Infinity/" target="_blank" rel="noreferrer"> <img src="img/3.png" alt="Infinity" width="40" height="40"/> </a><a href="https://nicolascaminos.github.io/Infinity/" target="_blank" rel="noreferrer">https://nicolascaminos.github.io/Infinity/</a>

<br>
Muchas Gracias.
<br>

--- -->
