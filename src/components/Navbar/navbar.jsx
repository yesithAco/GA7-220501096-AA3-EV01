import CartWidget from "../Navbar/CartWidget.jsx";
import estilos from "./navbar.module.css";
import logo from "../../img/logoipsum-395.svg";
import Button from "../button/Button.jsx";
function Navbar(props) {
  console.log(props);

  if (props.isfooter) {
    return (
      <nav className={estilos.nav}>
        <img src={logo} alt="" />
        <ul>
          <li>
            <a href="/productos">Productos</a>
          </li>
          <li>
            <a href="/categorias">Categorias</a>
          </li>
          <li>
            <a href="/contactos">Contactos</a>
          </li>

          <li>
            <a href="/carrito">Carrito</a>
          </li>
        </ul>
        <Button value="long In" varient="primary"/>
        <CartWidget />
      </nav>
    );
  } else {
    return (
      <footer className={estilos.footer}>
        <img src={logo} alt="" />
        <ul>
          <li>
            <a href="/productos">Productos</a>
          </li>
          <li>
            <a href="/categorias">Categorias</a>
          </li>
          <li>
            <a href="/contactos">Contactos</a>
          </li>

          <li>
            <a href="/carrito">ota información</a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Navbar;
