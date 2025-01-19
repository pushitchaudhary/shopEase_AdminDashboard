import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Dashboard from './pages/Dashboard/Dashboard';
import CategoryList from './pages/Category/CategoryList';
import AddCategory from './pages/Category/AddCategory';
import SupplierList from './pages/Supplier/SupplierList';
import AddSupplier from './pages/Supplier/AddSupplier';
import EditSupplier from './pages/Supplier/EditSupplier';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/category' element={<CategoryList/>}/>
          <Route path='/add-category' element={<AddCategory/>}/>
          <Route path='/supplier-list' element={<SupplierList/>}/>
          <Route path='/add-supplier' element={<AddSupplier/>}/>
          <Route path='/edit-supplier/:supplierId' element={<EditSupplier/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
