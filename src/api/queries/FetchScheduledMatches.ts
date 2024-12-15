import { Models, Query } from 'appwrite';
import { SerieModel } from '@/models/SerieModel';
import { database } from '@/appwrite';
import { FavouriteModel } from '@/models/FavouriteModel';
import { SerieWithFavourite } from '@/models/SerieWithFavourite';

export const fetchScheduledMatches = async (): Promise<
  SerieWithFavourite[] | null
> => {
  const userId = localStorage.getItem('userId');
  const favouritedSeriesIds: string[] = [];

  const matchesResponse: Models.DocumentList<SerieModel> =
    await database.listDocuments(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      'series',
      [
        Query.greaterThanEqual('startTimeScheduled', new Date().toISOString()),
        Query.orderAsc('startTimeScheduled'),
        Query.equal('rosterReady', true)
      ]
    );

  if (userId) {
    const favouritesResponse: Models.DocumentList<FavouriteModel> =
      await database.listDocuments(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        'favourites',
        [
          Query.equal(
            'serie',
            matchesResponse.documents.map((match) => match.$id)
          ),
          Query.equal('user', userId)
        ]
      );

    favouritedSeriesIds.push(
      ...favouritesResponse.documents.map((favourite) => favourite.serie.$id)
    );
  }

  return matchesResponse.documents.map((v) => {
    return {
      ...v,
      favourited: favouritedSeriesIds.includes(v.$id)
    };
  });
};
