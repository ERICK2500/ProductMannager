function mostrarJSONEnPagina(jsonData) {
    const jsonDataElement = document.getElementById('json-data');
    const formattedData = JSON.stringify(jsonData, null, 2);
    jsonDataElement.textContent = formattedData;
}

document.addEventListener('DOMContentLoaded', () => {
    const datosFicticios = {
        nombre: "Ejemplo",
        edad: 25,
        ciudad: "Ciudad Ejemplo"
    };

    mostrarJSONEnPagina(datosFicticios);
});