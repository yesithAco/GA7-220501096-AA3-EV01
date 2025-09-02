import { useEffect,useState } from "react";
import Button from "../button/Button.jsx";

const API = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                setItems(datos)
            })
            .catch((error) => {console.log("salio todo mal", error);})
            .finally(() => {
                console.log("termino la promesa");
                setIsLoading(false);
            });
    }, []);

    return (
        <div>
            {isLoading ? (
                <h1>Cargando...</h1>
            ) : (
                <>
                    <p>conexión a una API que simula la conexión a una base de datos</p>
                    {items.map((item) => (
                        <div key={item.id}>
                            <img src={item.image} alt={item.title} width="200px"/>
                            <h2>{item.title}</h2>
                            <p> description{item.description}</p>
                            <p>Price:{item.price}</p>
                            <Button value={item.category} variant="secundary"/>
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}
export default API;
//fetch --> es una función nativa de JavaScript que permite hacer peticiones a una API