import './App.css';
import Conditional from "./components/Conditional";
import AnotherList from "./components/AnotherList";

function App() {

  const itensFromApi = ['Backend', 'Frontend', 'Devops', 'Design']

  return (
    <div className="App">
      <h1>Renderizando uma lista</h1>
      <AnotherList itens={itensFromApi} />
      <Conditional />
    </div>
  );
}

export default App;
