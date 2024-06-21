import './App.css'
import Carrousel1 from './components/CarrouselFotos'
import Contacto from './components/Contacto'
import FotoTitulo from './components/FotoTitulo'
import Header from './components/Header'
import PieDePagina from './components/PiePagina'
import ProximosPartidos from './components/ProximosPartidos'
import TituloPrincipal from './components/TituloPrincipal'
import UltimosResultados from './components/UltimosResultados'







function App() {
 

  return (
   
    <>
    <div className='bg-green-600'>
    <Header/>
    <TituloPrincipal/>
    <UltimosResultados/>
    <Carrousel1/>
    <ProximosPartidos/>
    <Contacto/>
    <PieDePagina/>
    </div>
    </>
  )
}

export default App
