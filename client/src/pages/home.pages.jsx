import Carrousel1 from "../components/CarrouselFotos";
import Contacto from "../components/Contacto";
import Header from "../components/Header";
import PieDePagina from "../components/PiePagina";
import ProximosPartidos from "../components/ProximosPartidos";
import TituloPrincipal from "../components/TituloPrincipal";
import UltimosResultados from "../components/UltimosResultados";

function Home() {
    return (
        <div>
            <div className='bg-green-600'></div>
            <Header />
            <TituloPrincipal />
            <UltimosResultados />
            <Carrousel1 />
            <ProximosPartidos />
            <Contacto />
            <PieDePagina />
        </div>
    );
}

export default Home;

