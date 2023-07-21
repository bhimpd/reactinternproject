import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Cart from "./components/Cart";
import MainNav from "./components/MainNav";
import { Provider } from "react-redux";
import store from "./store/Store";

function App() {
  return (
    <>
      <Provider store={store}>
        <MainNav />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>
      </Provider>
    </>
  );
}

export default App;
