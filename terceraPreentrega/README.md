# ProductMannager

---

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

### Entrega 0.1: Clases con ECMAScript y ECMAScript avanzado.

<li>Realizar una clase “ProductManager” que gestione un conjunto de productos.</li>
<li>Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío.</li>
<li>Cada producto que gestione debe contar con las propiedades: title (nombre del producto),description (descripción del producto), price (precio), thumbnail (ruta de imagen), code (código identificador), stock (número de piezas disponibles) </li>
<li>Debe contar con un método “addProduct” el cual agregará un producto al arreglo de productos inicial. 
</br>

1. Validar que no se repita el campo “code” y que todos los campos sean obligatorios
2. Al agregarlo, debe crearse con un id autoincrementable

</li>
<li>Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id
</br>

1. En caso de no coincidir ningún id, mostrar en consola un error “Not found”
</li>
</br>

### Entrega 0.2: Manejo de archivos en JavaScript.

<li>Se creará una instancia de la clase “ProductManager”
<li>Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
<li>Se llamará al método “addProduct” con los campos:

- title: “producto prueba”
- description:”Este es un producto prueba”
- price:200,
- thumbnail:”Sin imagen”
- code:”abc123”,
- stock:25
El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
<li>Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
<li>Se llamará al método “getProductById” y se corroborará que devuelva el producto con el id especificado, en caso de no existir, debe arrojar un error.
<li>Se llamará al método “updateProduct” y se intentará cambiar un campo de algún producto, se evaluará que no se elimine el id y que sí se haya hecho la actualización.
<li>Se llamará al método “deleteProduct”, se evaluará que realmente se elimine el producto o que arroje un error en caso de no existir.

### Entrega 0.3: Servidores con express

Desarrollar un servidor basado en express donde podamos hacer consultas a nuestro archivo de productos.
</br>

<li>Se instalarán las dependencias a partir del comando npm install </li>
<li>Se echará a andar el servidor </li>
<li>Se revisará que el archivo YA CUENTE CON AL MENOS DIEZ PRODUCTOS CREADOS al momento de su entrega, es importante para que los tutores no tengan que crear los productos por sí mismos, y así agilizar el proceso de tu evaluación.</li>
<li>Se corroborará que el servidor esté corriendo en el puerto 8080.</li>
<li>Se mandará a llamar desde el navegador a la url http://localhost:8080/products sin query, eso debe devolver todos los 10 productos.</li>
<li>Se mandará a llamar desde el navegador a la url http://localhost:8080/products?limit=5 , eso debe devolver sólo los primeros 5 de los 10 productos.</li>
<li>Se mandará a llamar desde el navegador a la url http://localhost:8080/products/2, eso debe devolver sólo el producto con id=2.</li>
<li>Se mandará a llamar desde el navegador a la url http://localhost:8080/products/34123123, al no existir el id del producto, debe devolver un objeto con un error indicando que el producto no existe.</li>

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
$ npm init -y
$ npm install
$ npm install express
$ npm install -g nodemon
$ npm install -g sass
$ npm install sweetalert2

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
