const header = () => {
    const buscador = document.createElement("div");
    buscador.classList.add("menu__buscador");
    const contenido = 
    `
            <a href="/screens/Productos.html">
                <button type="button" class="menu__btnAdmin">Menú Administrador</button>
            </a>
            <div class="buscador__icon">
                <input type="search" name="buscador" id="buscador" class="buscador">
                <div class="icon icon--img"></div>
            </div>
        
    `;
    buscador.innerHTML = contenido;
    return buscador;
}

const contenedor = document.querySelector("[data-prod]");
const nuevoheader = header();
contenedor.appendChild(nuevoheader);