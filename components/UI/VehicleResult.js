import { Card } from "antd";

const VehicleResult = ({id, image, title, city, modelYear, mileage, engineType, engineCapacity, transmission, featured, vehicleType, price}) => {
    return (
        <div className="vehicle-result">
            <Card>
                {featured && <div className="vehicle-result__featured">Featured</div>}
                <div className="vehicle-result__img-box">
                    <img src={image} />
                </div>
                <div className="vehicle-result__main">
                    <a href={`/${vehicleType}/${id}`} className="vehicle-result__main__title">{title}</a>
                    <div className="vehicle-result__main__city">{city}</div>
                    <div className="vehicle-result__main__price">{price}</div>
                    <div className="vehicle-result__main__features">
                        <div>{modelYear}</div>
                        <div>{mileage} KM</div>
                        <div>{transmission}</div>
                        <div>{engineCapacity} CC</div>
                        <div>{transmission}</div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default VehicleResult
