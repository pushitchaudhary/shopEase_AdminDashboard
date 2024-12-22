import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
