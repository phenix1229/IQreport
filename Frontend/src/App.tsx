import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Index from './pages/Index'
import Login from './pages/Login'
import Register from './pages/Register'
import UserHome from './pages/UserHome'
import NameAndDate from './pages/NameAndDate'
import ScorePage from './pages/ScorePage'
import CompositeIqPage from './pages/CompositeIqPage'
import WrittenReportPage from './pages/WrittenReportPage'
import ReportTextPage from './pages/ReportTextPage'
import ViewSubjectsPage from './pages/ViewSubjectsPage'
import ViewSubject from './pages/ViewSubject'

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Index />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/userHome' element={<UserHome />}/>
        <Route path='/nameAndDate' element={<NameAndDate />}/>
        <Route path='/scorePage' element={<ScorePage />}/>
        <Route path='/compositeIqPage' element={<CompositeIqPage />}/>
        <Route path='/reportTextPage' element={<ReportTextPage />}/>
        <Route path='/writtenReportPage' element={<WrittenReportPage />}/>
        <Route path='/viewSubjectsPage' element={<ViewSubjectsPage />}/>
        <Route path='/viewSubject' element={<ViewSubject />}/>
      </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
