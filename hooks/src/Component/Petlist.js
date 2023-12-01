import { Form, FormGroup } from "react-bootstrap";
import Pet from "./Pet";
import usePetfilter from "./usePetfilter";
import PetArray from "./PetArray";

function Petlist() {
  const { filteredPets, setFilter } = usePetfilter(PetArray);

  const handleFilterChange = (e) => {
    console.log("dsdsds");
    setFilter(e.target.value);
  };
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>
          <b>RACE :</b>
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter RACE"
          onChange={handleFilterChange}
        />
      </Form.Group>

      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* mapping  normal */}
        {/* {Arrayplayer.map((player ,key )=> <Player player={player} key = {key}/>
                )} */}
        {/* mapping  spread */}
        {filteredPets.map((pet, key) => (
          <Pet {...pet} key={key} />
        ))}
      </div>
    </>
  );
}

export default Petlist;
