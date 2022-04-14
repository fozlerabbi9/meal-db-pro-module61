import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './PageseFile/HeaderPage/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './PageseFile/HomePage/Home';
import Products from './PageseFile/ProductsFile/Products';
import Login from './PageseFile/LoginFile/Login';
import Register from './PageseFile/RegisterFile/Register';
import Detailes from './PageseFile/ProductDitlesFile/Detailes';
import RequireAuth from './PageseFile/RequireAuthFile/RequireAuth';


function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/products' element={
          // <Products></Products>

          <RequireAuth>
            <Products></Products>
          </RequireAuth>
        }></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/Detailes/:ditlesId' element={<Detailes></Detailes>}></Route>
      </Routes>

    </div>
  );
}

export default App;

