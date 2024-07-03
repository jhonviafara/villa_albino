import Carrousel1 from "../components/CarrouselFotos";
import Contacto from "../components/Contacto";
import Header from "../components/Header";
import Noticias from "../components/Noticias";
import PieDePagina from "../components/PiePagina";
import ProximosPartidos from "../components/ProximosPartidos";
import TituloPrincipal from "../components/TituloPrincipal";
import UltimosResultados from "../components/UltimosResultados";
import Fondo from "../assets/Foto-Fondo.jpg"

function Home() {
    return (
        <div>
             <div className=""
         style={{backgroundImage: `url(${Fondo})`}}>
            <Header />
            <UltimosResultados />
            <ProximosPartidos />
            <Noticias/>
            <Contacto />
            <PieDePagina />
        </div>
        </div>
    );
}

export default Home;

