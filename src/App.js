import "./App.css";
import { Route,BrowserRouter as Router,Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home"
import About from "./About"
import Products from "./Products"
import Contact from "./Contact"
import Cart from "./Cart"
import SingleProduct from "./components/SingleProduct";
import Footer from "./components/Footer";
import ErrorPage from "./ErrorPage";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
