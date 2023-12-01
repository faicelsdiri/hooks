import { useState } from "react";

function usePetfilter(pets) {
  const [filter, setFilter] = useState("");

  const filteredPets = pets.filter((pet) => {
    return (
      pet.location.toLowerCase().includes(filter.toLowerCase()) ||
      pet.race.toLowerCase().includes(filter.toLowerCase()) ||
      pet.name.toLowerCase().includes(filter.toLowerCase())
    );
  });
  return { filteredPets, setFilter };
}

export default usePetfilter;
