import './App.css';
// import Dashboard from './Components/Dashboard/Dashboard';
// import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AccessDocuments from './Features/Access Documents/AccessDocuments';
import Home from './Home/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/'>
            <Route index element={<Home />} />
          </Route>
          <Route>
            <Route path='AccessDocuments' element={<AccessDocuments /> }/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
