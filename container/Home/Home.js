import BrowseCars from "../../components/Home/Browse Cars/BrowseCars";
import CarComparison from "../../components/Home/CarComparison";
import Hero from "../../components/Home/Hero";
import NewsReviewsDiscussions from "../../components/Home/News, Reviews & Discussions/NewsReviewsDiscussions";
import PostYourAd from "../../components/Home/PostYourAd";
import FeaturedCars from "../../components/Used Cars/FeaturedCars";

const Home = () => {
  return (
    <>
      <Hero />
      <PostYourAd />
      <BrowseCars />
      <div className="container--pad">
        <FeaturedCars />
      </div>
      <CarComparison />
      <NewsReviewsDiscussions />
    </>
  );
};

export default Home;
