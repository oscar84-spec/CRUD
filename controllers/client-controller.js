import { clientServices } from "../services/client-services.js";

const crearCard = (nombre, precio, url__img, id) => {
    // console.log(id);
    const bgimg = nombre.replace(/\s+/g, '');
    const card = document.createElement("div");
    card.classList.add("container__card");
    const contenido =
        `
        <div class="img__prod img__prod--${bgimg} ">
            <style>
                .img__prod--${bgimg} {
                    background-image: url("${url__img}" );
                }
            </style>
        </div>
        <h2 class="nombre__prod">${nombre} </h2>
        <p class="precio__prod">$${precio} </p>
        <a href="/screens/editar-producto.html?id=${id} " class="liink">
            <button type="button" class="ver" >Editar Producto</button>
        </a>
        <button type="button" class="eliminar" data-eliminar id="${id}">Elimnar</button>
    
    `;
    card.innerHTML = contenido;

    const btnEliminar = card.querySelector("[data-eliminar]");
    btnEliminar.addEventListener('click', () => {
        const id = btnEliminar.id;
        clientServices.eliminarProd(id).then( respuesta => {
            console.log(respuesta);
        }).catch( err => alert("ocurrio un error"));
    });
    // console.log(btnEliminar);
    return card;
    
};


const table = document.querySelector("[data-contenedor]");

clientServices.listaProductos().then((data) => {
    data.forEach(({nombre, precio,url__img, id}) => {
        // console.log(nombre, precio, url__img, id)
        const nuevaCard = crearCard(nombre, precio, url__img, id);
        table.appendChild(nuevaCard);
    });
}).catch((error) => alert("ocurrio un error pero no se por que"));