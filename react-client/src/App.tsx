import './App.scss';
import Films from './modules/films/components/Films';

function App() {
  return (
    <div className="app">
        <header className="app-header">
          Star Wars Films
        </header>
        <main>
          <Films />
        </main>
    </div>
  );
}

export default App;
