import HomeSection from './components/home/home'
import ListaProductos from './components/lista-productos/lista-productos'
import ProductoForm from './components/form/productoForm'
import Navegacion from './components/Nav/navegacion'
import { Toaster } from 'sonner'
import { Route, Routes } from 'react-router-dom'
import LoginSection from './components/login/login'
function App() {

  return (
    <>
      <Navegacion/>
      <Toaster richColors/>
      <Routes>
        <Route path='/login' element={<LoginSection/>}/>
        <Route path='/' element={<HomeSection/>}/> 
        <Route path='/inicio' element={<HomeSection/>}/>
        <Route path='/ListaProductos' element={<ListaProductos/>}/>
        <Route path='/admin/form' element={<ProductoForm/>}/>
      </Routes>
    </>
  )
}

export default App
