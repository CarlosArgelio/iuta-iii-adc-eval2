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
                    title={'Disco duro'} 
                    info={'Es el disco más común en las computadoras. Se encuentra dentro de la carcasa de la computadora y es el lugar donde se almacena el sistema operativo, las aplicaciones y los archivos personales.'} 
                    image={imageDiskHard}
                />

                <Cards 
                    title={'Disco óptico'} 
                    info={'Es un disco que utiliza un láser para leer y escribir datos. Los discos ópticos más comunes son los CD, DVD y Blu-ray.'} 
                    image={imageDiskOptical}
                />

                <Cards 
                    title={'Disco SSD'} 
                    info={'Es un disco que utiliza memoria flash para almacenar datos. Los discos SSD son más rápidos que los discos duros, pero también son más caros.'} 
                    image={imageSSD}
                />

            </div>
        </div>
  );
};

export default Processador;