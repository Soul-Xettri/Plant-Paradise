import { About } from "./About";
import { Banner } from "./Banner";
import Newsletter from "./Newsletter";
import Product from "./Product";
import Slider from "./Slider";

export default function Home() {
  return (
    <>
    <div style={{marginRight:"40px",marginLeft:"40px"}}>
        <Slider/>
        <About/>
        <Banner/>
        <Product/>
        <Newsletter/>
        </div>
    </>
  )
}
