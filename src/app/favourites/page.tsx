"use server"

import { getFavourites } from "@/hooks/favourites";

export default async function FavoritesPage() {
  const favourites = await getFavourites();

  return (
    <div>
      {favourites.length === 0 ? <p>No favourites yet.</p> : 
        <ul>
          {favourites.map((id: any) => (
            <li key={id}>Movie ID: {id}</li>
          ))}
        </ul>
      }
    </div>
  );
}