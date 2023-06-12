import './App.css';
// import Dashboard from './Components/Dashboard/Dashboard';
// import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AccessDocuments from './Features/Access Documents/AccessDocuments';
import Home from './Home/Home';
import DocumentList from './Features/DocumentList/DocumentList';

import TaskPage from './Features/Task page/TaskPage';
import Academics from '../src/Features/Academics/Academics'
import UploadSubmissions from './Features/upload submissions/UploadSubmissions';
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
            <Route path='DocumentList' element={<DocumentList /> }/>
            <Route path='UploadSubmissions' element={<UploadSubmissions /> }/>
            <Route path='Academics' element={<Academics /> }/>
            <Route path='Tasks' element={<TaskPage /> }/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
