import Transition from "./components/transitions/transitions";
import Cards from "./components/cards/cards";

// images import
import busData from '../../assets/bus_de_datos.jpg'

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
                    title={'Bus De datos'} 
                    info={'El bus de datos de un ordenador conecta la CPU, la RAM y los dispositivos de almacenamiento.'} 
                    image={busData}
                    />
                <Cards 
                    title={'Bus de direcciones'} 
                    info={'El bus de direcciones de un ordenador conecta la CPU con la RAM.'} 
                    image={busData}
                    />
                <Cards 
                    title={'Bus de control'} 
                    info={'El bus de control de un ordenador conecta la CPU con los dispositivos de almacenamiento y entrada/salida.'} 
                    image={busData}
                    />
                <Cards 
                    title={'Bus de alimentación'} 
                    info={'El bus de alimentación de un ordenador conecta la fuente de alimentación con todos los componentes del sistema.'} 
                    image={busData}
                    />
            </div>
        </div>
  );
};

export default bus;