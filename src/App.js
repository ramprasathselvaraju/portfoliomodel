import React from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import {Route, Routes} from 'react-router-dom';

function App() {
return (
<div>
<Routes>

<Route path='/' element={<Login/>} />


</Routes>
    </div>

);
}
export default App;
