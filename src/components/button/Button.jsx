import estilos from "../button/button.module.css";
const Button = ({ value, varient }) =>  {
    return (
        <button className={estilos[varient]}>
            {value}
        </button>
    )
}
export default Button;