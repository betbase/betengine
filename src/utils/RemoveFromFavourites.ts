import { getJwtToken } from '@/utils/GetJwtToken';
import { SerieWithFavourite } from '@/models/SerieWithFavourite';
import { enqueueSnackbar } from 'notistack';
import { functions } from '@/appwrite';
import { ExecutionMethod } from 'appwrite';

export const removeFromFavourites = async (
  match: SerieWithFavourite,
  onRemovedFromFavourites: (serieId: string) => void
) => {
  try {
    const jwt = await getJwtToken();

    if (match.favourited) {
      await functions.createExecution(
        'crud_favourites',
        JSON.stringify({
          serieId: match.$id
        }),
        true,
        undefined,
        ExecutionMethod.DELETE,
        {
          'Content-Type': 'application/json',
          authorization: `Bearer ${jwt}`
        }
      );
    }

    onRemovedFromFavourites(match.$id);

    enqueueSnackbar(
      `${match.homeTeam.name} vs ${match.awayTeam.name} removed from favourites`,
      {
        variant: 'success'
      }
    );
  } catch {
    enqueueSnackbar('Error removing from favourites', { variant: 'error' });
  }
};
