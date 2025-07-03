import PageWrapper from "../components/PageWrapper";
import { useFavorites } from "../context/FavoritesContext";
import CharacterCard from "../components/CharacterCard";

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <PageWrapper>
      <h1 className="text-2xl font-bold text-gray-100 mb-4">Favorites</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-400">No favorites yet. Click ♥ on a card to add one!</p>
      ) : (
        <>
          <p className="text-sm text-gray-400 mb-2">
            Click the heart ♥ to remove from favorites.
          </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((item) => (
            <CharacterCard
              key={item.id}
              id={item.id}
              name={item.name}
              imageUrl={item.imageUrl}
              detailsPath={item.type}
            />
          ))}
        </div>
          </>
      )}
    </PageWrapper>
  );
}
