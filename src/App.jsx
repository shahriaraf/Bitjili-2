// App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Banner from './Components/Home/Banner';
import Commission from './Components/Home/Commission';
import ProductsSection from './Components/Home/ProductSection';
import SecondBanner from './Components/Home/SecondBanner';
import Testimonials from './Components/Home/Testimonials';
import ThirdBanner from './Components/Home/ThirdBanner';
import WhyChooseUs from './Components/Home/WhyChooseUs';
import SignUpPage from './Components/SignUpPage';
import 'animate.css';
import RegisterPage from './Components/RegisterPage';

// 👇 Main Home Page Layout
const HomePage = () => (
  <>
    <Navbar />
    <section id="home">
      <Banner />
    </section>
    <section id="about-us">
      <SecondBanner />
    </section>
    <section id="products-section">
      <ProductsSection />
    </section>
    <section id="revenue-share">
      <Commission />
    </section>
    <section id="why-choose-us">
      <WhyChooseUs />
    </section>
    <section id="testimonials">
      <Testimonials />
    </section>
    <section id="contact-us">
      <ThirdBanner />
    </section>
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<><SignUpPage></SignUpPage></>} />
        <Route path="/register" element={<><RegisterPage></RegisterPage></>} />
      </Routes>
    </Router>
  );
}

export default App;
