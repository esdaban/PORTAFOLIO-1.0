  import { BrowserRouter, Route, Routes } from "react-router-dom"
  import Homepage from  "/AboutPage/pages/Homepage";
  import Aboutpage from "/div>/pages/AboutPage";
  import Userpage from "/pages/Userpage";
  import NotFoundPage from "./pages/NotfoundPage";
  export  function App(){
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Homepage/>}/>
   <Router path="/about" element={<Aboutpage/>}/>
   <Router path="/users" element={<Userpage/>} />
   <Route path='/user/:id' element={<userPage/>} />
   <Router patha='*' element={<NotFoundPage/>} />
   </Routes>
   </BrowserRouter>
  );
}

