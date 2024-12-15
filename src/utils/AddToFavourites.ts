import { getJwtToken } from '@/utils/GetJwtToken';
import { SerieWithFavourite } from '@/models/SerieWithFavourite';
import { enqueueSnackbar } from 'notistack';
import { functions } from '@/appwrite';
import { ExecutionMethod } from 'appwrite';

export const addToFavourites = async (
  match: SerieWithFavourite,
  onAddedToFavourites: (serieId: string) => void
) => {
  try {
    const jwt = await getJwtToken();

    if (!match.favourited) {
      await functions.createExecution(
        'crud_favourites',
        JSON.stringify({
          serieId: match.$id
        }),
        true,
        undefined,
        ExecutionMethod.POST,
        {
          'Content-Type': 'application/json',
          authorization: `Bearer ${jwt}`
        }
      );
    }

    onAddedToFavourites(match.$id);

    enqueueSnackbar(
      `${match.homeTeam.name} vs ${match.awayTeam.name} added to favourites`,
      {
        variant: 'success'
      }
    );
  } catch {
    enqueueSnackbar('Error adding to favourites', { variant: 'error' });
  }
};
