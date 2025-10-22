import './App.css';
import MiLista from '../lista/MiLista';
import Footer from '../footer/Footer';
import Header from '../header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
        <h1>Hola mundo</h1>
        <h2>Este es mi primer componente react</h2>
          <div className='Parrafo'>
            <p>Este es mi contenido de la App</p>
            <MiLista/>
          </div>
        <Footer/>
    </div>
  );
}

export default App;
