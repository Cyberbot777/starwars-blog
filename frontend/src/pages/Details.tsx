import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PageWrapper from "../components/PageWrapper";

export default function Details() {
  const { type, id } = useParams();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/${type}/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json.result.properties);
        setLoading(false);
      })
      .catch((err) => console.error("Error loading details:", err));
  }, [type, id]);

  let imageUrl =
    "https://lumiere-a.akamaihd.net/v1/images/din-djarin-the-mandalorian-main_38344f24.jpeg?region=0%2C100%2C1920%2C1080";

  if (type === "planets") {
    imageUrl =
      "https://lumiere-a.akamaihd.net/v1/images/aeos-prime-main_1af6e847.jpeg?region=0%2C0%2C1280%2C720";
  } else if (type === "vehicles") {
    imageUrl =
      "https://lumiere-a.akamaihd.net/v1/images/screen_shot_2015-05-26_at_5_16a39e17.png?region=0%2C71%2C812%2C457";
  }

  if (loading) {
    return (
      <PageWrapper>
        <p className="text-white">Loading...</p>
      </PageWrapper>
    );
  }

  if (!data) {
    return (
      <PageWrapper>
        <p className="text-white">No data found.</p>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={imageUrl}
          alt={data.name}
          className="w-full md:w-1/3 rounded shadow-lg"
        />
        <div className="flex-1 text-gray-300 space-y-2">
          <h1 className="text-3xl font-bold text-white">{data.name}</h1>

          {type === "people" && (
            <>
              <p><strong>Birth Year:</strong> {data.birth_year}</p>
              <p><strong>Gender:</strong> {data.gender}</p>
              <p><strong>Height:</strong> {data.height} cm</p>
              <p><strong>Mass:</strong> {data.mass} kg</p>
              <p><strong>Hair Color:</strong> {data.hair_color}</p>
              <p><strong>Eye Color:</strong> {data.eye_color}</p>
            </>
          )}

          {type === "planets" && (
            <>
              <p><strong>Climate:</strong> {data.climate}</p>
              <p><strong>Diameter:</strong> {data.diameter} km</p>
              <p><strong>Gravity:</strong> {data.gravity}</p>
              <p><strong>Orbital Period:</strong> {data.orbital_period}</p>
              <p><strong>Population:</strong> {data.population}</p>
              <p><strong>Terrain:</strong> {data.terrain}</p>
            </>
          )}

          {type === "vehicles" && (
            <>
              <p><strong>Model:</strong> {data.model}</p>
              <p><strong>Manufacturer:</strong> {data.manufacturer}</p>
              <p><strong>Cost:</strong> {data.cost_in_credits} credits</p>
              <p><strong>Length:</strong> {data.length} m</p>
              <p><strong>Crew:</strong> {data.crew}</p>
              <p><strong>Passengers:</strong> {data.passengers}</p>
            </>
          )}
        </div>
      </div>
    </PageWrapper>
  );
}
