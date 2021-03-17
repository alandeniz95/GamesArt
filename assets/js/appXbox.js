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
    template.querySelector('button').dataset.id = producto.id;


    const clone = template.cloneNode(true);
    fragment.appendChild(clone);   
  });
  contenedorProductos.appendChild(fragment);
}

//Comienzo de info de productos

document.addEventListener('DOMContentLoaded', () =>{
  fetchDataInfo()
});
const fetchDataInfo = async () =>{
  try {
    const respInfo = await fetch('../data/dataBaseInfoX.json');
    const dataInfo = await respInfo.json();
    //console.log(data);
    pintarInfoProductos(dataInfo);
  } catch (error) {
    console.log(error);
  }
}

const contenedorProductosInfo = document.querySelector ('#info_productos');
const pintarInfoProductos = (dataInfo) =>{
  const modalInfo = document.querySelector('#info_productos').content
  const fragmentInfo = document.createDocumentFragment();
  //console.log(modalInfo);
  dataInfo.forEach(infoProductos => {
    console.log(infoProductos);
    modalInfo.querySelector('.productoInfo__titulo').textContent = infoProductos.tittle;
    modalInfo.querySelector('.productosInfo__info').textContent =infoProductos.info;
    modalInfo.querySelector('.productosInfo__img').setAttribute('src', infoProducto.img);
    modalInfo.querySelector('.productosInfo__img').setAttribute('src', infoProducto.img1);
    modalInfo.querySelector('.productosInfo__img').setAttribute('src', infoProducto.img2);
    modalInfo.querySelector('button').dataset.id = infoProducto.id;

    const cloneInfo = modalInfo.cloneNode(true);
    fragmentInfo.appendChild(cloneInfo)
  });
  contenedorProductosInfo.appendChild(fragmentInfo);
}