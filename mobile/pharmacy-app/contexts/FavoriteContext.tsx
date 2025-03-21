import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface FavoriteItem {
  id: string;
  name: string;
  description: string;
  price: string;
}

interface FavoritesContextType {
  items: FavoriteItem[];
  addToFavorites: (item: FavoriteItem) => void;
  removeFromFavorites: (id: string) => void;
  isFavorite: (id: string) => boolean;
  clearFavorites: () => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<FavoriteItem[]>([]);

  const addToFavorites = (item: FavoriteItem) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        return prevItems;
      } else {
        return [...prevItems, item];
      }
    });
  };

  const removeFromFavorites = (id: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const isFavorite = (id: string) => {
    return items.some(item => item.id === id);
  };

  const clearFavorites = () => {
    setItems([]);
  };

  return (
    <FavoritesContext.Provider value={{ items, addToFavorites, removeFromFavorites, isFavorite, clearFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}