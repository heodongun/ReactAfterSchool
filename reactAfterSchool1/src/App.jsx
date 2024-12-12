import './App.css';
import NameComponent from './NameComponent';

function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center', 
      height: '100vh'
    }}>
      <NameComponent />
    </div>
  );
}

export default App;
