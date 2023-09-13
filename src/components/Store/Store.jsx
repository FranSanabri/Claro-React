import React, { useState } from 'react';
import './Store.css';

const Store = () => {
  const productsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBrand, setSelectedBrand] = useState('Todas');
  const [selectedPrice, setSelectedPrice] = useState('Cualquier precio');

  const products = [
    { id: 1, name: 'Celular Samsung A', brand: 'Samsung', price: 800, image: 'https://www.ngtechgist.com/wp-content/uploads/2020/02/galaxy-z-flip-e1581896628360.png' },
    { id: 2, name: 'Vidrio Templado Trex', brand: 'Trex', price: 350, image: 'https://m.media-amazon.com/images/I/71nugKRkb7L._AC_SL1500_.jpg' },
    { id: 3, name: 'Celular Uoopa! C', brand: 'Uoopa!', price: 450, image: 'https://uoopaa.com/wp-content/uploads/2021/10/jkshfidshjk.png'  },
    { id: 4, name: 'Cable HDMI Foxbox D', brand: 'Foxbox', price: 550, image: 'https://www.pngall.com/wp-content/uploads/5/HDTV-HDMI-Cable-PNG-Image.png' },
    { id: 5, name: 'Celular Motorola E', brand: 'Motorola', price: 250, image: 'https://motorolait.vtexassets.com/arquivos/ids/157585/Motorola-edge-30-pdp-render-Silence-12-bcxm87y2.png?v=637863895336430000' },
    { id: 6, name: 'Funda Generica Samsung A03 Core', brand: 'Generica', price: 150, image: 'https://www.catalogo.claro.com.ec/uploads/imgs/accesorio/a03_core_soft_clear_cover_black_promo.png' },
    // ...otros 34 productos
    { id: 35, name: 'Celular Huawei AA', brand: 'Huawei', price: 900 },
    { id: 36, name: 'Celular Xiaomi BB', brand: 'Xiaomi', price: 750 },
    { id: 37, name: 'Celular Samsung CC', brand: 'Samsung', price: 650 },
    { id: 38, name: 'Celular Trex DD', brand: 'Trex', price: 300 },
    { id: 39, name: 'Celular Uoopa! EE', brand: 'Uoopa!', price: 420 },
    { id: 40, name: 'Celular Foxbox FF', brand: 'Foxbox', price: 590 },
    { id: 41, name: 'Celular Samsung GG', brand: 'Samsung', price: 780 },
     { id: 42, name: 'Celular Trex HH', brand: 'Trex', price: 320 },
    { id: 43, name: 'Celular Uoopa! II', brand: 'Uoopa!', price: 440 },
     { id: 44, name: 'Celular Foxbox JJ', brand: 'Foxbox', price: 530 },
     { id: 45, name: 'Celular Motorola KK', brand: 'Motorola', price: 240 },
     { id: 46, name: 'Celular Generica LL', brand: 'Generica', price: 140 },
     { id: 47, name: 'Celular Huawei MM', brand: 'Huawei', price: 880 },
     { id: 48, name: 'Celular Xiaomi NN', brand: 'Xiaomi', price: 720 },
    { id: 49, name: 'Celular Samsung OO', brand: 'Samsung', price: 620 },
     { id: 50, name: 'Celular Trex PP', brand: 'Trex', price: 280 },
     { id: 51, name: 'Celular Uoopa! QQ', brand: 'Uoopa!', price: 400 },
     { id: 52, name: 'Celular Foxbox RR', brand: 'Foxbox', price: 540 },
     { id: 53, name: 'Celular Motorola SS', brand: 'Motorola', price: 230 },
     { id: 54, name: 'Celular Generica TT', brand: 'Generica', price: 130 },
     { id: 55, name: 'Celular Huawei UU', brand: 'Huawei', price: 860 },
     { id: 56, name: 'Celular Xiaomi VV', brand: 'Xiaomi', price: 710 },
     { id: 57, name: 'Celular Samsung WW', brand: 'Samsung', price: 640 },
     { id: 58, name: 'Celular Trex XX', brand: 'Trex', price: 260 },
     { id: 59, name: 'Celular Uoopa! YY', brand: 'Uoopa!', price: 380 },
     { id: 60, name: 'Celular Foxbox ZZ', brand: 'Foxbox', price: 570 },
     { id: 61, name: 'Celular Motorola AAA', brand: 'Motorola', price: 220 },
  { id: 62, name: 'Celular Generica BBB', brand: 'Generica', price: 120 },
  { id: 63, name: 'Celular Huawei CCC', brand: 'Huawei', price: 840 },
  { id: 64, name: 'Celular Xiaomi DDD', brand: 'Xiaomi', price: 680 },
  { id: 65, name: 'Celular Samsung EEE', brand: 'Samsung', price: 610 },
  { id: 66, name: 'Celular Trex FFF', brand: 'Trex', price: 240 },
  { id: 67, name: 'Celular Uoopa! GGG', brand: 'Uoopa!', price: 360 },
  { id: 68, name: 'Celular Foxbox HHH', brand: 'Foxbox', price: 550 },
  { id: 69, name: 'Celular Motorola III', brand: 'Motorola', price: 210 },
  { id: 70, name: 'Celular Generica JJJ', brand: 'Generica', price: 110 },
  { id: 71, name: 'Celular Huawei KKK', brand: 'Huawei', price: 820 },
  { id: 72, name: 'Celular Xiaomi LLL', brand: 'Xiaomi', price: 670 },
  { id: 73, name: 'Celular Samsung MMM', brand: 'Samsung', price: 590 },
  { id: 74, name: 'Celular Trex NNN', brand: 'Trex', price: 230 },
  { id: 75, name: 'Celular Uoopa! OOO', brand: 'Uoopa!', price: 340 },
  { id: 76, name: 'Celular Foxbox PPP', brand: 'Foxbox', price: 530 },
  { id: 77, name: 'Celular Motorola QQQ', brand: 'Motorola', price: 200 },
  { id: 78, name: 'Celular Generica RRR', brand: 'Generica', price: 100 },
  { id: 79, name: 'Celular Huawei SSS', brand: 'Huawei', price: 800 },
  { id: 80, name: 'Celular Xiaomi TTT', brand: 'Xiaomi', price: 650 },
  ];

  const brands = ['Todas', 'Samsung', 'Trex', 'Uoopa!', 'Foxbox', 'Motorola', 'Generica', 'Huawei', 'Xiaomi'];
  const prices = ['Cualquier precio', '$0 - $200', '$200 - $500', '$500 - $1000', 'Más de $1000'];

  const filteredProducts = products.filter(product => {
    const brandMatch = selectedBrand === 'Todas' || product.brand === selectedBrand;

    const priceMatch =
      selectedPrice === 'Cualquier precio' ||
      (selectedPrice === '$0 - $200' && product.price <= 200) ||
      (selectedPrice === '$200 - $500' && product.price > 200 && product.price <= 500) ||
      (selectedPrice === '$500 - $1000' && product.price > 500 && product.price <= 1000) ||
      (selectedPrice === 'Más de $1000' && product.price > 1000);

    return brandMatch && priceMatch;
  });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleClickPage = page => {
    setCurrentPage(page);
  };

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="store-container">
      <div>
        <img src="https://i.ibb.co/J7S5VzY/Captura.png"  className="banner-tienda" alt="Banner" />
      </div>
      <div className="filters">
        <label className="filter-label">Filtrar por Marca:</label>
        <select className="filter-select" value={selectedBrand} onChange={e => setSelectedBrand(e.target.value)}>
          {brands.map(brand => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>
        <label className="filter-label">Filtrar por Precio:</label>
        <select className="filter-select" value={selectedPrice} onChange={e => setSelectedPrice(e.target.value)}>
          {prices.map(price => (
            <option key={price} value={price}>{price}</option>
          ))}
        </select>
      </div>
      <div className="product-grid">
        {paginatedProducts.map(product => (
          <div key={product.id} className="product">
            <h3 className="product-name">{product.name}</h3>
            <img src={product.image} alt={product.name} className="product-image" />
            <p className="product-info">Marca: {product.brand}</p>
            <p className="product-info">Precio: ${product.price}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => handleClickPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Store;
