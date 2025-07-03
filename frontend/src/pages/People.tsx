import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import PageWrapper from "../components/PageWrapper";

interface Person {
  uid: string;
  name: string;
}

export default function People() {
  const [characters, setCharacters] = useState<Person[]>([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results))
      .catch((err) => console.error("Error fetching characters:", err));
  }, []);

  return (
    <PageWrapper>
      <h1 className="text-2xl font-bold text-gray-100 mb-4">Characters</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {characters.map((char) => (
          <CharacterCard key={char.uid} id={char.uid} name={char.name} />
        ))}
      </div>
    </PageWrapper>
  );
}
