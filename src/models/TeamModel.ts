import { Models } from 'appwrite';

export interface TeamModel extends Models.Document {
  name: string;
  colorPrimary: string;
  colorSecondary: string;
  logoUrl: string;
}