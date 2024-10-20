
import PieDePagina from "../components/PiePagina";
import ProximosPartidos from "../components/ProximosPartidos";
import TituloPrincipal from "../components/TituloPrincipal";
import UltimosResultados from "../components/UltimosResultados";
import PlayersTable from "./planilla.pages";
import Header from "../components/Header"

function Home() {
    return (
        <div>
            <div className='bg-green-600'>
            <Header />
            <TituloPrincipal />
            <UltimosResultados />
            <ProximosPartidos />
            <PlayersTable/>
            <PieDePagina />
            </div>
        </div>
    );
}

export default Home;

