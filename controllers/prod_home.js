import { clientServices } from "../services/client-services.js";

const prodHome = (nombre, precio,url__img, id, categoria) => {
    const bgimg = nombre.replace(/\s+/g, '');
    const card = document.createElement("div");
    card.classList.add("card");

    const contenido = 
    `
        <div class="card__img card__img--${bgimg} ">
            <style>
                .card__img--${bgimg} {
                background-image: url("${url__img}" );
                }
            </style>
        </div>
        <p class="nombre__prod">${nombre} </p>
        <p class="precio__prod">$ ${precio} </p>
        <button type="button" class="btn__ver">Ver producto</button>
    `;

    card.innerHTML = contenido;
    return card;
}

const electronic = document.querySelector("[data-contenedor]");
const home = document.querySelector("[data-home]");
const cloth = document.querySelector("[data-cloth]");


clientServices.listaProductos().then((data) => {
    data.forEach(({nombre, precio,url__img, id, categoria}) => {
        if(categoria == "Electronic" ){
            const nuevaCard = prodHome(nombre, precio, url__img, id, categoria);
            electronic.appendChild(nuevaCard);
        }else{
            if(categoria == "Home"){
                const nuevaCard = prodHome(nombre, precio, url__img, id, categoria);
                home.appendChild(nuevaCard);
            }else{
                const nuevaCard = prodHome(nombre, precio, url__img, id, categoria);
                cloth.appendChild(nuevaCard);
            }
        }
    });
}).catch((error) => alert("ocurrio un error pero no se por que"));