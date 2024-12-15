import { getJwtToken } from '@/utils/GetJwtToken';
import { SerieWithFavourite } from '@/models/SerieWithFavourite';
import { enqueueSnackbar } from 'notistack';

export const removeFromFavourites = async (
  match: SerieWithFavourite,
  onRemovedFromFavourites: (serieId: string) => void
) => {
  const jwt = await getJwtToken();

  const response = await fetch(import.meta.env.VITE_CRUD_FAVOURITES, {
    method: 'DELETE',
    body: JSON.stringify({ serieId: match.$id }),
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${jwt}`
    }
  });

  enqueueSnackbar(
    response.ok
      ? `${match.homeTeam.name} vs ${match.awayTeam.name} removed from favourites`
      : `Could not remove ${match.homeTeam.name} vs ${match.awayTeam.name} from favourites`,
    { variant: response.ok ? 'success' : 'error' }
  );

  if (response.ok) onRemovedFromFavourites(match.$id);
};
