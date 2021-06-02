import { Typography } from "antd";

const HeaderBlog = () => {
  return (
    <a href="/">
      <div className="header-blog">
        <div className="header-blog__picture"></div>
        <div className="header-blog__ribbon">News</div>
        <div className="header-blog__content">
          <Typography.Title level={3}>
            <a href="/" className="header-blog__content__title">
              OFFICIAL – 11th Generation Honda Civic is Here!
            </a>
          </Typography.Title>
          <div className="header-blog__content__details">
            <a href="/" className="header-blog__content__details__author">
              Fazal Wahab
            </a>
            <div className="header-blog__content__details__date">
              April 27, 2020
            </div>
            <div className="header-blog__content__details__comments">
              7 Comments
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default HeaderBlog;
