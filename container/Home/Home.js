import BrowseCars from "../../components/Home/Browse Cars/BrowseCars";
import CarComparison from "../../components/Home/CarComparison";
import Hero from "../../components/Home/Hero";
import NewsReviewsDiscussions from "../../components/Home/News, Reviews & Discussions/NewsReviewsDiscussions";
import FeaturedCars from "../../components/Used Cars/FeaturedCars";

const Home = () => {
  return (
    <>
      <Hero />
      <BrowseCars />
      <FeaturedCars />
      <CarComparison />
      <NewsReviewsDiscussions />
    </>
  );
};

export default Home;
