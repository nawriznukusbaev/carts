import './App.css';
import React from 'react';
import {useSelector} from "react-redux";
import {BrowserRouter,Link,Outlet,Routes,Route,NavLink} from "react-router-dom";
import Products from "./components/products";
import Carts from "./components/carts";
import {totalCount} from "./store/actionsCreators";

function App() {
    const state=useSelector(state => state);

    return (
        <BrowserRouter>
            <div className={'container'}>
                <header>
                    <nav className="navbar" style={{backgroundColor:'#e3f2fd'}}>
                        <Link to={"/"}>Products</Link>
                        <Link to={"/carts"}>Carts: {totalCount(state)} </Link>
                    </nav>
                </header>
                <Outlet />
            </div>
            <Routes>
                <Route path='/' element={<Products/>}/>
                <Route path='/carts' element={<Carts/>}/>
             </Routes>
        </BrowserRouter>
    );

}

export default App;
