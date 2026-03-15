import Collection from "./pages/collections";
import CollectionDetail from "./pages/collections/CollectionDetail";
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
          <Route path="/collection/:id" element={<CollectionDetail/>}/>
        </Routes>
      </BrowserRouter>    
    </>
  );
}

export default App;