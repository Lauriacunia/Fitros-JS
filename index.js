const productos = [
  {
    nombre: 'Zapato negro',
    tipo: 'zapato',
    color: 'negro',
    img: './img/taco-negro.jpg',
  },
  {
    nombre: 'Zapato azul',
    tipo: 'zapato',
    color: 'azul',
    img: './img/taco-azul.jpg',
  },
  {
    nombre: 'Bota negra',
    tipo: 'bota',
    color: 'negro',
    img: './img/bota-negra.jpg',
  },
  {
    nombre: 'Bota azul',
    tipo: 'bota',
    color: 'azul',
    img: './img/bota-azul.jpg',
  },
  {
    nombre: 'Zapato rojo',
    tipo: 'zapato',
    color: 'rojo',
    img: './img/zapato-rojo.jpg',
  },
];


const form = document.forms[0];
const listado = document.getElementById('lista-de-productos');


productos.forEach(zapato => {
  listado.innerHTML += `
  <div class="contenedorProducto">
  <div class="foto"><img src="${zapato.img}"></div>
  <div class="titulo">${zapato.nombre}</div>
  </div>
  `;
})
