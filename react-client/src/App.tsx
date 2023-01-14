import { ConfigProvider, theme } from 'antd';
import './App.scss';
import Films from './modules/films/components/Films';

function App() {
  return (
    <div className="app">
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
        <header className="app-header">
          Star Wars Films
        </header>
        <main>
          <Films />
        </main>

      </ConfigProvider>
    </div>
  );
}

export default App;
