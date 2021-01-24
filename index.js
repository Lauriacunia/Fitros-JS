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

// IMPUT BUSQUEDA
const normalize = (str) => {
	str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
	str = str.toLowerCase();
	return str;
};


// Copia segura de productos

const productosCopia = [...productos]
//console.log(productosCopia)


const form = document.forms[0];
const listado = document.getElementById('lista-de-productos');

const mostrarProductos = (productosAMostrar) => {
  
  listado.innerHTML = ""

  productosAMostrar.forEach(zapato => {
    listado.innerHTML += `
    <div class="contenedorProducto">
    <div class="foto"><img src="${zapato.img}"></div>
    <div class="titulo">${zapato.nombre}</div>
    </div>
    `;
  })

}

// INICIO

mostrarProductos(productosCopia)

// FILTRADOS

//IMPUT 
const input = document.querySelector("#filtro")
console.log(input)

input.oninput = () => {
	if (input.value.length !== 0) {
    console.log("ingresaste algo al input")
    let inputNormalizado = normalize(input.value);

    const productosFiltrados = productosCopia.filter( (producto) => {
      if((normalize(producto.nombre)).includes(inputNormalizado))return producto   
    })
 
    mostrarProductos(productosFiltrados)
  } else {
    mostrarProductos(productosCopia)
  }
};

//LOS SELECTS

form.onsubmit = (e) => {

  e.preventDefault()

  // Ver tipo elegido
  const tipo = document.querySelector("#tipo")
  console.log(tipo)

  const tipoElegido = tipo.value
  console.log(tipoElegido)


  // Ver color elegido
  const color = document.querySelector("#color")
  console.log(color)

  const colorElegido = color.value

  // Aplicar FILTROS 

  const productosFiltrados = productosCopia.filter( (producto) => {
    if(tipoElegido === "") return producto
    return producto.tipo === tipoElegido
  })
  .filter((producto) => {
    if(colorElegido === "") return producto
    return producto.color === colorElegido
  })

  // Chaquear si hay productos
  if(productosFiltrados.length === 0){
    console.log("arrayvacio")
    
    listado.innerHTML = ""
    listado.innerHTML += `
    <div>
        <h2>No Hay Productos Disponibles</h2>
    </div>
    `;
  }

  // Mostrar en HTML
  mostrarProductos(productosFiltrados)
}