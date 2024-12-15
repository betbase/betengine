import { Models } from 'appwrite';
import { SerieModel } from '@/models/SerieModel';
import { UserModel } from '@/models/UserModel';

export interface FavouriteModel extends Models.Document {
  serie: SerieModel;
  user: UserModel;
}
