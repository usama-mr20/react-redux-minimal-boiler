import Appbar from './components/Appbar'
import Menu from './components/Menu'
import Container from '@material-ui/core/Container';


function App() {

  return (
    <Container maxWidth="sm"> 
      <Appbar/>
      <br/>
      <Menu />
    </Container>
  );
}

export default App;
