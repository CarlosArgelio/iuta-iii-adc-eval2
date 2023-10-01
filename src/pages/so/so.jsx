import Transition from "./components/transitions/transitions";
import Cards from "./components/cards/cards";

// images import
import imageSSD from '../../assets/ssd.jpg'
import imageDiskHard from '../../assets/disk_hard.jpeg'
import imageDiskOptical from '../../assets/disk_optical.webp'



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
                    title={'Microsoft Windows'} 
                    info={'El sistema operativo más utilizado en el mundo, con una cuota de mercado del 75%. Es un sistema operativo multitarea y gráfico, diseñado para ordenadores personales.'} 
                />

                <Cards 
                    title={'macOS'} 
                    info={'El sistema operativo desarrollado por Apple para sus ordenadores Mac. Es un sistema operativo multitarea y gráfico, que se caracteriza por su diseño intuitivo y su facilidad de uso.'} 
                />

                <Cards 
                    title={'Linux'} 
                    info={'Un sistema operativo libre y de código abierto, disponible para una amplia gama de dispositivos, incluyendo ordenadores personales, servidores, dispositivos móviles y dispositivos empotrados.'} 
                />

            </div>
        </div>
  );
};

export default Processador;