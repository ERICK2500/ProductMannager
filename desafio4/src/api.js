function mostrarJSONEnPagina(jsonData) {
    const jsonDataElement = document.getElementById('json-data');
    const formattedData = JSON.stringify(jsonData, null, 2);
    jsonDataElement.textContent = formattedData;
}

document.addEventListener('DOMContentLoaded', () => {
    const datosFicticios = {

        title: "wdsdfdsfs",
        description: "fdsfsdfd",
        code: "ABCcoder.nicolas.fb11rew",
        price: "432",
        stock: "4",
        category: "fdsfsd",
        thumbnails: [
            "Sin imagen"
        ],
        "status": true,
        "id": 18

    };

    mostrarJSONEnPagina(datosFicticios);
});