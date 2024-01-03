import { clientServices } from "../services/client-services.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const url = document.querySelector("[data-url]").value;
    const desc = document.querySelector("[data-desc]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const id = uuid.v4();
    // console.log(nombre, precio, url, desc, categoria);
    clientServices.nuevoProducto(nombre,precio, url, desc, categoria).then((respuesta) => {
        window.location.href = "../screens/registro_completado.html";
    }).catch(err => console.log(err));
});