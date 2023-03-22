import React from "react";
import Menu from "./Menu";
import Product from "./Product";

const App = () => {
  const menus = [
    { id: 1, name: "Home", path: "/home", active: "active" },
    { id: 2, name: "SingIn", path: "/login", active: "" },
    { id: 3, name: "Singup", path: "/register", active: "" },
    { id: 4, name: "Products", path: "/products", active: "" },
    { id: 5, name: "About", path: "/about", active: "" },
  ];
  const productList = [
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

  return (
    <div className="container-fluid">
      <Menu menuList={menus} />
      <br />
      <div clasName="container card-group">
        <div className="row">
          {productList.map((product) => {
            return <Product data={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
