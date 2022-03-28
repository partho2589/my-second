
import { Button, Spinner } from 'react-bootstrap';
import './App.css';
import CardGroup2 from './component/CardGroup2/CardGroup2';


function App() {
  return (
    <div className="App">
     <h1>This is bootstrap link. </h1>
    <Button>my button </Button>
    <br />
    <>
  <Spinner animation="border" size="sm" />
  <Spinner animation="border" />
  <Spinner animation="grow" size="sm" />
  <Spinner animation="grow" />
</>
<CardGroup2></CardGroup2>
    </div>
  );
}

export default App;
