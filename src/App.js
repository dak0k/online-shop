import logo from './logo.svg';
import './App.css';
import Products from './component2/Products';
import Search from './component2/Search';
import Catalog from './component2/Catalog';
import Bin from './component2/Bin';
import React, { useState } from 'react';


function App() {

  const [products, setProducts] = useState (
    [
      {id: 1, name: 'Product 1', price: 100, imgUrl : "https://oir.mobi/uploads/posts/2019-12/1577792806_19-29.jpg"},
      {id: 2, name: 'Product 2',price: 100, imgUrl: "https://www.worldbeachguide.com/photos/la-cinta-sardinia.jpg"},
       {id: 3, name: 'Product 3',price: 100, imgUrl: "https://www.worldbeachguide.com/photos/la-cinta-sardinia.jpg"},
    ]
  )



  return (
    <div className="App">

        <Search></Search>
        <Catalog></Catalog>
        <Products products={products} ></Products>
        <Bin></Bin>
    </div>
  );
}

export default App;
