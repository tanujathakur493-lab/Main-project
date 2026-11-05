
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Shop from "./Pages/Shop";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Categories from "./Pages/Categories";
import About from "./Pages/About";
import Checkout from "./Pages/Checkout";
import Contact from "./Pages/Contact";
import Productdetail from "./Pages/Productdetail";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Recipes from "./Pages/Recipes";
import RecipeDetail from "./Pages/View-recipes";
import User from "./Pages/User";
import Profile from "./Pages/Profile";




function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/About" element={<About />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Productdetail/:id" element={<Productdetail />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Recipes" element={<Recipes />} />
        <Route path="/view-recipes/:id" element={<RecipeDetail />} />
        <Route path="/User" element={<User />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/User/:id" element={<Profile />} />
        
      
        {/* // username==johnd
         // password==m38rmF$ */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
