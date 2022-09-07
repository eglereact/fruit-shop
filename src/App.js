import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import Blog from "./pages/Blog";
import Contacts from "./pages/Contacts";
import HeroTop from "./components/HeroTop";
import Footer from "./components/Footer";
import NavResponsive from "./components/NavResponsive";

function App() {
  return (
    <BrowserRouter>
      <NavResponsive />
      <TopHeader />
      <Header />
      <HeroTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
