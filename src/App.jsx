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
import EditCategory from './pages/Category/EditCategory';
import AddProduct from './pages/Product/AddProduct';
import ProductList from './pages/Product/ProductList';
import EditProduct from './pages/Product/EditProduct';
import StaffList from './pages/Staff/StaffList';
import AddStaff from './pages/Staff/AddStaff';
import EditStaff from './pages/Staff/EditStaff';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/category' element={<CategoryList/>}/>
          <Route path='/add-category' element={<AddCategory/>}/>
          <Route path='/edit-category/:categoryId' element={<EditCategory/>}/>
          <Route path='/supplier-list' element={<SupplierList/>}/>
          <Route path='/add-supplier' element={<AddSupplier/>}/>
          <Route path='/edit-supplier/:supplierId' element={<EditSupplier/>}/>
          <Route path='/product-list' element={<ProductList/>}/>
          <Route path='/add-product' element={<AddProduct/>}/>
          <Route path='/edit-product/:productId' element={<EditProduct/>}/>
          <Route path='/staff-list' element={<StaffList/>}/>
          <Route path='/add-staff' element={<AddStaff/>}/>
          <Route path='/edit-staff/:staffId' element={<EditStaff/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
