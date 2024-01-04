const listaProductos = () =>
  fetch(
    "https://api-json-server-3e7tmvxao-oscar84-spec.vercel.app/productos"
  ).then((respuesta) => respuesta.json());

const nuevoProducto = (nombre, precio, url__img, descripcion, categoria) => {
  return fetch("https://api-json-server-five.vercel.app/productos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre,
      precio,
      url__img,
      descripcion,
      categoria,
      id: uuid.v4(),
    }),
  });
};

const eliminarProd = (id) => {
  console.log("eliminar a: ", id);
  return fetch(`https://api-json-server-five.vercel.app/productos/${id} `, {
    method: "DELETE",
  });
};

const verProducto = (id) => {
  return fetch(`https://api-json-server-five.vercel.app/productos/${id}`).then(
    (respuesta) => respuesta.json()
  );
};

const actulizarProd = (
  nombre,
  precio,
  url__img,
  descripcion,
  categoria,
  id
) => {
  return fetch(`https://api-json-server-five.vercel.app/productos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, precio, url__img, descripcion, categoria }),
  })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err));
};

export const clientServices = {
  listaProductos,
  nuevoProducto,
  eliminarProd,
  verProducto,
  actulizarProd,
};
