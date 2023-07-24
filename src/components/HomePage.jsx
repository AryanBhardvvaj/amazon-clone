import { Carousel, HomePageCard , CarouselCategory, CarouselProduct  } from "./";
import BigHomeCard from "./BigHomeCard";
import Footer from "./Footer";
import Lastcarosel from "./Lastcarosel";
import { Link } from "react-router-dom";

const HomePage = () => {
    
  return (
    <div className="bg-amazonclone-background" id="top">
      <div className="min-w-[1000px] max-w-[1500px] m-auto" >
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
        <Link to={`/product/${14}`}>
          <HomePageCard
            title={"Pickup Where You Left Off"}
            img={"../images/home_grid_1.jpg"}
            link={"See terms and conditions"}
          />
            </Link>
        <Link to={`/product/${15}`}>
          <HomePageCard
            title={"Keep Shoping For"}
            img={"../images/home_grid_2.jpg"}
            link={"View your browsing history"}
          />
        </Link>
        <Link to={`/product/${16}`}>
          <HomePageCard
            title={"Up to 70% off | Clearance store"}
            img={"../images/home_grid_3.jpg"}
            link={"See all offers"}
          />
        </Link>
        <Link to={`/product/${17}`}>
          <HomePageCard
            title={"More titles to explore"}
            img={"../images/home_grid_4.jpg"}
            link={"Browse Kindle Unlimited"}
          />
        </Link>
        <Link to={`/product/${18}`}>
          <HomePageCard
            title={"Great Deals On Musical Instruments"}
            img={"../images/home_grid_6.jpg"}
            link={"See the deals"}
          />
        </Link>
        <Link to={`/product/${19}`}>
          <HomePageCard
            title={"Watch Gutar Gu Only on miniTV"}
            img={"../images/home_grid_7.jpg"}
            link={"See more"}
          />
        </Link>
        <Link to={`/product/${20}`}>
          <BigHomeCard
            title={"Prime Video: Recommended for you My Fault"}
            img={"../images/home_grid_5.jpg"}
            link={"See more"}
          />
        </Link>
          <div className="m-3 pt-8">
            <img
              className="xl:hidden"
              src={"../images/banner_image_2.jpg"}
              alt="Banner 2"
            />
          </div>
        </div>
        <CarouselProduct />
        <CarouselCategory />
        
        <div className="h-[200px]">
          <img
            className="h-[100%] m-auto"
            src={"../images/banner_image.jpg"}
            alt="Banner 1"
          />
        </div>
      </div>
      <Lastcarosel/>
      <Footer/>
      
    </div>
    
  );
};

export default HomePage;
