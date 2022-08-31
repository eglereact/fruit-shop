import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Shop from "./pages/Shop";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import Blog from "./pages/Blog";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <BrowserRouter>
      <TopHeader />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
