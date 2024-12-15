import { database } from '@/appwrite';
import { SerieWithFavourite } from '@/models/SerieWithFavourite';
import { Models, Query } from 'appwrite';
import { SerieModel } from '@/models/SerieModel';
import { FavouriteModel } from '@/models/FavouriteModel';

export const fetchLiveMatches = async (): Promise<
  SerieWithFavourite[] | null
> => {
  const userId = localStorage.getItem('userId');
  const favouritedSeriesIds: string[] = [];

  const liveMatchesResponse: Models.DocumentList<SerieModel> =
    await database.listDocuments(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      'series',
      [Query.equal('live', true), Query.equal('finished', false)]
    );

  if (userId) {
    const favouritesResponse = (await database.listDocuments(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      'favourites',
      [
        Query.equal(
          'serie',
          liveMatchesResponse.documents.map((match) => match.$id)
        ),
        Query.equal('user', userId)
      ]
    )) as Models.DocumentList<FavouriteModel>;

    favouritedSeriesIds.push(
      ...favouritesResponse.documents.map((favourite) => favourite.serie.$id)
    );
  }

  return liveMatchesResponse.documents.map((v) => {
    return {
      ...v,
      favourited: favouritedSeriesIds.includes(v.$id)
    };
  });
};
