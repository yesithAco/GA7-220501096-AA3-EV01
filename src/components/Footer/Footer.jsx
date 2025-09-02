import Navbar from "../Navbar/navbar";
import estilos from "./footer.module.css";
function Footer() {
    // al interior puedo usar mi codigo 
    // primera parte en js 
    return (
        <footer className={estilos.footer}>
           <Navbar/>
        </footer>
    )
}       
export default Footer;
