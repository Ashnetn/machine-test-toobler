import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import UserTable from './UserTable/UserTable';
import './App.css';

const App= ()=> (

  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/user" element={<UserTable/>}></Route>
  </Routes>
  </BrowserRouter>
)

export default App;
