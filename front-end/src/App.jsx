import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StickyButtons from "./components/StickyButtons";
import ScrollToTop from "./components/ScrollToTop";
import KashmirBlog from "./pages/blogs/KashmirBlog";
import DubaiBlog from "./pages/blogs/DubaiBlog";
import BaliBlog from "./pages/blogs/BaliBlog";
import GoaBlog from "./pages/blogs/GoaBlog";
import LadakhBlog from "./pages/blogs/LadakhBlog";
import RishikeshBlog from "./pages/blogs/RishikeshBlog";

// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";

import BlogSection from "./pages/Blogs";
import Destination from "./pages/Destination";
import Gallery from "./pages/gallery/Gallery";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/destination" element={<Destination />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blogs" element={<BlogSection />} />
            <Route path="/blogs/kashmir" element={<KashmirBlog />} />
            <Route path="/blogs/dubai" element={<DubaiBlog />} />
            <Route path="/blogs/Bali" element={<BaliBlog />} />
            <Route path="/blogs/goa" element={<GoaBlog />} />
            <Route path="/blogs/ladakh" element={<LadakhBlog />} />
            <Route path="/blogs/rishikesh" element={<RishikeshBlog />} />
          </Routes>
        </main>
        <Footer />
        <StickyButtons />
      </div>
    </Router>
  );
}
