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

---

## Technologies

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <h2>JS </h2>

</br>

---

## Installation

Para instalar los paquetes usados en el proyecto puede utilizar los siguientes comandos.

```

$ git clone NicolasCaminos/ProductMannager.git
$ npm init -y
$ npm install


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
