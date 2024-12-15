import { SerieWithFavourite } from '@/models/SerieWithFavourite';
import { SerieModel } from '@/models/SerieModel';
import { database } from '@/appwrite';
import { FavouriteModel } from '@/models/FavouriteModel';

export const fetchMatch = async (
  matchId: string | undefined
): Promise<SerieWithFavourite | null> => {
  if (!matchId) return null;

  const userId = localStorage.getItem('userId');
  let favourited = false;

  const matchResponse: SerieModel = await database.getDocument(
    import.meta.env.VITE_APPWRITE_DATABASE_ID,
    'series',
    matchId
  );

  if (userId) {
    const favouritesResponse: FavouriteModel = await database.getDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      'favourites',
      `${matchId}${userId}`
    );

    favourited = !!favouritesResponse?.$id;
  }

  return {
    ...matchResponse,
    favourited
  };
};
