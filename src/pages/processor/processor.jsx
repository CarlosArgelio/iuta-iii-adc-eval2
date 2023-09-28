import Transition from "./components/transitions/transitions";
import Cards from "./components/cards/cards";

// images import
import processador from '../../assets/procesador.webp'

const bus = () => {

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
                    title={'Procesadores de propósito'} 
                    info={'Son los más comunes. Se utilizan en una amplia gama de dispositivos, desde ordenadores personales hasta teléfonos inteligentes.'} 
                    image={processador}
                    />
                <Cards 
                    title={'Procesadores de propósito específico'} 
                    info={'Se diseñan para una tarea específica, como el procesamiento de imágenes o el reconocimiento de voz.'} 
                    image={processador}
                    />
            </div>
        </div>
  );
};

export default bus;