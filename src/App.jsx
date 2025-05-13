import './App.css'
import Footer from './Components/Footer/Footer'
import Banner from './Components/Home/Banner'
import Commission from './Components/Home/Commission'
import ProductsSection from './Components/Home/ProductSection'
import SecondBanner from './Components/Home/SecondBanner'
import ThirdBanner from './Components/Home/ThirdBanner'
import Navbar from './Components/Navbar/Navbar'
function App() {


  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <SecondBanner></SecondBanner>
    <ProductsSection></ProductsSection>
    <Commission></Commission>
    <ThirdBanner></ThirdBanner>
    <Footer></Footer>
    </>
  )
}

export default App
