import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleAdvertisement from "../../components/UI/SingleAdvertisement";
import LoadingIcon from "../../components/UI/LoadingIcon";
import { useRouter } from "next/router";
import { getSingleAdvertisement } from "../../redux/actions/advertisements";

const CarDetails = () => {
  const carDetails = useSelector(state => state.carDetails);
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  useEffect(async () => {
    if (id) dispatch(getSingleAdvertisement(id));
  }, [id]);

  if (carDetails.isLoading) {
    return (
      <section className="page-start">
        <LoadingIcon />
      </section>
    );
  }
  return (
    <section className="page-start">
      <SingleAdvertisement vehicle={carDetails.result} id={id} />
    </section>
  );
};

export default CarDetails;
