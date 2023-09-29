import Transition from "./components/transitions/transitions";
import Form from "./components/form/form";

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
                justifyContent: "center",
                alignItems: "center"
            }}
            >
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid black",
                    margin: "10px",
                    padding: "10px",
                    width: "500px"
                }}>
                    <Form />
                </div>
            </div>
        </>
  );
};

export default Processador;