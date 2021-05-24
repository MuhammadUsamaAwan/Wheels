const SellItem = ({ imgURL, ribbon, title, price, city, id }) => {
  return (
    <div className="sell-item">
      <div className="sell-item__img-box">
        <a href={`/sell-car/${id}`}>
          <img src={imgURL} />
        </a>
        <div className="sell-item__img-box__ribbon">{ribbon}</div>
      </div>
      <div className="sell-item__details">
        <a href={`/sell-car/${id}`} className="sell-item__details__title">
          {title}
        </a>
        <div className="sell-item__details__price">PKR {price}</div>
        <div className="sell-item__details__city">{city}</div>
      </div>
    </div>
  );
};

export default SellItem;
