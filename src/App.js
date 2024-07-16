import './App.css';

function App() {
  const philipe = 'Philipe'

  function sum(x,y) {
    return x + y
  }

  const urlImg = 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Testando ìnterpolação {philipe}</p>
      <p>soma: {sum(2,5)}</p>
      <img src={urlImg} alt="teste" width='300px' />
    </div>
  );
}

export default App;
