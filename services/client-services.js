
const listaProductos = () => fetch("http://localhost:3000/productos").then( (respuesta) => respuesta.json());

const nuevoProducto = (nombre, precio, url__img, descripcion, categoria) =>{
    return fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre, precio, url__img, descripcion, categoria, id: uuid.v4()})
    });
};

const eliminarProd = (id) => {
    console.log("eliminar a: ", id);
    return fetch(`http://localhost:3000/productos/${id} `, {
        method: "DELETE"
    });
};

const verProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`).then( (respuesta) => respuesta.json());
}

const actulizarProd = (nombre, precio,url__img,descripcion, categoria,id) => {
    return fetch(`http://localhost:3000/productos/${id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre, precio,url__img, descripcion,categoria})
    })
    .then((respuesta) => respuesta)
    .catch(err => console.log(err));
};

export const clientServices = {
    listaProductos,
    nuevoProducto,
    eliminarProd,
    verProducto,
    actulizarProd
};