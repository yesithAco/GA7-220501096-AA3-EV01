import Navbar from '../Navbar/navbar.jsx';
import estilos from '../Header/header.module.css';  
function Header() {
    // al interior puedo usar mi codigo 
    // primera parte en js 
    return (

        <header className={estilos.header}>
             <Navbar isfooter={true}/>
        </header>
        // cada compoennte debe retornar un solo elemento el header en este caso    
    )
}
 
export default Header