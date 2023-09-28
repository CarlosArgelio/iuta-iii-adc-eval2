import Transition from "./components/transitions/transitions";
import Cards from "./components/cards/cards";

const bus = () => {

    return (
        <>
            <div>
                <Transition />
            </div>
            <div>
                <Cards />
            </div>
        </>
  );
};

export default bus;