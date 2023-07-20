import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product_Details_Page from "./pages/Product_Details_Page";
import MainNav from "./components/MainNav";

function App() {
  return (
    <>
      <MainNav />
      <Routes>
        <Route exact="true" path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product_Details_Page />}></Route>
      </Routes>
    </>
  );
}

export default App;
