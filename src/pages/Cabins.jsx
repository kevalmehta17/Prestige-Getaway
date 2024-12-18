import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  useEffect(() => {
    getCabins().then((data) => console.log(data));
  }, []);
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img
        src="https://qnldgrldoxjeruuzqrra.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg"
        alt="Cabin 001"
      />
    </Row>
  );
}

export default Cabins;
