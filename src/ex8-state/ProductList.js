import React, { useEffect, useState } from "react";
import Product from "../ex7-props/Product";
const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //cal api- get products

    const responseData = [
      {
        title: "Mordret i präst gärden by Agatha Christie",
        description: "Detective novel",
        price: 219,
        picture_URL: "Agatha-Christie.jpg",
      },
      {
        title: "Sluta aldrig fly by Harlan Coben",
        description: "Thriller",
        price: 199,
        picture_URL: "Harlan-Coben.jpg",
      },
      {
        title: "His dark materials by Philip Pullman ",
        description: "Fantsy",
        price: 269,
        picture_URL: "Philip-Pullman.jpg",
      },
    ];
    setProducts(responseData);
  });

  return (
    <div className="container card-group">
      <div className="row">
        {products.map((product) => {
          return <Product data={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
