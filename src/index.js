//import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
import AppClass from "./ex1-class/AppClass";
import AppFunction from "./ex2-function/AppFunction";
import AppArrowFunction from "./ex3-arrow-function.js/AppArrowFunction";
import Table from "./ex4-table/Table";
import StyleExample from "./ex5-styling/StyleExample";

//import bootstrap css resource
import "bootstrap/dist/css/bootstrap.css";
import NameList from "./ex6-var-function/NameList";
import Menu from "./ex7-props/Menu";
import App from "./ex7-props/App";
import Car from "./ex8-state/Car";
import ProductList from "./ex8-state/ProductList";
import Counter from "./ex9-events.js/Counter";

const greetingMessage = <div>Hello React</div>;

const menu = (
  <ul>
    <li>Home</li>
    <li>Login</li>
    <li>Contact Us</li>
  </ul>
);
console.log(">>>>>>Hello React!");

//ReactDOM.render(menu, document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));

const names = ["Liljana Ristevska", "Test Testsson", "Konstantin Ristevski"];
root.render(<Counter />);
