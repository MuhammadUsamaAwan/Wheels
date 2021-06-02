const AdvertisementItem = ({ imgURL, ribbon, title, price, city, id }) => {
  return (
    <div className="advertisement-item">
      <div className="advertisement-item__img-box">
        <a href={`/advertisement-car/${id}`}>
          <img src={imgURL} />
        </a>
        <div className="advertisement-item__img-box__ribbon">{ribbon}</div>
      </div>
      <div className="advertisement-item__details">
        <a
          href={`/advertisement-car/${id}`}
          className="advertisement-item__details__title"
        >
          {title}
        </a>
        <div className="advertisement-item__details__price">PKR {price}</div>
        <div className="advertisement-item__details__city">{city}</div>
      </div>
    </div>
  );
};

export default AdvertisementItem;
