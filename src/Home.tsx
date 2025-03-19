import { Categories } from './components/Categories';
import { HeroBanner } from './components/HeroBanner';
import { PopularProducts } from './components/PopularProduct';
import { swiperDescription, swiperImages, swiperPrice, swiperThumbnails } from './config/data';
const Home = () =>{
    return (
        <>
        <HeroBanner images={swiperImages} thumbnails={swiperThumbnails} description={swiperDescription} price={swiperPrice}/>
        <Categories/>
        <PopularProducts/>
        </>
    )
}

export default Home;