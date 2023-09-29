import Transition from "./components/transitions/transitions";
import Cards from "./components/cards/cards";

// images import
import imageRAM from '../../assets/ram.jpeg'
import imageROM from '../../assets/rom.jpeg'

const Processador = () => {

    return (
        <div>
            <div>
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
                    title={'Memoria RAM'} 
                    info={'Es la memoria de trabajo del ordenador. Almacena los datos y los programas que se están utilizando en un momento dado.'} 
                    image={imageRAM}
                    />
                <Cards 
                    title={'Memoria ROM '} 
                    info={'Es una memoria de sólo lectura. Almacena los datos que no pueden ser modificados, como el código de inicio del ordenador.'} 
                    image={imageROM}
                    />
            </div>
        </div>
  );
};

export default Processador;