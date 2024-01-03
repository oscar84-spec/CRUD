import { clientServices } from "../services/client-services.js";

const formulario = document.querySelector("[data-form]");

const obtenerInfo = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id === null){
        console.log("no existe");
    }

    const nombre = document.querySelector("[data-nombre__prod]");
    const descripcion = document.querySelector("[data-descripcion]");
    const categoria = document.querySelector("[data-categoria]");
    const urlImg = document.querySelector("[data-url]");
    const precio = document.querySelector("[data-precio__prod]");


    clientServices.verProducto(id).then((productos) => {
        nombre.value = productos.nombre;
        descripcion.value = productos.descripcion;
        categoria.value = productos.categoria;
        urlImg.value = productos.url__img;
        precio.value = productos.precio;
    });
};
obtenerInfo();

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const nombre = document.querySelector("[data-nombre__prod]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const urlImg = document.querySelector("[data-url]").value;
    const precio = document.querySelector("[data-precio__prod]").value;

    console.log("el nombre es: ",nombre, "la desc es: ", descripcion, "la cat es: ", categoria, "la url es: ",urlImg, "el precio es: ",precio);

    clientServices.actulizarProd(nombre, precio,urlImg,descripcion, categoria,id).then(() => {
        window.location.href = "../screens/Productos.html";
    });
});