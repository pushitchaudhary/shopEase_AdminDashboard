import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
