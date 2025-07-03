import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";


interface FavoriteItem {
  id: string;
  name: string;
  type: string;
  imageUrl: string;
}

interface FavoritesContextType {
  favorites: FavoriteItem[];
  addFavorite: (item: FavoriteItem) => void;
  removeFavorite: (id: string) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  const addFavorite = (item: FavoriteItem) => {
    setFavorites((prev) => [...prev, item]);
  };

  const removeFavorite = (id: string) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
}
