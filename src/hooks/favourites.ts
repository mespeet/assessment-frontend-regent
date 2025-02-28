"use server";

import { cookies } from "next/headers";

export const getFavourites = async (): Promise<number[]> => {
  const cookieStore = await cookies();
  const storedFavorites = cookieStore.get("favourites")?.value;
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

export const toggleFavourite = async (movieId: number) => {
  const favourites = await getFavourites();

  const updatedFavourites = favourites.includes(movieId)
    ? favourites.filter((id) => id !== movieId)
    : [...favourites, movieId];

  (await cookies()).set("favourites", JSON.stringify(updatedFavourites), { expires: 1096 });
};