import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Index from './pages/Index'
import Login from './pages/Login'
import Register from './pages/Register'
import UserHome from './pages/UserHome'
import ScorePage from './pages/ScorePage'

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Index />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/userHome' element={<UserHome />}/>
        <Route path='/scorePage' element={<ScorePage />}/>
      </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
