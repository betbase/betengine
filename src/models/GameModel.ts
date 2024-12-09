import { Models } from 'appwrite';

export interface GameModel extends Models.Document {
  name: string;
  nameShortened: string;
  logoId: string;
}