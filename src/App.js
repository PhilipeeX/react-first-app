import './App.css';
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Frase from "./components/Frase";
import List from "./components/List";

function App() {
  const philipe = 'Philipe'

  function sum(x, y) {
    return x + y
  }

  const urlImg = 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

  return (
    <div className="App">
      <Frase />

      <h2>Alterando o JSX</h2>
      <p>Testando ìnterpolação {philipe}</p>
      <p>soma: {sum(2, 5)}</p>
      <img src={urlImg} alt="teste" width='300px'/>
      <HelloWorld/>
      <SayMyName nome="ESSA PROPS"/>

      <Pessoa nome={philipe} idade={27} pais={"Brasil"}/>
      <Frase />

      <List />
    </div>
  );
}

export default App;
