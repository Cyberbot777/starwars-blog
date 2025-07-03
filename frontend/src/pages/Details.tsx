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

  const imageUrl =
    "https://lumiere-a.akamaihd.net/v1/images/din-djarin-the-mandalorian-main_38344f24.jpeg?region=0%2C100%2C1920%2C1080";

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
          <p>
            <strong>Birth Year:</strong> {data.birth_year}
          </p>
          <p>
            <strong>Gender:</strong> {data.gender}
          </p>
          <p>
            <strong>Height:</strong> {data.height} cm
          </p>
          <p>
            <strong>Mass:</strong> {data.mass} kg
          </p>
          <p>
            <strong>Hair Color:</strong> {data.hair_color}
          </p>
          <p>
            <strong>Eye Color:</strong> {data.eye_color}
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}
