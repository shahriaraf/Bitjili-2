import './App.css'
import Footer from './Components/Footer/Footer'
import Banner from './Components/Home/Banner'
import Commission from './Components/Home/Commission'
import ProductsSection from './Components/Home/ProductSection'
import SecondBanner from './Components/Home/SecondBanner'
import Testimonials from './Components/Home/Testimonials'
import ThirdBanner from './Components/Home/ThirdBanner'
import WhyChooseUs from './Components/Home/WhyChooseUs'
import Navbar from './Components/Navbar/Navbar'
function App() {


  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <SecondBanner></SecondBanner>
    <ProductsSection></ProductsSection>
    <Commission></Commission>
    <WhyChooseUs></WhyChooseUs>
    <Testimonials></Testimonials>
    <ThirdBanner></ThirdBanner>
    <Footer></Footer>

    
    </>
  )
}

export default App
