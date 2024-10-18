import Contacto from "../components/Contacto";
import PieDePagina from "../components/PiePagina";
import ProximosPartidos from "../components/ProximosPartidos";
import TituloPrincipal from "../components/TituloPrincipal";
import UltimosResultados from "../components/UltimosResultados";
import PlayersTable from "./planilla.pages";

function Home() {
    return (
        <div>
            <div className='bg-green-600'>
            <TituloPrincipal />
            <UltimosResultados />
            <ProximosPartidos />
            <PlayersTable/>
            <Contacto />
            <PieDePagina />
            </div>
        </div>
    );
}

export default Home;

