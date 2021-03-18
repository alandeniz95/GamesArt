document.addEventListener('DOMContentLoaded', () =>{
  fetchData()
});
const fetchData = async () =>{
  try {
    const res = await fetch('../data/dataBaseXbox.json');
    const data = await res.json();
    //console.log(data);
    pintarProductos(data);
  } catch (error) {
    console.log(error);
  }
}

const contenedorProductos = document.querySelector('#contenedor-productos');
const pintarProductos = (data) =>{
  const template = document.querySelector('#template-productos').content
  const fragment = document.createDocumentFragment();
  //console.log(template);
  data.forEach(producto => {
    //console.log(producto);
    template.querySelector('img').setAttribute('src', producto.img);
    template.querySelector('h5').textContent = producto.tittle;
    template.querySelector('h6').textContent = producto.marca;
    template.querySelector('p span').textContent = producto.precio;
    template.querySelector('.card_version').textContent = producto.version;
    template.querySelector('button').dataset.id = producto.id;


    const clone = template.cloneNode(true);
    fragment.appendChild(clone);   
  });
  contenedorProductos.appendChild(fragment);
}