import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import PageWrapper from "../components/PageWrapper";

interface Vehicle {
  uid: string;
  name: string;
}

export default function Vehicles() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/vehicles")
      .then((res) => res.json())
      .then((data) => setVehicles(data.results))
      .catch((err) => console.error("Error fetching vehicles:", err));
  }, []);

  return (
    <PageWrapper>
      <h1 className="text-2xl font-bold text-gray-100 mb-4">Vehicles</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {vehicles.map((vehicle) => (
          <CharacterCard
            key={vehicle.uid}
            id={vehicle.uid}
            name={vehicle.name}
            imageUrl="https://lumiere-a.akamaihd.net/v1/images/screen_shot_2015-05-26_at_5_16a39e17.png?region=0%2C71%2C812%2C457"
            detailsPath="vehicles"
          />
        ))}
      </div>
    </PageWrapper>
  );
}
