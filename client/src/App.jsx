import Collection from "./pages/collections";
import Home from "./pages/Home";
import {BrowserRouter, Routes, Route} from "react-router"
function App () {
  
  return (
    <>
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