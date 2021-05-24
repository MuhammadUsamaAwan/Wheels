import BlogItem from "../../components/Blog/BlogItem";
import SearchCarBikes from "../../components/Blog/SearchCarBikes";
import HeaderBlogs from "./HeaderBlogs";
import SellTabs from "./SellTabs";

const Blog = () => {
  return (
    <section className="blog">
      <HeaderBlogs />
      <BlogItem />
      <SearchCarBikes />
      <SellTabs />
    </section>
  );
};

export default Blog;
