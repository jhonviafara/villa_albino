import Carrousel1 from "../components/CarrouselFotos";
import Contacto from "../components/Contacto";
import PieDePagina from "../components/PiePagina";
import ProximosPartidos from "../components/ProximosPartidos";
import TituloPrincipal from "../components/TituloPrincipal";
import UltimosResultados from "../components/UltimosResultados";
import PlayersTable from "./planilla.pages";

function Home() {
    return (
        <div>
            <div className='bg-green-600'></div>
            <TituloPrincipal />
            <UltimosResultados />
            <ProximosPartidos />
            <Contacto />
            <PieDePagina />
        </div>
    );
}

export default Home;

