// import logo from './logo.svg';
import './App.css';
import Questions from './Components/Questions/Questions';
import Shop from './Components/Shop/Shop';


function App() {
  return (
    <div className='header'>
      <h2>Random Choose Earbuds</h2>
      <Shop></Shop>
      <Questions></Questions>
    </div>
  );
}

export default App;
