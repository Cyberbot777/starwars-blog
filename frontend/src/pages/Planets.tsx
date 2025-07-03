import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import PageWrapper from "../components/PageWrapper";

interface Planet {
  uid: string;
  name: string;
}

export default function Planets() {
  const [planets, setPlanets] = useState<Planet[]>([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets")
      .then((res) => res.json())
      .then((data) => setPlanets(data.results))
      .catch((err) => console.error("Error fetching planets:", err));
  }, []);

  return (
    <PageWrapper>
      <h1 className="text-2xl font-bold text-gray-100 mb-4">Planets</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {planets.map((planet) => (
          <CharacterCard
            key={planet.uid}
            id={planet.uid}
            name={planet.name}
            imageUrl="https://lumiere-a.akamaihd.net/v1/images/aeos-prime-main_1af6e847.jpeg?region=0%2C0%2C1280%2C720"
            detailsPath="planets"
          />
        ))}
      </div>
    </PageWrapper>
  );
}
