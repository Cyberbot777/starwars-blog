import { Link } from "react-router-dom";

interface CharacterCardProps {
  id: string;
  name: string;
}

export default function CharacterCard({ id, name }: CharacterCardProps) {
  const imageUrl =
  "https://lumiere-a.akamaihd.net/v1/images/din-djarin-the-mandalorian-main_38344f24.jpeg?region=0%2C100%2C1920%2C1080";


  return (
    <div className="bg-zinc-800 rounded shadow-md overflow-hidden hover:shadow-lg transition">
      <img src={imageUrl} alt={name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-xl text-white font-semibold mb-2">{name}</h2>
        <div className="flex justify-between items-center">
          <Link
            to={`/details/people/${id}`}
            className="text-sm text-yellow-400 hover:underline"
          >
            Learn more
          </Link>
          <button className="text-white text-xl hover:text-red-500 transition-all">
            ♥
          </button>
        </div>
      </div>
    </div>
  );
}
