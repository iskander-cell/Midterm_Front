import { BrowserRouter, Routes, Route } from "react-router-dom"

import { ProductsPage } from "./pages/ProductsPage"
import { ProductPage } from "./pages/ProductPage"
import { CategoriesPage } from "./pages/CategoriesPage"

import { Navbar } from "./components/Navbar/Navbar"

function App() {

  return (

    <BrowserRouter>

      <Navbar/>

      <Routes>

        <Route path="/" element={<ProductsPage/>}/>

        <Route path="/product/:id" element={<ProductPage/>}/>

        <Route path="/categories" element={<CategoriesPage/>}/>

      </Routes>

    </BrowserRouter>

  )
}

export default App