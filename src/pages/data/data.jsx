import Transition from "./components/transitions/transitions";
import Cards from './components/cards/cards'

// images import

const Processador = () => {

    return (
        <>
            <div style={{
                margin: "8px"
            }}>
                <Transition />
            </div>
            <div style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "center",
                    marginRight: "10px",
                    marginLeft: "auto",
                    padding: "10px",
                }}>
                <Cards 
                    title={'Entero'} 
                    info={'Representa números enteros, positivos o negativos.'} 
                    />
                <Cards 
                    title={'Decimal'} 
                    info={'Representa números con decimales.'} 
                    />
                <Cards 
                    title={'Cadena'} 
                    info={'Representa una secuencia de caracteres, como letras, números o símbolos.'} 
                    />
                <Cards 
                    title={'Booleano'} 
                    info={'Representa un valor lógico, verdadero o falso.'} 
                    />
            </div>
        </>
  );
};

export default Processador;