import { SerieModel } from '@/models/SerieModel';

export interface SerieWithFavourite extends SerieModel {
  favourited: boolean;
}
