import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

interface CharacterCardProps {
  id: string;
  name: string;
  imageUrl?: string;
  detailsPath?: string;
}

export default function CharacterCard({
  id,
  name,
  imageUrl,
  detailsPath = "people", 
}: CharacterCardProps) {
  const defaultImage =
    "https://lumiere-a.akamaihd.net/v1/images/din-djarin-the-mandalorian-main_38344f24.jpeg?region=0%2C100%2C1920%2C1080";

  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const isFavorited = favorites.some(
    (item) => item.id === id && item.type === detailsPath
  );

  const handleToggleFavorite = () => {
    const favoriteItem = {
      id,
      name,
      type: detailsPath,
      imageUrl: imageUrl || defaultImage,
    };

    if (isFavorited) {
      removeFavorite(id);
    } else {
      addFavorite(favoriteItem);
    }
  };

  return (
    <div className="bg-zinc-800 rounded shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={imageUrl || defaultImage}
        alt={name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl text-white font-semibold mb-2">{name}</h2>
        <div className="flex justify-between items-center">
          <Link
            to={`/details/${detailsPath}/${id}`}
            className="text-sm text-yellow-400 hover:underline"
          >
            Learn more
          </Link>
          <button
            onClick={handleToggleFavorite}
            className={`text-xl transition-all ${
              isFavorited ? "text-red-500" : "text-white hover:text-red-500"
            }`}
          >
            ♥
          </button>
        </div>
      </div>
    </div>
  );
}
