import logo from './logo.svg';
// import './App.css';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route
          path="/" element={<Home/>}
        ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
