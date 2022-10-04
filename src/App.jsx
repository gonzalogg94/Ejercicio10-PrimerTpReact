import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';
import FormularioPeliculas from './components/FormularioPeliculas';
import './style.css';
function App() {
  return (
    <Container className='text-center pt-5'>
     <h1 className='display-4'>Administrador Peliculas</h1>
     <hr/>
     <FormularioPeliculas></FormularioPeliculas>
    </Container>
  );
}

export default App;
