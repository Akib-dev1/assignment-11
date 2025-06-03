import { Outlet } from "react-router"
import Navbar from "./Navbar"
import Footer from "./Footer"


function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
