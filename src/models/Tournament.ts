import { Models } from 'appwrite';

export interface TournamentModel extends Models.Document {
  name: string;
  nameShortened?: string | null;
  logoUrl?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  prizePool?: number | null;
}