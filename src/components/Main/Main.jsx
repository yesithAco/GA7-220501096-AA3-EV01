import API from "../API/API";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
function main (){
    //al interior puedo usar mi codigo 
    //primera parte en js 
    return (
        <div>
            <p>
                Bienvenidos! Esta es mi primera app con Javascript, Node.js y React como 
                framework de desarrollo
            </p>
              <ItemListContainer saludo="Bienvenido"/>
              <API/>
        </div>
    )
}
export default main;