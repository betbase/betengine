import { getJwtToken } from '@/utils/GetJwtToken';
import { SerieWithFavourite } from '@/models/SerieWithFavourite';
import { enqueueSnackbar } from 'notistack';

export const addToFavourites = async (
  match: SerieWithFavourite,
  onAddedToFavourites: (serieId: string) => void
) => {
  const jwt = await getJwtToken();

  if (!match.favourited) {
    const response = await fetch(import.meta.env.VITE_CRUD_FAVOURITES, {
      method: 'POST',
      body: JSON.stringify({ serieId: match.$id }),
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${jwt}`
      }
    });

    enqueueSnackbar(
      response.ok
        ? `${match.homeTeam.name} vs ${match.awayTeam.name} added to favourites`
        : `Could not add ${match.homeTeam.name} vs ${match.awayTeam.name} to favourites`,
      { variant: response.ok ? 'success' : 'error' }
    );

    if (response.ok) onAddedToFavourites(match.$id);
  }
};
