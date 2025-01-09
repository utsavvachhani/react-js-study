import { useDispatch} from 'react-redux'
import { useEffect, useState } from 'react'
import authService from './appwrite/auth'
import {login, logout} from './store/authSlice'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Fotter'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();  

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      }
      else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  },[])

  return !loading ? (
    <div className='min-h-se flex flex-wrap content-between bg-gray-400'>
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) 
  : 
  (
    <div>wait</div>
  )
}

export default App
