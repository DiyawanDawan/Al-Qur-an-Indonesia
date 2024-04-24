import { Outlet } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const MainPage = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <ToastContainer />
      <Footer />
    </>
  )
}

export default MainPage