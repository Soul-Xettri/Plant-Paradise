import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./component/HomePage/Home";
import { TopHeader } from "./component/HomePage/TopHeader";
import Footer from "./component/HomePage/Footer";
import { Error404 } from "./component/ErrorPage/Error404";
import { Login } from "./component/Authentication/Login";


function App() {

  return (
    <>
      <Router>
        <TopHeader/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/auth' element={<Login/>}/>
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
