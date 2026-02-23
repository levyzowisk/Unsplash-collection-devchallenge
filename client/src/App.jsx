import Collection from "./pages/collections";
import Home from "./pages/Home";
import {BrowserRouter, Routes, Route} from "react-router"
import {ToastContainer} from "react-toastify"
function App () {

  
  return (
    <>
    <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/collection" element={<Collection/>}/>
        </Routes>
      </BrowserRouter>    
    </>
  );
}

export default App;