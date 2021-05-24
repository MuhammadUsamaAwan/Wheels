import { Typography } from "antd";

const BlogItem = () => {
  return (
    <div className="blog-item blog-item--var2">
      <div className="blog-item__img">
        <a href="/">
          <img src="https://static.pakwheels.com/2021/04/g6-1-357x210.jpg" />
        </a>
        <div className="blog-item__img__ribbon">Car Review</div>
      </div>
      <div className="blog-item__content">
        <Typography.Title level={4}>
          <a href="/" className="blog-item__content__title">
            DFSK To Launch Two Crossover SUVS By ‘End Of This Year’
          </a>
        </Typography.Title>
        <div className="blog-item__content__details">
          <a href="/" className="blog-item__content__details__author">
            Salman Ali
          </a>
          <div className="blog-item__content__details__date">
            April 28, 2020
          </div>
          <div className="blog-item__content__details__comments">
            6 Comments
          </div>
        </div>
        <p className="blog-item__content__text">
          Earlier this week, Dongfeng Sokon (DFSK) announced that it will be
          bringing the first hybrid SUV by Huawei to Pakistan soon. As per
          reports, the car will arrive here in second quarter of 2022. But it
          seems this…
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
